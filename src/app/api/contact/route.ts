import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initializing Resend with the provided API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error('[EMAIL ERROR]: Missing RESEND_API_KEY environment variable.');
        return NextResponse.json(
            { success: false, message: 'Server configuration error.' },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();
        const { type, name, email, phone, message, selections, loeInitiated } = body;

        const isProject = type === 'project';

        // Define destination and sender based on inquiry type
        const destinationEmail = isProject ? 'sales@neonbyteai.com' : 'support@neonbyte.com';
        const fromEmail = isProject
            ? 'NeonByte AI Sales <sales@neonbyteai.com>'
            : 'NeonByte AI Support <support@neonbyte.com>';

        const subject = isProject
            ? `[PROJECT] New Inquiry: ${selections?.company || name}`
            : `[SUPPORT] ${selections?.category || 'New Ticket'}: ${name}`;

        // Helper to format modular selections if they exist
        const renderModularInquiry = () => {
            if (!isProject || !selections?.selectedPlan) return '';
            const plan = selections.selectedPlan;
            if (plan.type !== 'modular') return '';

            const modules = plan.modules || {};
            const activeModules = Object.entries(modules).filter(([_, qty]: any) => qty > 0);

            return `
                <div style="margin-top: 24px; border-top: 1px solid #222; pt: 20px;">
                    <h2 style="font-size: 12px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase;">Modular Configuration</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                        <tr style="border-bottom: 1px solid #1a1a1a;"><td style="color: #888; padding: 8px 0;">Base Package</td><td style="color: #fff; text-align: right;">${plan.package?.name}</td></tr>
                        ${activeModules.map(([name, qty]: any) => `
                            <tr style="border-bottom: 1px solid #1a1a1a;"><td style="color: #888; padding: 8px 0;">+ ${name}</td><td style="color: #fff; text-align: right;">x${qty}</td></tr>
                        `).join('')}
                        ${plan.maintenance ? `<tr style="border-bottom: 1px solid #1a1a1a;"><td style="color: #888; padding: 8px 0;">Maintenance</td><td style="color: #fff; text-align: right;">${plan.maintenance}</td></tr>` : ''}
                        <tr><td style="color: #FF6A01; padding: 12px 0; font-weight: bold;">One-Time Total</td><td style="color: #FF6A01; text-align: right; font-weight: bold; font-size: 18px;">$${plan.oneTimeTotal?.toLocaleString()}</td></tr>
                        ${plan.recurringTotal > 0 ? `<tr><td style="color: #888; padding: 4px 0;">Monthly Recurring</td><td style="color: #fff; text-align: right;">$${plan.recurringTotal?.toLocaleString()}/mo</td></tr>` : ''}
                    </table>
                </div>
            `;
        };

        const htmlContent = `
            <div style="font-family: 'Inter', Arial, sans-serif; background: #050505; color: #ffffff; padding: 40px; border-radius: 20px; border: 1px solid #1a1a1a; max-width: 600px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                <div style="border-bottom: 1px solid #1a1a1a; padding-bottom: 24px; margin-bottom: 30px; text-align: center;">
                    <div style="display: inline-block; padding: 8px 16px; border: 1px solid #FF6A01; border-radius: 8px; margin-bottom: 16px;">
                        <span style="color: #FF6A01; font-weight: 900; font-size: 20px; letter-spacing: 4px; text-transform: uppercase;">NEONBYTE AI</span>
                    </div>
                    <p style="color: #FF6A01; font-size: 10px; margin: 0; letter-spacing: 3px; font-weight: 700; text-transform: uppercase;">${isProject ? 'Mission Protocol: Project Briefing' : 'Operational Support: Ticket Pipeline'}</p>
                    <p style="color: #333; font-size: 10px; margin-top: 8px; font-family: monospace;">TIMESTAMP: ${new Date().toISOString()}</p>
                </div>

                <div style="margin-bottom: 30px; background: #0a0a0a; padding: 20px; border-radius: 12px; border: 1px solid #111;">
                    <h2 style="font-size: 11px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 16px; text-transform: uppercase; font-weight: 800;">Identity Vector</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="color: #444; padding: 8px 0; width: 120px; font-weight: 600;">NAME</td><td style="color: #fff; font-weight: 500;">${name}</td></tr>
                        <tr><td style="color: #444; padding: 8px 0;">EMAIL</td><td style="color: #fff;"><a href="mailto:${email}" style="color: #FF6A01; text-decoration: none;">${email}</a></td></tr>
                        ${phone ? `<tr><td style="color: #444; padding: 8px 0;">PHONE</td><td style="color: #fff;">${phone}</td></tr>` : ''}
                        ${isProject ? `<tr><td style="color: #444; padding: 8px 0;">COMPANY</td><td style="color: #fff;">${selections?.company || 'N/A'}</td></tr>` : ''}
                    </table>
                </div>

                ${isProject ? `
                <div style="margin-bottom: 30px; background: #0a0a0a; padding: 20px; border-radius: 12px; border: 1px solid #111;">
                    <h2 style="font-size: 11px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 16px; text-transform: uppercase; font-weight: 800;">Mission Parameters</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="color: #444; padding: 8px 0; width: 120px; font-weight: 600;">PATHWAY</td><td style="color: #FF6A01; font-weight: 800;">${selections?.pathway?.toUpperCase() || 'CUSTOM'}</td></tr>
                        <tr><td style="color: #444; padding: 8px 0;">TIER</td><td style="color: #fff;">${selections?.projectTier || 'Tailored Intelligence'}</td></tr>
                        ${loeInitiated ? `<tr><td style="color: #444; padding: 8px 0;">LOE STATUS</td><td style="color: #FF6A01; font-weight: bold;">INITIATED</td></tr>` : ''}
                    </table>
                    ${renderModularInquiry()}
                </div>
                ` : `
                <div style="margin-bottom: 30px; background: #0a0a0a; padding: 20px; border-radius: 12px; border: 1px solid #111;">
                    <h2 style="font-size: 11px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 16px; text-transform: uppercase; font-weight: 800;">Support Vector</h2>
                    <p style="color: #fff; font-weight: bold; font-size: 16px; margin: 0;">${selections?.category || 'General Support'}</p>
                </div>
                `}

                <div style="margin-bottom: 30px;">
                    <h2 style="font-size: 11px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase; font-weight: 800;">Briefing Content</h2>
                    <div style="background: #080808; padding: 24px; border-radius: 12px; border-left: 4px solid #FF6A01; color: #bbb; line-height: 1.8; white-space: pre-wrap; font-size: 14px; border: 1px solid #1a1a1a;">
                        ${message}
                    </div>
                </div>

                <div style="border-top: 1px solid #1a1a1a; padding-top: 24px; text-align: center;">
                    <p style="font-size: 10px; color: #222; margin: 0; letter-spacing: 1px;">Origin: ${selections?.referringPage || 'Nexus Ecosystem Submission'}</p>
                    <p style="font-size: 10px; color: #FF6A01; margin: 8px 0 0; font-weight: bold; opacity: 0.5;">NEONBYTE AI — HQ OPERATIONS</p>
                </div>
            </div>
        `;

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [destinationEmail],
            subject: subject,
            html: htmlContent,
            replyTo: email,
        });

        if (error) {
            console.error('[RESEND ERROR]:', error);
            return NextResponse.json(
                { success: false, message: 'Failed to deliver message. Please try again.' },
                { status: 500 }
            );
        }

        console.log('[EMAIL SENT] ID:', data?.id, '→', destinationEmail);

        return NextResponse.json({
            success: true,
            message: 'Message received successfully. Our team will contact you shortly.'
        });

    } catch (error: any) {
        console.error('[EMAIL SYSTEM ERROR]:', error);
        return NextResponse.json(
            { success: false, message: 'Internal processing error.' },
            { status: 500 }
        );
    }
}

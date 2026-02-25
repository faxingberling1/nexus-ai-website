import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

        const destinationEmail = type === 'project' ? 'sales@neonbyteai.com' : 'support@neonbyteai.com';

        const isProject = type === 'project';
        const subject = isProject
            ? `[PROJECT] New Inquiry: ${selections?.company || name}`
            : `[SUPPORT] ${selections?.category || 'New Ticket'}: ${name}`;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 16px; border: 1px solid #333; max-width: 600px; margin: 0 auto;">
                <div style="border-bottom: 2px solid #FF6A01; padding-bottom: 20px; margin-bottom: 30px;">
                    <h1 style="color: #FF6A01; margin: 0; font-size: 22px; letter-spacing: 2px;">NEONBYTE AI</h1>
                    <p style="color: #FF6A01; font-size: 11px; margin-top: 4px; letter-spacing: 1px;">${isProject ? 'PROJECT INQUIRY' : 'SUPPORT TICKET'}</p>
                    <p style="color: #555; font-size: 11px; margin-top: 4px;">${new Date().toLocaleString()}</p>
                </div>

                <div style="margin-bottom: 24px;">
                    <h2 style="font-size: 12px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase;">Client Identity</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="color: #888; padding: 6px 0; width: 130px;">Name</td><td style="color: #fff;">${name}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">Email</td><td style="color: #fff;"><a href="mailto:${email}" style="color: #FF6A01;">${email}</a></td></tr>
                        ${phone ? `<tr><td style="color: #888; padding: 6px 0;">Phone</td><td style="color: #fff;">${phone}</td></tr>` : ''}
                        ${isProject ? `
                        <tr><td style="color: #888; padding: 6px 0;">Company</td><td style="color: #fff;">${selections?.company || 'N/A'}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">Role</td><td style="color: #fff;">${selections?.role || 'N/A'}</td></tr>
                        ` : ''}
                    </table>
                </div>

                ${isProject ? `
                <div style="margin-bottom: 24px;">
                    <h2 style="font-size: 12px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase;">Project Scope</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="color: #888; padding: 6px 0; width: 130px;">Engagement Model</td><td style="color: #FF6A01; font-weight: bold;">${selections?.pathway === 'package' ? 'Service Package' : 'Tailored Project'}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">Expertise Area</td><td style="color: #fff;">${selections?.focusArea || 'N/A'}</td></tr>
                        ${selections?.pathway === 'package' ? `<tr><td style="color: #888; padding: 6px 0;">Service Plan</td><td style="color: #fff;">${selections?.projectTier || 'Custom Build'}</td></tr>` : ''}
                        <tr><td style="color: #888; padding: 6px 0;">Scale</td><td style="color: #fff;">${selections?.projectScale || 'N/A'}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">Timeline</td><td style="color: #fff;">${selections?.timeline || 'N/A'}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">Investment</td><td style="color: #fff;">${selections?.budget || 'N/A'}</td></tr>
                        <tr><td style="color: #888; padding: 6px 0;">LoE Status</td><td style="color: #FF6A01; font-weight: bold;">${loeInitiated ? 'INITIATED' : 'Not Requested'}</td></tr>
                    </table>
                </div>
                ` : `
                <div style="margin-bottom: 24px;">
                    <h2 style="font-size: 12px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase;">Category</h2>
                    <p style="color: #fff; font-weight: bold;">${selections?.category || 'General Support'}</p>
                </div>
                `}

                <div style="margin-bottom: 24px;">
                    <h2 style="font-size: 12px; letter-spacing: 2px; color: #FF6A01; margin-bottom: 12px; text-transform: uppercase;">Message</h2>
                    <div style="background: #111; padding: 20px; border-radius: 10px; border-left: 3px solid #FF6A01; color: #ccc; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">
                        ${message}
                    </div>
                </div>

                <div style="border-top: 1px solid #222; padding-top: 16px; font-size: 11px; color: #444;">
                    <p style="margin: 0;">Origin: ${selections?.referringPage || 'Direct Website Submission'}</p>
                    <p style="margin: 4px 0 0;">NeonByte AI — Operational System</p>
                </div>
            </div>
        `;

        const { data, error } = await resend.emails.send({
            from: 'NeonByte AI <notifications@neonbyteai.com>',
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

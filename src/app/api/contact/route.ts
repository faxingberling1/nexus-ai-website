import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, name, email, message, selections, loeInitiated } = body;

        // Routing Logic
        const destinationEmail = type === 'project' ? 'sales@neonbyteai.com' : 'support@neonbyteai.com';

        // Log the submission (Simulating professional email payload)
        console.log(`[NOTIFY]: New ${type.toUpperCase()} inquiry for ${destinationEmail}`);
        console.log(`-------------------------------------------`);
        console.log(`FEEDBACK LOOP ACTIVE: ${name} <${email}>`);

        if (type === 'project') {
            console.log(`ORGANIZATION: ${selections.company || 'N/A'}`);
            console.log(`POSITION: ${selections.role || 'N/A'}`);
            console.log(`SCOPE: ${selections.projectScale || 'N/A'}`);
            console.log(`LENS: ${selections.focusArea || 'N/A'}`);
            console.log(`TIMELINE: ${selections.timeline || 'N/A'}`);
            console.log(`INVESTMENT: ${selections.budget || 'N/A'}`);
            console.log(`LOE REQUESTED: ${loeInitiated ? 'YES' : 'NO'}`);
        } else {
            console.log(`CATEGORY: ${selections?.category || 'General Support'}`);
        }

        console.log(`OBJECTIVES: ${message}`);
        console.log(`SOURCE: ${selections?.referringPage || 'Direct'}`);
        console.log(`-------------------------------------------`);

        // In a production environment, you would use a service like Resend, Nodemailer, or SendGrid here.
        /*
        await resend.emails.send({
            from: 'NeonByte <system@neonbyteai.com>',
            to: destinationEmail,
            subject: `New ${type === 'project' ? 'Project' : 'Support'} Submission from ${name}`,
            html: `...template...`
        });
        */

        return NextResponse.json({
            success: true,
            message: 'Message received successfully. Our team will contact you shortly.'
        });

    } catch (error) {
        console.error('[EMAIL SYSTEM ERROR]:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process message. Please try again later.' },
            { status: 500 }
        );
    }
}

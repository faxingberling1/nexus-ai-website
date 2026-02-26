import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, platform, date, time, timezone, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Nexus AI <support@neonbyteai.com>',
            to: ['support@neonbyteai.com'], // Business email (Admin)
            subject: `New Strategy Call Booking: ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #FF6A00;">New Strategy Call Scheduled</h2>
                    <p>A new strategy call has been booked through the Nexus AI website.</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #666; font-size: 14px;">Client Name:</td>
                            <td style="padding: 10px 0; font-weight: bold;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666; font-size: 14px;">Email:</td>
                            <td style="padding: 10px 0; font-weight: bold;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666; font-size: 14px;">Date:</td>
                            <td style="padding: 10px 0; font-weight: bold;">${date}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666; font-size: 14px;">Time:</td>
                            <td style="padding: 10px 0; font-weight: bold;">${time} (${timezone})</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #666; font-size: 14px;">Platform:</td>
                            <td style="padding: 10px 0; font-weight: bold;">${platform}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                        <p style="margin: 0; color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase;">Message:</p>
                        <p style="margin: 5px 0 0 0; color: #333;">${message || 'No additional message provided.'}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

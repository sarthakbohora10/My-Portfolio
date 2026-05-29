import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_RECEIVER_EMAIL;
    const from = process.env.CONTACT_SENDER_EMAIL || 'onboarding@resend.dev';

    if (!apiKey || !to) {
      console.error('Missing RESEND_API_KEY or CONTACT_RECEIVER_EMAIL in .env.local');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set up .env.local.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const escape = (str) =>
      String(str).replace(/[&<>"']/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
      );

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
        <h2 style="color: #1e293b; margin: 0 0 16px;">New message from your portfolio</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed;">
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escape(name)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
          <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #334155;">${escape(message)}</p>
        </div>
        <p style="color: #64748b; font-size: 12px; margin-top: 16px;">
          Sent from sarthakbohora.dev contact form
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}

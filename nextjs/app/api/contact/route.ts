import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set');
    return NextResponse.json({ message: 'Server configuratiefout' }, { status: 500 });
  }

  sgMail.setApiKey(apiKey);

  try {
    const { naam, email, bericht } = await req.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json({ message: 'Alle velden zijn verplicht' }, { status: 400 });
    }

    const msg = {
      to: 'elvatix@gmail.com',
      from: { email: 'elvatix@gmail.com', name: 'Elvatix Support' },
      replyTo: 'support@elvatix.com',
      subject: 'Elvatix - Support Question',
      text: `Naam: ${naam}\nEmail: ${email}\nBericht: ${bericht}`,
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${bericht}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: 'Bericht verstuurd' }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error);
    // Log full response body for debugging
    if (error && typeof error === 'object' && 'response' in error) {
      const resp = (error as any).response;
      console.error('SendGrid response body:', JSON.stringify(resp?.body));
      console.error('SendGrid response status:', resp?.statusCode);
    }
    return NextResponse.json({ message: 'Er ging iets mis bij het versturen' }, { status: 500 });
  }
}

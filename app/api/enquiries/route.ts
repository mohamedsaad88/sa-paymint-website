import { NextResponse } from 'next/server';
import { interests } from '@/lib/content';
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: 'Request origin not allowed.' },
      { status: 403 },
    );
  if (Number(request.headers.get('content-length') || 0) > 16000)
    return NextResponse.json(
      { error: 'Your enquiry is too long.' },
      { status: 413 },
    );
  try {
    const raw = await request.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { error: 'Your enquiry is too long.' },
        { status: 413 },
      );
    const d = JSON.parse(raw);
    const valid = (key: string, max: number, required = true) =>
      typeof d[key] === 'string' &&
      d[key].trim().length <= max &&
      (!required || d[key].trim().length > 0);
    if (d.website)
      return NextResponse.json(
        { error: 'Unable to process this enquiry.' },
        { status: 400 },
      );
    if (
      !valid('name', 100) ||
      !valid('email', 200) ||
      !valid('company', 160) ||
      !valid('message', 3000) ||
      !valid('phone', 40, false) ||
      !interests.includes(d.interest) ||
      d.consent !== true ||
      !/^\S+@\S+\.\S+$/.test(d.email)
    )
      return NextResponse.json(
        { error: 'Please check the required fields and consent.' },
        { status: 400 },
      );
    const destination = process.env.LEAD_WEBHOOK_URL;
    if (!destination)
      return NextResponse.json({ code: 'EMAIL_FALLBACK' }, { status: 503 });
    if (!destination.startsWith('https://'))
      return NextResponse.json(
        { error: 'Direct delivery is unavailable. Please use email.' },
        { status: 503 },
      );
    const payload = {
      name: d.name.trim(),
      email: d.email.trim(),
      company: d.company.trim(),
      phone: d.phone.trim(),
      interest: d.interest,
      message: d.message.trim(),
      consent: true,
      source: 'PayMint South Africa website',
      receivedAt: new Date().toISOString(),
    };
    const response = await fetch(destination, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.LEAD_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json(
        { error: 'We could not deliver your enquiry. Please try email.' },
        { status: 502 },
      );
    return NextResponse.json(
      { ok: true },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch {
    return NextResponse.json(
      {
        error:
          'We could not process this enquiry. Please check the details or use email.',
      },
      { status: 400 },
    );
  }
}

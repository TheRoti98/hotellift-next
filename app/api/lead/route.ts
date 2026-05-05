import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'mail.4wz.pl',
  port: 465,
  secure: true,
  auth: {
    user: 'kontakt@4wz.pl',
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const webhookUrl = process.env.WEBHOOK_VIDEO
  const webhookPromise = webhookUrl
    ? fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).catch(() => {})
    : Promise.resolve()

  const emailPromise = transporter.sendMail({
    from: '"HotelLift" <kontakt@4wz.pl>',
    to: 'kontakt@4wz.pl',
    subject: '[HotelLift] Nowy lead - wideo',
    html: `
      <h2>Nowy lead z formularza wideo</h2>
      <p><b>E-mail:</b> ${body.email ?? '-'}</p>
      <p><b>Telefon:</b> ${body.phone ?? '-'}</p>
      <p><b>Źródło:</b> ${body.source ?? '-'}</p>
    `,
  }).catch(() => {})

  await Promise.all([webhookPromise, emailPromise])

  return NextResponse.json({ ok: true })
}

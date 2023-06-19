import { NextResponse } from 'next/server';
let nodemailer = require('nodemailer')


export async function POST(request) {
  const {name, email, number, appointment_location, Subject, message} = await request.json()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMIAL_PASSWORD_TOKEN
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mobile Number: </strong> ${number}</p>
        <p><strong>Appointment Location: </strong> ${appointment_location}</p>
        <p><strong>Subject: </strong> ${Subject}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return NextResponse.json({ status: 200, message: "email send successfully!" });
}
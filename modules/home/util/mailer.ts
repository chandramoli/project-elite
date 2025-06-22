// app/contact/sendEmail.ts
'use server';

import { RequestFormValues } from '@/types/home';
import nodemailer from 'nodemailer';

export async function sendEmail(formValues:RequestFormValues) {

  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user:  process.env.GMAIL_SMTP_USER, // ✅ sending from self
      pass:  process.env.GMAIL_SMTP_PASS, // ✅ use environment variable for password
    },
  });

const mailOptions = {
  from: `Website Contact Form <no-reply@${process.env.EMAIL_FROM}>', // or use the user's email`,
  to: process.env.EMAIL_TO, // ✅ sending to self
  subject: 'New Client Query',
  html: `<p>You have received a new client query:</p>
         <p><strong>Name:</strong> ${formValues.firstName} ${formValues.lastName}</p>
         <p><strong>Email:</strong> ${formValues.email}</p>
         <p><strong>Phone:</strong> ${formValues.phone}</p>
         <p><strong>Organization:</strong> ${formValues.organization || 'N/A'}</p>
         <p><strong>Message:</strong> ${formValues.message || 'No message provided'}</p>
`,
};
  await transporter.sendMail(mailOptions);
}

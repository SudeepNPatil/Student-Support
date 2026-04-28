import { resend } from '../Config/email.js';

export const sendWelcomeEmail = async (email, name) => {
  try {
    await resend.emails.send({
      from: 'Code Mentor <onboarding@resend.dev>',
      to: 'sudeeppatil873@gmail.com',
      subject: 'New Signup - Code Mentor 🚀',
      html: `
        <h2>${name} signup's today.</h2>
        <p>Here is the email ${email}</p>
        <p>Login to code mentor to view more about Him.</p>
      `,
    });

    console.log("Email sent successfully");
  } catch (err) {
    console.error("Email error:", err);
  }
};
import nodemailer from "nodemailer";
import env from "./env";

export default async function sendMail(subject: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpPort === 456,
    auth: {
      user: env.smtpUser,
      pass: env.smtpPass
    }
  });

  await transporter.sendMail({
    from: env.smtpFromEmail, // sender address
    to: env.toEmail, // list of receivers
    subject, // Subject line
    text: message // plain text body
    // html: "<b>Hello world?</b>" // html body
  });
}

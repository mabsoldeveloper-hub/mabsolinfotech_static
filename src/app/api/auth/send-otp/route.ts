
import { connectDB } from "@/lib/db";
import UserOtp from "@/models/UserOtp";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  await connectDB();

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await UserOtp.create({ email, otp });

  const transporter = nodemailer.createTransport({
    // host: "smtp.hostinger.com",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"Mabsol Infotech" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <!-- Header -->
    <div style="background-color: #185e9a; color: white; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">Mabsol Infotech Pvt. Ltd.</h2>
    </div>

    <!-- Body -->
    <div style="padding: 30px;">
      <p>Thank you for connecting with Mabsol Infotech!</p>
      <p>Please use the following One-Time Password (OTP) to verify your email:</p>

      <!-- OTP Box -->
      <div style="margin: 20px 0; background-color: #f0f4f8; padding: 15px; border-left: 4px solid #1565c0; text-align: center;">
        <span style="font-size: 24px; font-weight: bold; color: #1565c0;">${otp}</span>
      </div>

      <p style="margin-top: 20px;">
        This OTP is valid for 10 minutes. If you did not request this verification, you can ignore this email.
      </p>

      <p>
        Need help? Contact us at
        <a href="mailto:mabsolinfotech@gmail.com" style="color: #1565c0;">mabsolinfotech@gmail.com</a>.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; font-size: 12px; color: #999; padding: 15px;">
      © 2025 Mabsol Infotech. All rights reserved.
    </div>
  </div>
</body>`,
  });

  return Response.json({ success: true });
}

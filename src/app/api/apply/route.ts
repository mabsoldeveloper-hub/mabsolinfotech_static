import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Apply from "@/models/Apply";
import { writeFile } from "fs/promises";
import fs from "fs";
import path from "path";
import { transporter } from "@/lib/nodemailer";
export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    console.log("📩 Received FormData:", formData);

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File;

    // Create uploads folder if not exists
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    let fileName = "";
    let filePath = "";
    let savedFile: any = null;

    if (resume) {
      fileName = `${Date.now()}-${resume.name}`;
      filePath = path.join(uploadDir, fileName);

      const buffer = Buffer.from(await resume.arrayBuffer());
      await writeFile(filePath, buffer);

      savedFile = {
        filename: fileName,
        path: filePath,
        contentType: resume.type,
      };
    }

    // Save in MongoDB
    await Apply.create({
      fullName,
      email,
      phone,
      coverLetter,
      resumeFileName: fileName,
      resumeFilePath: `/uploads/${fileName}`,
      resumeFileType: resume?.type,
    });

const htmlTemplate = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f5f6fa; padding: 30px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <tr>
        <td style="background:#2C2F6B; padding:25px; text-align:center; color:#fff;">
          <h1 style="margin:0; font-size:24px; letter-spacing:1px;">Mabsol Infotech Pvt. Ltd.</h1>
          <p style="margin:5px 0 0; font-size:14px;">New Job Application Received</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:30px; color:#333;">
          <p style="font-size:15px; margin:0 0 15px;">
            Dear Hiring Team,
          </p>

          <p style="font-size:15px; margin:0 0 25px;">
            A new candidate has applied for a job through the Mabsol Infotech career portal.
          </p>

          <!-- Candidate Details Box -->
          <div style="background:#f0f4ff; padding:15px 20px; border-left:4px solid #2C2F6B; border-radius:5px; margin-bottom:25px;">
            <h3 style="margin:0 0 10px; color:#2C2F6B; font-size:18px;">Applicant Information</h3>

            <p style="margin:6px 0;"><strong>Name:</strong> ${fullName}</p>
            <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>
          </div>

          <!-- Cover Letter -->
          <h3 style="margin:0 0 10px; color:#444; font-size:17px;">Cover Letter</h3>
          <div style="background:#fafafa; border:1px solid #eee; padding:15px; border-radius:5px; font-size:14px; line-height:1.6;">
            ${coverLetter || "No cover letter provided."}
          </div>

          <p style="margin-top:20px; font-size:14px;">
            📎 <strong>The applicant's resume is attached with this email.</strong>
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f1f1f1; padding:20px; text-align:center; font-size:12px; color:#555;">
          <p style="margin:0; font-size:12px;">
            © ${new Date().getFullYear()} Mabsol Infotech Pvt. Ltd.  
            <br/>All Rights Reserved.
          </p>
        </td>
      </tr>

    </table>
  </div>
`;

    /// SEND EMAIL
    await transporter.sendMail({
       from: `"Job Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Job Application Received",
      html: htmlTemplate,
      attachments: savedFile ? [savedFile] : [],
    });

    return NextResponse.json(
      { message: "Application submitted & email sent successfully!" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong", details: err.message },
      { status: 500 }
    );
  }
}

import { connectDB } from "@/lib/db";
import Job, { IJob } from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body: Partial<IJob> = await req.json();

    // Basic validation
    if (!body.title) {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }

    // Defaults
    body.company = body.company || "Mabsol Infotech";
    body.location = body.location || "Panchkula";

    // -------- FIXED EXPIRE DATE LOGIC --------
    if (body.expireAt) {
      // convert to valid Date
      body.expireAt = new Date(body.expireAt);
    } else {
      // default 30 days
      const now = new Date();
      body.expireAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    }
    // -----------------------------------------

    const job = await Job.create(body);

    return NextResponse.json({ success: true, job });

  } catch (error: any) {
    console.error("POST /api/jobs error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}


  // GET ALL JOBS
export async function GET() {
  try {
    await connectDB();
    const today = new Date();
    const jobs = await Job.find({ expireAt: { $gt: today } }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
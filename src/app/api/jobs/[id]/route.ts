import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/Job";
import { connectDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, context: any) {
  try {
    await connectDB();

    const id = context.params.id;

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json({ success: false, message: "Job not found" }, { status: 404 });
    }

    const now = new Date();
    if (job.expireAt < now) {
      return NextResponse.json(
        { success: false, message: "Job has expired" },
        { status: 410 }
      );
    }

    return NextResponse.json({ success: true, job });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const id = context.params.id;

  await connectDB();

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return NextResponse.json({ success: false, message: "Job not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Job deleted successfully" });
}

export async function PATCH(req: NextRequest, context: any) {
  const id = context.params.id;

  await connectDB();

  const body = await req.json();

  if (body.expireDays) {
    const now = new Date();
    body.expireAt = new Date(now.setDate(now.getDate() + body.expireDays));
    delete body.expireDays;
  }

  const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });

  if (!updatedJob) {
    return NextResponse.json({ success: false, message: "Job not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, job: updatedJob });
}

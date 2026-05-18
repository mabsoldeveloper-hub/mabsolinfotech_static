import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/Job";
import { connectDB } from "@/lib/db";

export const dynamic = "force-dynamic";

// ================= GET =================
export async function GET(
  request: NextRequest,
  { params }: any
) {
  try {
    await connectDB();

    const id = params.id;

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        { status: 404 }
      );
    }

    const now = new Date();

    if (job.expireAt < now) {
      return NextResponse.json(
        {
          success: false,
          message: "Job has expired",
        },
        { status: 410 }
      );
    }

    return NextResponse.json({
      success: true,
      job,
    });

  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}

// ================= DELETE =================
export async function DELETE(
  request: NextRequest,
  { params }: any
) {
  try {
    await connectDB();

    const id = params.id;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job deleted successfully",
    });

  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}

// ================= PATCH =================
export async function PATCH(
  request: NextRequest,
  { params }: any
) {
  try {
    await connectDB();

    const body = await request.json();

    if (body.expireDays) {
      const now = new Date();

      body.expireAt = new Date(
        now.setDate(now.getDate() + body.expireDays)
      );

      delete body.expireDays;
    }

    const id = params.id;

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!updatedJob) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      job: updatedJob,
    });

  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
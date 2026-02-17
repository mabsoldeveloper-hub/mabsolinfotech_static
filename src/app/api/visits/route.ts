export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import visit from "@/models/visit";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI);
}

export async function GET() {
  const visits = await visit.find().sort({ timestamp: -1 }).limit(1000);
  return NextResponse.json({ ok: true, data: visits });
}

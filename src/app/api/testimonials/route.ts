// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Testimonial from "@/models/Testimonial";

// export async function POST(req: NextRequest) {
//   await connectDB();

//   const body = await req.json();

//   const testimonial = await Testimonial.create(body);

//   return NextResponse.json({
//     success: true,
//     testimonial,
//   });
// }

// export async function GET() {
//   await connectDB();

//   const testimonials = await Testimonial.find({
//     status: "approved",
//   });

//   return NextResponse.json({
//     success: true,
//     testimonials,
//   });
// }
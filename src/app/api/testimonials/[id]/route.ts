// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Testimonial from "@/models/Testimonial";

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const testimonial = await Testimonial.findByIdAndDelete(
//       params.id
//     );

//     if (!testimonial) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Testimonial not found",
//         },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Testimonial deleted successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Delete failed",
//       },
//       { status: 500 }
//     );
//   }
// }
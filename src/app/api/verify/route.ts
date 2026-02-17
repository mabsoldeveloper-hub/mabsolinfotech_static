import { connectDB } from "@/lib/db";
import Payment from "@/models/Payment";
import crypto from "crypto";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest("hex");

  if (razorpay_signature !== expectedSign) {
    return Response.json(
      { success: false, message: "Signature invalid" },
      { status: 400 }
    );
  }
  const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);

  await Payment.create({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    amount: paymentDetails.amount, 
    currency: paymentDetails.currency, 
    status: paymentDetails.status, 
    method: paymentDetails.method, 
    email: paymentDetails.email,
    contact: paymentDetails.contact,
  });

  return Response.json({
    success: true,
    message: "Payment verified!",
    paymentDetails,
  });
}

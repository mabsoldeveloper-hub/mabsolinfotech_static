"use client"

import { Button } from "antd";
import { useEffect, useState } from "react";

interface PaymentProps {
  totalPrice: number;
  user: {
    name: string;
    email: string;
    company: string;
  };
}
declare global {
  interface Window {
    Razorpay: any;
  }
}


export default function PaymentGetway({ totalPrice, user }: PaymentProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!totalPrice) return;
    setLoading(true);

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice, user }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: order.currency,
      name: user.company,
      description: `Payment by ${user.name}`,
      order_id: order.id,
      prefill: { name: user.name, email: user.email },
      theme: { color: "#3399cc" },
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...response,
            amount: totalPrice,
            ...user,
          }),
        });
        const verifyData = await verifyRes.json();
        verifyData.success
          ? alert("Payment Successful!")
          : alert("Payment Failed!");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <Button type="primary" onClick={handlePayment} loading={loading}>
      Pay ₹{totalPrice.toLocaleString("en-IN")}
    </Button>
  );
}

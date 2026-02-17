"use client"

import PaymentGetway from "@/component/payment-getway/PaymentGetway";

const Page = ({ searchParams }: any) => {
  const totalPrice = Number(searchParams.totalPrice);

  const user = {
    name: "Abhishek Singh",
    email: "abhishek@example.com",
    company: "Mabsol Infotech",
  };

  return <PaymentGetway totalPrice={totalPrice} user={user} />;
};

export default Page;

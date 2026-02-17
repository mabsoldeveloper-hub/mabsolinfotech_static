"use client";

import { usePathname } from "next/navigation";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "@/aos.css";


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // agar dashboard ke andar ho to header/footer hide karo
  const isDashboard = pathname.startsWith("/dashboard");
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // smooth animation
      once: true, // animation runs once
    });
  }, []);
  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}

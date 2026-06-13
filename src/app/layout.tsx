

import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import FloatingSocialBar from "@/component/floating-sidebaar/FloatingSocialBar";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mabsol Infotech Private Limited – Empowering Businesses",
  description:
    "Specializing in Web Development, Accounting Software, ERP Software, and Payroll Software, we offer tailored services to streamline your operations and drive business growth.",

  metadataBase: new URL("https://mabsolinfotech.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Sirf favicon, schema aur analytics rakho */}

        <link rel="icon" href="/favicon.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DH8QFG8B2X"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DH8QFG8B2X');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LayoutWrapper>
          {children}
          <ToastContainer position="top-center"/>
        </LayoutWrapper>
        <FloatingSocialBar />
      </body>
    </html>
  );
}
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
  title: {
    default:
      "Mabsol Infotech Pvt.Ltd - Software Company in Chandigarh, Mohali & Panchkula",
    template: "%s | Mabsol Infotech",
  },
  description:
    "Mabsol Infotech is a leading software company in Chandigarh, Panchkula & Mohali, offering ERP, CRM, web development, mobile apps, and IT solutions for businesses.",
  keywords:
    "Mabsol Infotech, software company Chandigarh, IT solutions, ERP software, Marg ERP partner, Marg software, Marg accounting software, Tally software, Tally ERP, Tally GST, GreytHR software, GreytHR payroll, HRMS software, web development, CRM software, business automation, software development company, mobile app development, digital solutions, IT services, Mohali software company, Panchkula IT solutions, best software company Tricity, business software solutions, customized ERP, online business tools, enterprise software, technology solutions India, IT consulting, software support services, Marg Tally integration, Tally ERP solutions, GreytHR payroll solutions, payroll management software, accounting solutions, Marg GST compliance, ABM Info Solutions, ABM Infotech, ABM Info ERP, ABM Info Tally, ABM Infotech services, ABM Info CRM, ABM Infotech payroll software, ABM Info web development, ABM Infotech IT solutions, ABM Info Mohali, ABM Infotech Panchkula, ABM Info Tricity software, ABM Infotech IT services",
  authors: [{ name: "Mabsol Infotech Pvt. Ltd." }],
  creator: "Mabsol Infotech Pvt. Ltd.",
  publisher: "Mabsol Infotech Pvt. Ltd.",
  metadataBase: new URL("https://mabsolinfotech.com"),
  alternates: { canonical: "https://mabsolinfotech.com" },
  openGraph: {
    title: "Mabsol Infotech Pvt.Ltd - Leading Software Company",
    description:
      "ERP, CRM, Web & Mobile App Development, IT Consulting, and Business Automation Solutions — all under one roof.",
    url: "https://mabsolinfotech.com",
    siteName: "Mabsol Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mabsolinfotech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mabsol Infotech Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabsol Infotech Pvt.Ltd - Software & IT Solutions",
    description:
      "Top Software Company in Chandigarh, Mohali & Panchkula providing ERP, CRM, HRMS & Web Solutions.",
    images: ["https://mabsolinfotech.com/5.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
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
          <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar={true}
          />
        </LayoutWrapper>
        <FloatingSocialBar />
      </body>
    </html>
  );
}

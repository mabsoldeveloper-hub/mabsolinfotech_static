import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import FloatingSocialBar from "@/component/floating-sidebaar/FloatingSocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Complete SEO Metadata for Mabsol Infotech (.com)
// export const metadata: Metadata = {
//   title: {
//     default: "Mabsol Infotech Pvt.Ltd - Software Company in Chandigarh, Mohali & Panchkula",
//     template: "%s | Mabsol Infotech",
//   },
//   description:
//     "Mabsol Infotech is a leading software company in Chandigarh, Panchkula & Mohali, offering ERP, CRM, web development, mobile apps, and IT solutions for businesses.",
//   keywords:
//     "Mabsol Infotech, software company Chandigarh, IT solutions, ERP software, Marg ERP partner, Marg software, Marg accounting software, Tally software, Tally ERP, Tally GST, GreytHR software, GreytHR payroll, HRMS software, web development, CRM software, business automation, software development company, mobile app development, digital solutions, IT services, Mohali software company, Panchkula IT solutions, best software company Tricity, business software solutions, customized ERP, online business tools, enterprise software, technology solutions India, IT consulting, software support services, Marg Tally integration, Tally Marg ERP, GreytHR payroll solutions, payroll management software, accounting solutions, Marg GST compliance, Tally ERP solutions, ABM Info Solutions, ABM Infotech, ABM Info ERP, ABM Info Tally, ABM Infotech services, ABM Info CRM, ABM Infotech payroll software, ABM Info web development, ABM Infotech IT solutions, ABM Info Mohali, ABM Infotech Panchkula, ABM Info Tricity software, ABM Infotech IT services",
//   metadataBase: new URL("https://mabsolinfotech.com"),
//   alternates: {
//     canonical: "https://mabsolinfotech.com",
//   },
//   openGraph: {
//     title: "Mabsol Infotech Pvt.Ltd - Leading Software Company",
//     description:
//       "ERP, CRM, Web & Mobile App Development, IT Consulting, and Business Automation Solutions — all under one roof.",
//     url: "https://mabsolinfotech.com",
//     siteName: "Mabsol Infotech",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "https://mabsolinfotech.com/og-image.jpg", // 👈 अपनी social preview image डालो
//         width: 1200,
//         height: 630,
//         alt: "Mabsol Infotech Software Solutions",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Mabsol Infotech Pvt.Ltd - Software & IT Solutions",
//     description:
//       "Top Software Company in Chandigarh, Mohali & Panchkula providing ERP, CRM, HRMS & Web Solutions.",
//     images: ["https://mabsolinfotech.com/5.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 👇 Logic: Hide Header/Footer if route starts with /dashboard

  return (
    <html lang="en">
      <head>
        <title>
          Mabsol Infotech Pvt.Ltd - Software Company in Chandigarh, Mohali &
          Panchkula
        </title>

        <meta
          name="description"
          content="Mabsol Infotech is a leading software company in Chandigarh, Panchkula & Mohali, offering ERP, CRM, web development, mobile apps, and IT solutions for businesses."
        />
        <meta
          name="keywords"
          content="Mabsol Infotech, software company Chandigarh, IT solutions, ERP software, Marg ERP partner, Marg software, Marg accounting software, Tally software, Tally ERP, Tally GST, GreytHR software, GreytHR payroll, HRMS software, web development, CRM software, business automation, software development company, mobile app development, digital solutions, IT services, Mohali software company, Panchkula IT solutions, best software company Tricity, business software solutions, customized ERP, online business tools, enterprise software, technology solutions India, IT consulting, software support services, Marg Tally integration, Tally Marg ERP, GreytHR payroll solutions, payroll management software, accounting solutions, Marg GST compliance, Tally ERP solutions, ABM Info Solutions, ABM Infotech, ABM Info ERP, ABM Info Tally, ABM Infotech services, ABM Info CRM, ABM Infotech payroll software, ABM Info web development, ABM Infotech IT solutions, ABM Info Mohali, ABM Infotech Panchkula, ABM Info Tricity software, ABM Infotech IT services"
        />

        {/* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta
          property="og:title"
          content="Mabsol Infotech Pvt.Ltd - Leading Software Company"
        />
        <meta
          property="og:description"
          content="ERP, CRM, Web & Mobile App Development, IT Consulting, and Business Automation Solutions — all under one roof."
        />
        <meta property="og:url" content="https://mabsolinfotech.com" />
        <meta property="og:site_name" content="Mabsol Infotech" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mabsolinfotech.com/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Mabsol Infotech Software Solutions"
        />

        {/* ✅ Twitter Card (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mabsol Infotech Pvt.Ltd - Software & IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Top Software Company in Chandigarh, Mohali & Panchkula providing ERP, CRM, HRMS & Web Solutions."
        />
        <meta
          name="twitter:image"
          content="https://mabsolinfotech.com/images/5.jpg"
        />

        {/* ✅ Robots + Canonical + Favicon */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mabsolinfotech.com" />
        <link rel="icon" href="/favicon.png" />

        {/* ✅ Viewport + Charset (basic SEO setup) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>

        <FloatingSocialBar />
      </body>
    </html>
  );
}

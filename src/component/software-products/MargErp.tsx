"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart,
  ShieldCheck,
  Cloud,
  FileText,
  Trash2,
} from "lucide-react";
import { Button  } from "antd";

const products = [
  {
    id: "basic",
    title: "Marg Erp 9+ — Basic",
    price: 9999,
    tag: "Basic",
    bullets: [
      "Single-user access",
      "Included Users: 1",
      "Extra User Cost: ₹2500 per user",
      "Multi-company support",
    ],
    image: "/images/marg-basic.png",
    route: "/margErp/margErp-Basic",
  },
  {
    id: "silver",
    title: "Marg Erp 9+ — Silver",
    price: 13500,
    tag: "Silver",
    bullets: [
      "Single-user access on LAN",
      "Included Users: 1 Full + 1 View-Only",
      "Extra User Cost: ₹3000 (Max 25)",
      "Extra Company Cost: ₹6500 (Max 25)",
      "Multi-company support",
    ],
    image: "/images/marg-basic.png",
    route: "/margErp/margErp-Silver",
  },
  {
    id: "gold",
    title: "Marg Erp 9+ — Gold",
    price: 21000,
    tag: "Gold",
    bullets: [
      "Multi-user with maximum features",
      "Advanced reports & analytics",
      "Extra users supported",
      "Best for growing businesses",
    ],
    image: "/images/marg-gold.webp",
    route: "/margErp/margErp-Gold",
  },
];

export default function MargErp() {
 
  const [toastMsg, setToastMsg] = useState("");

 

  const basicDetails = [
    "Core accounting & invoicing",
    "GST & compliance-ready",
    "Basic inventory management",
    "Perfect for beginners & small setups.",
    "Simple daily reports",
    "GST applicable: 18%",
    "Included Users: 1 Full-Rights User",
    "Extra User Cost: ₹3000 per user (Max 2 Users)",
    "Extra Company Cost: ₹6500 per company (Max 2 Companies)",
    "Browser access & basic reports",
    "Limited salesman/discount/scheme features",
    "No cloud backup protection",
    "Limited salesman/discount/scheme features",
    "No cloud backup protection",
  ];

  const silverDetails = [
    "Single user full-featured access.",
    "Advanced inventory & reporting",
    "Cost-effective for small & mid businesses.",
    "Salesman-wise tracking & schemes",
    "GST applicable: 18%",
    "Included Users: 1 Full-Rights User + 1 View-Only User",
    "Extra User Cost: ₹3000 per extra user (Max 25 Users)",
    "Extra Company Cost: ₹6500 per company (Max 25 Companies)",
    "Multi-company support (extra charge)",
    "Better security controls",
    "Faster reporting & improved performance",
    "Dedicated customer support",
    "Regular software updates with new features",
  ];
  const goldDetails = [
    "Multi-user access on LAN",
    "Suitable for medium to large businesses",
    "Handles large data & multiple operations smoothly.",
    "Advanced business analytics & reports",
    "GST applicable: 18%",
    "25 user access",
    "25 companies supported",
    "Included Users: Unlimited Users",
    "Extra User Cost: Unlimited users allowed (no limit)",
    "Salesman/discount/scheme features (advanced)",
    "Salesman/discount/scheme features (advanced)",
    "Cloud backup protection",
    "Email/SMS integration",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            Marg ERP 9+ — <span className="text-orange-600">Find the perfect edition tailored for your business</span>
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Marg ERP 9+ is built on the belief that technology should simplify
            business, empower owners, and help them grow with confidence. Marg
            adapts seamlessly to your business processes and provides accurate,
            actionable, and secure insights — so you can focus on what truly
            matters.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 bg-[#0b3a74] text-white rounded-lg font-medium">
              Contact Sales
            </button>
            <button className="px-5 py-3 border rounded-lg">
              Compare Editions
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            {/* 1️⃣ Access Anywhere */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <Cloud className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Access anywhere
                </div>
                <div className="text-gray-600">Reports from any browser</div>
              </div>
            </div>

            {/* 2️⃣ TallyVault */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">TallyVault</div>
                <div className="text-gray-600">End-to-end encryption</div>
              </div>
            </div>

            {/* 3️⃣ Actionable Reports */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <FileText className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Actionable reports
                </div>
                <div className="text-gray-600">Customisable & savable</div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero image mock */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="p-2">
            <img
              src="/images/Margbackbone.png"
              alt="Marg mock"
              className="w-full h-80 object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-6xl md:text-5xl font-bold text-center text-[#0b3a74] mb-12">
          Compare Marg ERP 9+ Editions
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* BASIC CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Metallic Blue Shimmer Border */}
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#1e3a8a,#3b82f6,#1e40af,#93c5fd)] animate-shimmer-blue"></div>

            <div className="relative bg-gradient-to-br from-blue-200 via-white to-blue-300 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Margbackbone.png"
                  alt="Marg Basic"
                  className="w-16 h-12 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Marg ERP 9+ Basic
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Great for small businesses needing billing, stock management,
                and GST-ready features.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {basicDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center">
                <Link href="/margErp/margErp-Basic">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    Choose Basic
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* SILVER CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Silver Metallic Shimmer */}
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#9ca3af,#e5e7eb,#6b7280,#d1d5db)] animate-shimmer-silver"></div>

            <div className="relative bg-gradient-to-br from-gray-200 via-white to-gray-300 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Margbackbone.png"
                  alt="Marg Silver"
                  className="w-16 h-12 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Marg ERP 9+ Silver
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Perfect for growing businesses needing a complete accounting,
                billing, and GST management solution.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {silverDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center">
                <Link href="/margErp/margErp-Silver">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    Choose Silver
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* GOLD CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Metallic Gold Shimmer */}
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#c7a200,#fff8dc,#c7a200,#fef7c3)] animate-shimmer-gold"></div>

            <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/Margbackbone.png"
                  alt="Marg Gold"
                  className="w-16 h-12 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Marg ERP 9+ Gold
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Designed for businesses with multiple staff members needing
                simultaneous access.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                {goldDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center">
                <Link href="/margErp/margErp-Gold">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    Choose Gold
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* features card     */}
      <Link href="/features-comparison">
        <Button className="inline-block  max-w-4xl px-5 py-5! bg-[#0b3a74]! text-white! !text-xl rounded-md font-medium shadow-md hover:bg-blue-600 transition">
          View Features Comparison Chart →
        </Button>
      </Link>

      {/* PRODUCTS SIDE-BY-SIDE */}
      <div className="min-h-screen w-full max-w-7xl bg-gray-50 p-6 mt-6 md:p-14">
        {/* Toast */}
        {toastMsg && (
          <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in">
            {toastMsg}
          </div>
        )}
        <h2 className="text-4xl font-bold text-center text-[#0b3a74] mb-12">
          Buy Your Marg ERP 9+ Basic, Silver & Gold
        </h2>

        {/* FULL-WIDTH FLEX DISPLAY */}
        <div className="w-full max-w-7xl mx-auto p-6 md:p-12 space-y-12">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-gray-50 hover:border-blue-800 transition shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center"
        >
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-64 object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#0b3a74]">{p.title}</h2>
            <p className="text-2xl font-semibold text-gray-700">₹{p.price}</p>

            <ul className="space-y-2 text-gray-600">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>✔️</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* BUY NOW BUTTON */}
            <Link
              href={`${p.route}`}
              className="inline-block mt-6 bg-[#0b3a74] hover:bg-[#082c56] text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>

       
      </div>

     
<div className="hidden sm:flex w-full min-h-screen sm:min-h-[80vh] justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white px-4">
  <img
    src="/images/Marg-infographics.jpg"
    alt="Marg Infographics"
    className="
      w-full 
      max-w-md 
      sm:max-w-2xl 
      md:max-w-4xl 
      object-contain
    "
  />
</div>


      {/* WHAT IS MARG ERP */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0b3a74] mb-10">
    What Exactly is Marg ERP 9+?
  </h2>

  {/* TOP CARDS */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10">
    {/* CARD 1 */}
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition">
      <h3 className="text-lg sm:text-xl font-semibold text-[#0b3a74] mb-2">
        Powerful Billing & GST
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Generate GST-compliant invoices, e-way bills, automate tax
        calculations, and track all financial transactions effortlessly.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition">
      <h3 className="text-lg sm:text-xl font-semibold text-[#0b3a74] mb-2">
        Smart Inventory Control
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Manage stock levels, expiry, batch, reorder points, transfers, and
        multi-warehouse operations with accuracy.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition col-span-2 md:col-span-1">
      <h3 className="text-lg sm:text-xl font-semibold text-[#0b3a74] mb-2">
        Industry-Ready Features
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Equipped for pharma, FMCG, retail, manufacturing, POS, loyalty,
        barcode, schemes & offers, and custom business workflows.
      </p>
    </div>
  </div>

  {/* BOTTOM SECTION */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-[#f3f7ff] p-6 sm:p-8 rounded-2xl shadow">
      <h4 className="text-xl sm:text-2xl font-bold text-[#0b3a74] mb-3">
        Integrated Mobile Apps
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        Marg offers mobile apps for retailers, field staff, and business
        owners— allowing order entry, tracking, performance analysis, and
        real-time data access.
      </p>
    </div>

    <div className="bg-[#f3f7ff] p-6 sm:p-8 rounded-2xl shadow">
      <h4 className="text-xl sm:text-2xl font-bold text-[#0b3a74] mb-3">
        Advanced Business Tools
      </h4>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        Generate MIS reports, manage pricing & discount policies, track
        invoices, handle multi-branch operations, and secure data with
        user-permission layers.
      </p>
    </div>
  </div>
</section>

    </div>
  );
}


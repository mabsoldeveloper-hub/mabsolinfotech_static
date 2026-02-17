"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function ErpSoftware() {
    const features = [
        {
            title: "Integrated Operations",
            desc: "Unify your business functions like finance, HR, and supply chain under one digital platform.",
        },
        {
            title: "Real-Time Insights",
            desc: "Access accurate, real-time data to make informed decisions and drive operational excellence.",
        },
        {
            title: "Cloud-Powered",
            desc: "Stay connected anytime, anywhere with secure and scalable cloud architecture.",
        },
        {
            title: "Data Security & Compliance",
            desc: "Protect your enterprise data with built-in compliance and advanced security protocols.",
        },
        {
            title: "Scalable & Flexible",
            desc: "Easily adapt your ERP system as your business grows, with modular and flexible components.",
        },
        {
            title: "Enhanced Collaboration",
            desc: "Empower teams with seamless data flow and cross-departmental visibility.",
        },
    ];

    const highlights = [
        "Accounting & Finance",
        "Project Management",
        "Inventory & Supply Chain",
        "Human Resources (HRMS)",
        "Procurement",
        "Production Management",
    ];

    return (
        <div className="text-center bg-[#f9fbff] text-gray-800">
            {/* Top Section */}
           <div
  className="
    h-[45vh] sm:h-[50vh] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center relative
    px-4 sm:px-6 text-center
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our4.webp')",
  }}
>
  {/* CONTENT */}
  <h1 className="
    text-3xl sm:text-4xl md:text-6xl
    font-bold text-white drop-shadow-md
  ">
    ERP Software
  </h1>

  <p className="
    text-sm sm:text-base md:text-lg
    mt-2 sm:mt-3
    text-white
    max-w-xl sm:max-w-2xl
  ">
    Manage your entire organization with real-time agility and unified
    data insights for smarter growth.
  </p>
</div>


            {/* 🔹 What is ERP */}
            {/* Content Section */}
           <div className="
  flex flex-col md:flex-row
  items-center justify-between
  px-4 sm:px-6 md:px-20
  py-12 sm:py-16 md:py-20
  bg-white text-gray-800
  gap-10
">
  {/* LEFT TEXT */}
  <div className="md:w-1/2 space-y-3 sm:space-y-4 text-center md:text-left">
    <h2 className="
      text-2xl sm:text-3xl md:text-4xl
      font-bold text-[#185e9a]
    ">
      What is <span className="text-orange-500">ERP Software?</span>
    </h2>

    <p className="
      text-sm sm:text-base md:text-lg
      text-gray-600 leading-relaxed
      text-justify md:text-left
    ">
      Enterprise Resource Planning (ERP) software integrates core business
      processes such as accounting, procurement, project management, and
      supply chain operations into one unified platform — ensuring data
      integrity, automation, and growth across the enterprise.
    </p>

    <p className="
      text-sm sm:text-base md:text-lg
      text-gray-600 leading-relaxed
      text-justify md:text-left
    ">
      ERP (Enterprise Resource Planning) software helps organizations manage
      finance, HR, manufacturing, supply chain, and procurement using a
      single database that eliminates duplication and improves
      decision-making.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/images/erp-soft.webp"
      alt="ERP Software"
      className="
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
        object-contain
      "
    />
  </div>
</div>


            {/* Highlights Section */}
           <div className="
  bg-gradient-to-b from-[#e8f1ff] to-[#f4f8ff]
  py-12 sm:py-16 md:py-20
  px-4 sm:px-6 md:px-20
  text-gray-800
">
  <div className="
    grid grid-cols-2
    md:grid-cols-2 lg:grid-cols-3
    gap-4 sm:gap-6 md:gap-10
    max-w-6xl mx-auto
  ">
    {highlights.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="
          relative group
          bg-gradient-to-br from-white to-[#e6f0ff]
          border border-blue-100
          shadow-md hover:shadow-xl
          p-4 sm:p-5 md:p-6
          rounded-xl sm:rounded-2xl
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* Glow effect */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-blue-100/40 to-blue-300/40
          blur-2xl transition duration-500
        " />

        {/* Icon & Text */}
        <div className="relative flex items-start gap-3">
          <div className="
            bg-gradient-to-br from-[#0b3a74] to-[#185e9a]
            p-2 sm:p-3
            rounded-full shadow-md
          ">
            <CheckCircle2 className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>

          <p className="
            text-gray-800
            text-xs sm:text-sm md:text-base
            font-semibold leading-snug
          ">
            {item}
          </p>
        </div>

        {/* Underline */}
        <div className="
          mt-2 sm:mt-3
          h-[2px] sm:h-[3px]
          w-0 group-hover:w-full
          bg-gradient-to-r from-[#0b3a74] to-[#185e9a]
          rounded-full transition-all duration-500
        " />
      </motion.div>
    ))}
  </div>
</div>



            {/* images */}
            <div className="hidden sm:flex w-full min-h-screen sm:min-h-[80vh] justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white px-4 ">
                <img
                    src="/images/erp-custom.webp"  // 🖼️ Replace with your image path
                    alt="Centered Image"
                    className="w-full max-w-4xl object-contain"
                />
            </div>

            {/* 🔹 Why Choose ERP */}
           <section className="
  bg-[#f0f5ff]
  py-12 sm:py-16 md:py-20
  px-4 sm:px-6 md:px-20
">
  <h3 className="
    text-2xl sm:text-3xl md:text-4xl
    font-bold text-center text-[#0b3a74]
    mb-8 sm:mb-10 md:mb-12
  ">
    Why Choose <span className="text-orange-500">Our ERP Software?</span>
  </h3>

  <div className="
    grid grid-cols-2
    md:grid-cols-2 lg:grid-cols-3
    gap-4 sm:gap-6 md:gap-8
    max-w-5xl mx-auto
  ">
    {features.map((item, index) => (
      <div
        key={index}
        className="
          bg-white
          rounded-xl sm:rounded-2xl
          shadow-md hover:shadow-xl
          transition
          p-4 sm:p-5 md:p-6
          text-center
        "
      >
        <h4 className="
          text-sm sm:text-lg md:text-xl
          font-semibold
          mb-2 sm:mb-3
          text-[#0e5aa7]
        ">
          {item.title}
        </h4>

        <p className="
          text-xs sm:text-sm md:text-base
          text-gray-600
          leading-relaxed
        ">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


        </div>
    );
}
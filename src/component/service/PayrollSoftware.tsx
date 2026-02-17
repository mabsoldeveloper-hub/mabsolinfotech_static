"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const PayrollSoftware = () => {
    const highlights = [
        "100% Statutory Compliance",
        "Customizable Salary Structures",
        "Fast & Accurate Payroll Processing",
        "Integrated Claims and Settlements",
        "Employee Self-Service Portal",
        "Cloud-Based Access & Security",
    ];

    const features = [
        {
            title: "End-to-End Automation",
            desc: "From employee onboarding to final settlements, automate every payroll process seamlessly.",
        },
        {
            title: "Statutory Compliance",
            desc: "Stay updated with PF, ESI, TDS, PT and all government norms automatically.",
        },
        {
            title: "Multi-Branch Integration",
            desc: "Centralized control of payroll data across multiple offices or branches in real time.",
        },
        {
            title: "Employee Self-Service Portal",
            desc: "Empower employees to download payslips, submit claims, and update details instantly.",
        },
        {
            title: "Cloud-Based & Secure",
            desc: "Access payroll data anytime, anywhere with enterprise-grade encryption and role-based access.",
        },
        {
            title: "Customizable Salary Structures",
            desc: "Design flexible CTC structures, components, and policies that suit your company’s needs.",
        },
    ];

    return (
        <div className=" text-center w-full min-h-screen bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white overflow-hidden">
            {/* Top Section */}

            <header className="h-[40vh] sm:h-[50vh] md:h-[60vh] flex justify-center items-center relative overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-scroll sm:bg-fixed"
                    style={{ backgroundImage: "url('/images/header-image.webp')" }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />

                {/* Content */}
                <div className="relative z-10 px-4 text-center">
                    <h1 className="text-white mb-3 text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Payroll Software
                    </h1>

                    <p className="text-xs sm:text-sm md:text-md text-white max-w-xl sm:max-w-3xl mx-auto">
                        Create, control, and enhance your brand identity through stunning,
                        high-performance websites.
                    </p>
                </div>

            </header>

            {/* Intro Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20 bg-white text-gray-800 relative gap-6 sm:gap-8">

                {/* Image (Left) */}
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <img
                        src="/images/our3.webp"
                        alt="Payroll Software"
                        className="w-full max-w-sm sm:max-w-md h-[220px] sm:h-[300px] rounded-lg shadow-lg object-cover"
                    />
                </motion.div>

                {/* Text (Right) */}
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 space-y-3 sm:space-y-4"
                >
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#185e9a]">
                        What is{" "}
                        <span className="text-orange-500">Payroll Software?</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify leading-6 sm:leading-relaxed">
                        Say goodbye to manual calculations and errors. Payroll Software by
                        Mabsol Infotech simplifies your salary management process — from
                        employee onboarding to final settlements. Ensure on-time salary
                        payments, compliance with regulations, and complete transparency in
                        every step.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify leading-6 sm:leading-relaxed">
                        The software supports customizable salary structures, employee
                        benefits, claims, tax calculations, and comprehensive reporting —
                        all designed to save time and boost efficiency for your HR team.
                    </p>
                </motion.div>

            </div>


            {/* Highlights Section */}
            <div className="bg-gradient-to-b from-[#e8f1ff] to-[#f4f8ff] py-10 sm:py-16 px-4 sm:px-10 md:px-20 text-gray-800">

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto">

                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="
          relative group
          bg-gradient-to-br from-[#ffffff] to-[#e6f0ff]
          border border-blue-100
          shadow-md hover:shadow-xl
          p-4 sm:p-6
          rounded-xl sm:rounded-2xl
          transition duration-300
          overflow-hidden
        "
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-100/40 to-blue-300/40 blur-2xl transition duration-500" />

                            {/* Icon & Text */}
                            <div className="relative flex items-start gap-3 sm:gap-4">
                                <div className="bg-gradient-to-br from-[#0b3a74] to-[#185e9a] p-2 sm:p-3 rounded-full shadow-md">
                                    <CheckCircle2 className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                                </div>

                                <p className="text-gray-800 text-xs sm:text-sm md:text-lg font-semibold leading-snug">
                                    {item}
                                </p>
                            </div>

                            {/* Underline effect */}
                            <div className="mt-2 sm:mt-3 h-[2px] sm:h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#0b3a74] to-[#185e9a] rounded-full transition-all duration-500"></div>
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* images */}
            <div className="hidden sm:flex w-full min-h-screen sm:min-h-[80vh] justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white px-4 ">
                <img
                    src="/images/payrollmen.webp"  // 🖼️ Replace with your image path
                    alt="Centered Image"
                    className="w-full max-w-4xl  object-contain"
                />
            </div>
            {/* ✅ Why Choose Section */}
            <div className="bg-gradient-to-b from-[#f0f6ff] to-[#ffffff] py-10 sm:py-16 px-4 sm:px-10 md:px-20 text-gray-800">

  {/* HEADING */}
  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-[#0b3a74] mb-8 sm:mb-14">
    Why Choose Our{" "}
    <span className="text-orange-500">Payroll Software?</span>
  </h3>

  {/* FEATURES GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto">

    {features.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="
          group bg-white border border-blue-100
          p-4 sm:p-6 md:p-8
          rounded-xl sm:rounded-2xl
          shadow-md hover:shadow-xl
          transition-all duration-300
          relative overflow-hidden
        "
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d0e5ff] via-[#ebf4ff] to-[#ffffff] opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-sm sm:text-lg md:text-2xl font-semibold text-[#185e9a] mb-2 sm:mb-3 relative">
            {item.title}
            <span className="absolute left-0 -bottom-1 h-[2px] sm:h-[3px] w-0 group-hover:w-16 sm:group-hover:w-20 bg-gradient-to-r from-[#0b3a74] to-[#185e9a] rounded-full transition-all duration-500"></span>
          </h4>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</div>




        </div>
    );
};

export default PayrollSoftware;
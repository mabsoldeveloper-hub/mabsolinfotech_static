"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const Payroll = () => {
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
            <div
                className="min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/payroll2.jpeg')",
                    filter: "brightness(0.9)",
                }}
            >
                <h1 className="text-6xl font-bold text-white drop-shadow-md mt-4">
                    Payroll Software
                </h1>
                <p className="text-lg mt-3 text-white">
                    Payroll & HR automation for smooth month-ends.
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="bg-white/20 text-white px-6 py-2 lg:px-10 lg:py-4 font-semibold shadow hover:bg-[#185e9a] transition"
                    >
                        Home
                    </Link>
                </div>
            </div>

            {/* Intro Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
                {/* Image (Left) */}
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center mb-10 md:mb-0"
                >
                    <img
                        src="/images/our3.webp"
                        alt="Payroll Software"
                        className="w-[500px] rounded-2xl shadow-lg"
                    />
                </motion.div>

                {/* Text (Right) */}
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 space-y-4"
                >
                    <h2 className="text-5xl font-bold text-[#185e9a]">
                        What is Payroll Software?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Say goodbye to manual calculations and errors. Payroll Software by
                        Mabsol Infotech simplifies your salary management process — from
                        employee onboarding to final settlements. Ensure on-time salary
                        payments, compliance with regulations, and complete transparency in
                        every step.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The software supports customizable salary structures, employee
                        benefits, claims, tax calculations, and comprehensive reporting —
                        all designed to save time and boost efficiency for your HR team.
                    </p>
                </motion.div>
            </div>
            {/* Highlights Section */}
            <div className="bg-gradient-to-b from-[#e8f1ff] to-[#f4f8ff] py-20 px-10 md:px-20 text-gray-800">
                {/* <h3 className="text-5xl font-bold text-center text-[#0b3a74] mb-14">
    Key Highlights
  </h3> */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative group bg-gradient-to-br from-[#ffffff] to-[#e6f0ff] border border-blue-100 shadow-lg p-6 rounded-2xl hover:shadow-2xl transition duration-300 overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-100/40 to-blue-300/40 blur-2xl transition duration-500" />

                            {/* Icon & Text */}
                            <div className="relative flex items-start gap-4">
                                <div className="bg-gradient-to-br from-[#0b3a74] to-[#185e9a] p-3 rounded-full shadow-md">
                                    <CheckCircle2 className="text-white w-6 h-6" />
                                </div>
                                <p className="text-gray-800 text-lg font-semibold leading-snug">
                                    {item}
                                </p>
                            </div>

                            {/* Underline effect */}
                            <div className="mt-3 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#0b3a74] to-[#185e9a] rounded-full transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* images */}
            <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
                <img
                    src="/images/payrollmen.webp"  // 🖼️ Replace with your image path
                    alt="Centered Image"
                    className="w-full max-w-4xl rounded-2xl shadow-xl object-contain"
                />
            </div>
            {/* ✅ Why Choose Section */}
            <div className="bg-gradient-to-b from-[#f0f6ff] to-[#ffffff] py-20 px-10 md:px-20 text-gray-800">
                <h3 className="text-5xl font-bold text-center text-[#0b3a74] mb-14">
                    Why Choose Our Payroll Software?
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="group bg-white border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d0e5ff] via-[#ebf4ff] to-[#ffffff] opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                <h4 className="text-2xl font-semibold text-[#185e9a] mb-3 relative">
                                    {item.title}
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-20 bg-gradient-to-r from-[#0b3a74] to-[#185e9a] rounded-full transition-all duration-500"></span>
                                </h4>

                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default Payroll;

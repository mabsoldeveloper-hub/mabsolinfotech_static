"use client";
import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from 'next/link';

const Marg = () => {
   

    const advantages = [
        {
            icon: "🧭",
            title: "Ease of Use",
            desc: "Designed with simplicity in mind, Marg is user-friendly even for beginners in accounting.",
        },
        {
            icon: "⏱️",
            title: "Time-Saving",
            desc: "Automates repetitive tasks like billing and invoicing, saving valuable business hours.",
        },
        {
            icon: "📊",
            title: "Improved Accuracy",
            desc: "Automation ensures accurate financial data and reduces the chances of human error.",
        },
        {
            icon: "📦",
            title: "Better Inventory",
            desc: "Provides real-time stock visibility to avoid stockouts and maintain optimal inventory.",
        },
        {
            icon: "⚙️",
            title: "Increased Productivity",
            desc: "Streamlined processes help improve team efficiency and overall performance.",
        },
        {
            icon: "🔗",
            title: "Integration Ready",
            desc: "Seamlessly connects with POS systems and e-commerce platforms for unified operations.",
        },
        {
            icon: "💰",
            title: "Affordable",
            desc: "Provides premium features at a budget-friendly price for SMEs and startups.",
        },
        {
            icon: "📞",
            title: "Customer Support",
            desc: "Dedicated support team ensures smooth usage and quick resolution of any issues.",
        },
        {
            icon: "💡",
            title: "User-Friendly Interface",
            desc: "Designed with simplicity in mind, Marg’s clean dashboard makes navigation easy for anyone — no technical expertise needed.",
        }
    ];

    const certifications = [
        { img: "/images/Guinness.png", title: "Guinness World Record Holder" },
        { img: "/images/excellence.jpeg", title: "Excellence in IT Award" },
        { img: "/images/cmmi-level.png", title: "CMMi Level 3 Company" },
        { img: "/images/iso.png", title: "ISO Certified 9001:2015" },
        { img: "/images/udyog.png", title: "Udyog Rattan Award" },

    ];

    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;
        const scrollSpeed = 1; // adjust for faster/slower

        const scrollLoop = () => {
            if (scrollContainer) {
                scrollAmount += scrollSpeed;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0; // reset for infinite loop
                }
                scrollContainer.scrollLeft = scrollAmount;
            }
            requestAnimationFrame(scrollLoop);
        };

        scrollLoop();
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white overflow-hidden">
            {/* Top Section */}
            {/* Top Section */}
            <div
                className="
    min-h-[300px] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center
    text-center
    px-4
  "
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/header-image.webp')",
                }}
            >
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-md mt-2">
                    Marg ERP Software
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-lg mt-2 text-white max-w-xl">
                    Smart Billing, Accounting & Inventory Software trusted by 1M+ businesses.
                </p>
            </div>


            {/* Content Section */}
            <div
                className="
    flex flex-col md:flex-row
    items-center justify-between
    px-4 sm:px-6 md:px-20
    py-10 sm:py-14 md:py-20
    bg-white text-gray-800
    gap-8 md:gap-12
  "
            >
                {/* Left Text */}
                <div className="md:w-1/2 space-y-4">
                    <h2
                        className="
        text-2xl sm:text-3xl md:text-5xl
        font-bold text-[#185e9a]
        leading-snug
      "
                    >
                        What is <span className="text-orange-500">Marg Software?</span>
                    </h2>

                    <p
                        className="
        text-sm sm:text-base md:text-lg
        text-gray-600
        text-justify
        leading-relaxed
      "
                    >
                        Marg is an intelligent accounting and inventory management solution built
                        specifically for retail and distribution businesses. It simplifies
                        day-to-day operations such as billing, invoicing, and payment tracking,
                        while ensuring accurate management of sales, expenses, and inventory. The
                        software helps businesses maintain better control over stock levels,
                        pricing, and financial records. With built-in automation and seamless
                        integrations, Marg reduces manual effort, improves accuracy, and enables
                        faster decision-making, allowing businesses to save time and operate more
                        efficiently.
                    </p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/images/marg-logo.webp"
                        alt="Marg Software"
                        className="
        w-[200px] sm:w-[300px] md:w-[500px]
        object-contain
      "
                    />
                </div>
            </div>

            {/* ===== Advantages of Marg Software ===== */}
            <div
                className="
    w-full bg-gray-50
    py-10 sm:py-12 md:py-16
    px-4 sm:px-6 md:px-20
  "
            >
                {/* Title */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2
                        className="
        text-2xl sm:text-3xl md:text-5xl
        text-[#185e9a] font-bold
        mb-2 sm:mb-3
      "
                    >
                        Advantages of <span className="text-orange-500">Marg Software</span>
                    </h2>

                    <p
                        className="
        text-sm sm:text-base md:text-lg
        text-gray-600
        max-w-5xl mx-auto
        leading-relaxed
      "
                    >
                        Discover how Marg empowers businesses with smart automation, accuracy, and
                        seamless integration.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="
      grid grid-cols-2
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4 sm:gap-6 md:gap-8
    "
                >
                    {advantages.map((item, i) => (
                        <div
                            key={i}
                            className="
          bg-white text-[#0b3a74]
          rounded-xl
          p-4 sm:p-6 md:p-8
          shadow-md hover:shadow-xl
          hover:-translate-y-1
          transition
        "
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                                {item.icon}
                            </div>

                            <h3
                                className="
            text-sm sm:text-lg md:text-xl
            font-semibold
            mb-1 sm:mb-2
          "
                            >
                                {item.title}
                            </h3>

                            <p
                                className="
            text-xs sm:text-sm md:text-base
            text-gray-600
            text-justify
            leading-relaxed
          "
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* =====certified Section ===== */}
            <section className="bg-gradient-to-r from-[#f9fbff] to-[#eef3fa] py-16">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-[#185e9a] mb-10">
                        Certified <span className="text-orange-500">By</span>
                    </h2>

                    {/* Scrolling Row */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden whitespace-nowrap space-x-8 px-6"
                    >
                        {[...certifications, ...certifications].map((item, i) => (
                            <div
                                key={i}
                                className="min-w-[220px] flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain mb-4"
                                />
                                <p className="text-sm font-semibold text-gray-700">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Highlights Section */}
            {/* ===== More Features Section ===== */}
            <div className="w-full bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Image */}
                    <div>
                        <img
                            src="/images/marg-computer.jpg"
                            alt="Features"
                            className="w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-lg shadow-md object-cover"
                        />
                    </div>

                    {/* Right Features */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#185e9a] mb-6 sm:mb-8 text-center md:text-left">
                            More <span className="text-orange-500">Features</span>
                        </h2>

                        {/* 👇 YAHI MAIN FIX HAI */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { title: "Smart Tools", desc: "Powerful tools for managing your business." },
                                { title: "Easy Integration", desc: "Seamless integration with other software." },
                                { title: "Analytics & Reports", desc: "Advanced analytics and reporting." },
                                { title: "Custom Interface", desc: "User-friendly and customizable interface." },
                                { title: "Cloud Security", desc: "Secure cloud-based accessibility." },
                                { title: "24/7 Support", desc: "24/7 customer support assistance." },
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-[#f8f9ff] rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition"
                                >
                                    <div className="flex items-center mb-2 sm:mb-3">
                                        <div className="bg-[#185e9a] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full mr-3 text-sm sm:text-lg font-bold">
                                            {i + 1}
                                        </div>

                                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#0b3a74]">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* ✅ Highlights Section end */}

        </div>

    )
}

export default Marg
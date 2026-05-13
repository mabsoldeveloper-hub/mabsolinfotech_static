"use client";
import React from "react";
import Link from "next/link";
import { BsGlobe, BsLaptop, BsBarChart, BsBoxSeam, BsGraphUp, BsSearch } from "react-icons/bs";
import SpotlightCard from "@/components/SpotlightCard";

const services = [
  {
    icon: <BsGlobe />,
    title: "Website Development",
    desc: "We are a leading web development team delivering user-friendly and high-performance websites that elevate your online presence. We specialize in modern technologies like React.js, Node.js, PHP, and WordPress.",
    link: "/website-development",
    color: "bg-green-500",
  },
  {
    icon: <BsLaptop />,
    title: "Accounting Software",
    desc: "We provide smart accounting solutions with Tally, Marg ERP, installation, setup, and dedicated customer support services to simplify billing, inventory, finance management, and business operations. ",
    link: "/accounting-software",
    color: "bg-blue-500",
  },
  {
    icon: <BsGraphUp />,
    title: "Erp Software",
    desc: "We are ERP software experts delivering smart business solutions that streamline accounting, inventory, billing, payroll, and business operations through powerful and reliable ERP systems designed to improve efficiency and productivity.",
    link: "/erp-software",
    color: "bg-red-500",
  },
  {
    icon: <BsBarChart />,
    title: "Payroll Software",
    desc: "We provide advanced payroll software solutions to automate salary processing, attendance tracking, employee management, and HR operations efficiently. We specialize in secure and user-friendly systems.",
    link: "/payroll-software",
    color: "bg-yellow-500",
  },
  {
    icon: <BsBoxSeam />,
    title: "Brand Identity Design",
    desc: "Craft captivating and memorable brand identities with our talented team of designers and strategists, ensuring your brand stands out and fosters customer loyalty in a crowded marketplace and user-friendly systems.",
    link: "/brand-identity-design",
    color: "bg-purple-500",
  },
  {
    icon: <BsSearch />,
    title: "Mobile App Development",
    desc: "Embrace the mobile revolution with our mobile application development team that captivate users across the digital landscape. Invest wisely in sharing your vision with the world, and we'll bring it to life with creativity.",
    link: "/mobile-app-development",
    color: "bg-cyan-500",
  },
];

const OurService = () => {
  return (
    <div className="py-10 px-6 lg:px-20 bg-gray-50 ">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-14 px-2">

        <h1 className="text-orange-500 text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
          Our Services
        </h1>

        <h2 className="text-xl sm:text-xl lg:text-5xl font-bold text-[#1f4e79] leading-snug sm:leading-tight">
          Explore Our Premium Services
        </h2>

        <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-base max-w-xs sm:max-w-xl mx-auto leading-relaxed">
          Powerful software services to manage your business efficiently
        </p>

      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">

        {services.map((item, index) => (

          <SpotlightCard
            key={index}
           className="rounded-xl border-0 !border-none !bg-white/10  backdrop-blur-xl shadow-[0_8px_32px_rgba(31,78,121,0.15)] p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-2" 
           spotlightColor="rgba(59, 130, 246, 0.18)"
          >

            {/* Icon */}
            <div className="flex justify-center mb-4 sm:mb-5">

              <div className="relative">

                {/* Outer Glow */}
                <div className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] rounded-full bg-blue-100 flex items-center justify-center">

                  {/* Border Circle */}
                  <div className="w-[58px] h-[58px] sm:w-[72px] sm:h-[72px] rounded-full border-[3px] border-[#1f4e79] flex items-center justify-center shadow-md">

                    {/* Inner Circle */}
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full bg-[#1f4e79] text-white text-lg sm:text-2xl flex items-center justify-center group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Text */}
            <div>
              <h2 className="text-[12px] xs:text-sm sm:text-lg font-semibold text-orange-500 leading-snug">
                {item.title}
              </h2>

              <p className="text-[10px] text-justify xs:text-[11px] sm:text-sm text-gray-500 mt-1 sm:mt-3 leading-relaxed text-center sm:text-justify">
                {item.desc}
              </p>
            </div>

          </SpotlightCard>

        ))}

      </div>
    </div>
  );
};

export default OurService;
"use client";

import { Button, Card } from "antd";
import { div } from "framer-motion/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Merriweather } from "next/font/google";
import { FcEditImage, FcElectronics, FcGlobe, FcPlanner } from "react-icons/fc";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});


const HomePage = () => {
  const images = [
    "images/background.jpg",
    "images/background2.jpg",
    "images/background.avif",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((preIndex) => (preIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${merriweather.className} relative z-10 flex items-center min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen px-4 sm:px-6 lg:px-16`}>

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/homePage.jpeg"
          alt="hero"
          className="w-full h-full object-cover object-top"
        />
        {/* optional overlay for readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-xs sm:max-w-md lg:max-w-xl text-left text-white">

          {/* Heading */}
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            <span className="text-orange-400">Smart Solutions for </span><br />
            Smarter Business Management
          </h1>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm lg:text-lg mb-4 sm:mb-6 text-gray-200 leading-relaxed">
            Mabsol Infotech empowers businesses with cutting-edge software
            solutions like Marg, Tally, MR Reporting, and greytHR.
            From accounting to HR management, we simplify your operations
            and ensure seamless workflows.
          </p>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
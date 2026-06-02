"use client";

import { Button } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcEditImage, FcElectronics, FcGlobe, FcPlanner } from "react-icons/fc";

const HomePage = () => {
  const images = [
    "/images/background.jpg",
    "/images/background2.jpg",
    "/images/background.avif",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">

      {/* 🔹 Background Slider */}
      <div className="absolute inset-0">
        <img
          src={images[index]}
          alt="hero"
          className="w-full h-full object-cover transition-all duration-1000"
        />

        {/* 🔹 Overlay (ONLY on image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-20">

        <div className="max-w-xl lg:max-w-2xl text-white">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-orange-400">Smart Solutions for mab</span> <br />
            Smarter Business Management
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-gray-200">
            Mabsol Infotech empowers businesses with cutting-edge software
            solutions like Marg, Tally, MR Reporting, and greytHR.
            From accounting to HR management, we simplify your operations
            and ensure seamless workflows.
          </p>

        </div>
      </div>

      {/* 🔹 Bottom Fade (inside same height) */}
      <div className="absolute bottom-0 w-full h-20 sm:h-28 bg-gradient-to-t from-black to-transparent" />

    </div>
  );
};

export default HomePage;
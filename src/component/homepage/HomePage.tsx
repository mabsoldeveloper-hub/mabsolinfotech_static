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
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-20 text-center">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Heading */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4 sm:mb-6">
            <span className="text-orange-400">Smart Solutions for</span>
            <br />
            <span className="text-white">Smarter Business Management</span>
          </h1>

          {/* Description */}
          <p className="text-[11px] sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 text-gray-300 max-w-xl mx-auto px-2">
            Mabsol Infotech empowers businesses with cutting-edge software solutions
            like Marg, Tally, MR Reporting, and Software development. From accounting to HR
            management, we simplify your operations and ensure seamless workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
            <Link href="https://demo.mabsolinfotech.com">
              <button className="sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 transition-colors duration-200">
               Explore the Platform
              </button>
            </Link>

            <Link href="/service-page">
              <button className="sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold text-sm px-5 py-2 border border-white/40 transition-colors duration-200">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Product Badges */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
            {["Marg ERP", "Tally Solutions", "Software Development", "MR Reporting"].map((product) => (
              <div key={product} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-white/70 text-[10px] sm:text-sm whitespace-nowrap">{product}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔹 Bottom Fade (inside same height) */}
      <div className="absolute bottom-0 w-full h-20 sm:h-28 bg-gradient-to-t from-black to-transparent" />

    </div>
  );
};

export default HomePage;
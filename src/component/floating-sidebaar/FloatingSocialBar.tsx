"use client";

import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

export default function FloatingSocialBar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile or desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto open for 4 seconds on page load (desktop only)
  useEffect(() => {
    {
      setOpen(true);
      const timer = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Hover effect (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) setOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setOpen(false);
  };

  return (
    <div
      className={`fixed z-50 flex items-center transition-all duration-300 ${
        isMobile ? "top-1/2 -translate-y-1/2" : "top-1/3"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col gap-3 bg-white/90 backdrop-blur-md p-2 rounded-r-lg shadow-lg transition-all duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/+919876675181"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2.5 rounded-lg shadow-md hover:bg-green-600 transition-all duration-200"
          title="WhatsApp"
        >
          <WhatsAppOutlined className="text-xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
          title="Facebook"
        >
          <FacebookFilled className="text-xl" />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/mabsol_infotech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white p-2.5 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
          title="Twitter"
        >
          <TwitterSquareFilled className="text-xl" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@ABMINFOTECHPanchkula"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-2.5 rounded-lg shadow-md hover:bg-red-700 transition-all duration-200"
          title="YouTube"
        >
          <YoutubeFilled className="text-xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mabsol_infotech_pvt_ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-2.5 rounded-lg shadow-md hover:bg-pink-700 transition-all duration-200"
          title="Instagram"
        >
          <InstagramFilled className="text-xl" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mabsol-infotech-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white p-2.5 rounded-lg shadow-md hover:bg-blue-900 transition-all duration-200"
          title="LinkedIn"
        >
          <LinkedinFilled className="text-xl" />
        </a>
      </div>

      {/* Toggle Button (slightly tucked in) */}
      <button
        onClick={() => setOpen(!open)}
        className={`bg-blue-600 text-white px-2 py-3 rounded-r-lg shadow-md hover:bg-blue-700 transition-all duration-200`}
        style={{
          marginLeft: open ? "-2px" : "-60px", // 👈 Ye line button ko thoda screen ke andar laati hai
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        {open ? "❯" : "❮"}
      </button>
    </div>
  );
}

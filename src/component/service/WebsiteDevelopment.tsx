"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "antd";
import { useRouter } from "next/navigation";

export default function WebsiteDevelopment() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-800">
<header
  className="
    min-h-[300px] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center
    relative
    px-4
    text-center
  "
  style={{
    backgroundImage: "url('/images/website-page.webp')",
  }}
>
  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center">
    <h1
      className="
        text-white mb-3 drop-shadow-lg font-bold
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl
      "
    >
      Website Development
    </h1>

    <p
      className="
        text-xs sm:text-sm md:text-base
        text-white
        max-w-xs sm:max-w-xl md:max-w-2xl
        mx-auto
      "
    >
      Create, control, and enhance your brand identity through stunning,
      high-performance websites.
    </p>
  </div>
</header>



{/* ===== CONTENT SECTION ===== */}
<section className="flex flex-col gap-12 py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

  {/* ===== FIRST SECTION ===== */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
    
    {/* LEFT CONTENT */}
    <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-left">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#185e9a]">
        Website Development Services
      </h2>

      <p className="text-sm sm:text-base">
        With an incredible website, you can create and control your own identity.
        Your website is your company’s first impression and says volumes about
        your job, not just in terms of the content it contains but also in the
        experience it provides to visitors.
      </p>

      <p className="text-sm sm:text-base">
        Customers can get their websites developed using modern technologies
        such as <strong>React.js, Next.js, and PHP</strong>, ensuring high
        performance, scalability, and flexibility. These technologies help
        businesses build fast-loading, secure, and future-ready websites that
        enhance user engagement and brand credibility.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src="/images/web-development.jpg"
        alt="Website Development"
        className="w-full max-w-sm sm:max-w-md md:max-w-xl 
                   h-[200px] sm:h-[250px] md:h-[300px]
                   rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>

  {/* ===== SECOND SECTION ===== */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
    
    {/* LEFT IMAGE */}
    <div className="flex justify-center md:order-1">
      <img
        src="/images/website-page.webp"
        alt="Design and Development"
        className="w-full max-w-sm sm:max-w-md md:max-w-xl 
                   h-[200px] sm:h-[250px] md:h-[300px]
                   rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-left md:order-2">
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#185e9a]">
        Design and Development of Websites
      </h3>

      <p className="text-sm sm:text-base">
        We design and construct bespoke websites with our customers’ individual
        needs in mind, establishing their distinct brand identity. We deliver
        immersive experiences with distinctively designed pages, carefully
        selected images, engaging content, and smooth navigation.
      </p>

      <p className="text-sm sm:text-base">
        Our developers can choose the best WordPress themes for your business or
        create a fully custom solution using <strong>React, Next.js, or PHP</strong>,
        integrated with secure backend systems — fast, reliable, and delivering
        outstanding performance.
      </p>
    </div>
  </div>
</section>



   {/* ===== OTHER SERVICES SECTION ===== */}
<section className="relative bg-white text-gray-800 py-16 sm:py-20 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-5"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-[#185e9a]">
      Other Services <span className="text-orange-600">We Offer</span>
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {[
        {
          title: "SEO Optimization",
          desc: "Improve your website visibility and rank higher on search engines.",
          icon: "🚀",
        },
        {
          title: "E-commerce Solutions",
          desc: "Build a secure, user-friendly online store with modern UI/UX.",
          icon: "🛒",
        },
        {
          title: "Content Management",
          desc: "Easily update and manage your site content with robust CMS tools.",
          icon: "🧭",
        },
        {
          title: "Custom Web Applications",
          desc: "We develop scalable, business-driven web apps for your needs.",
          icon: "💻",
        },
        {
          title: "Website Maintenance",
          desc: "Keep your website up-to-date, secure, and optimized for users.",
          icon: "🔧",
        },
        {
          title: "UI/UX Design",
          desc: "Enhance user engagement through creative and intuitive designs.",
          icon: "🎨",
        },
      ].map((service, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden bg-white border border-gray-100 
                     p-4 sm:p-6 rounded-xl sm:rounded-2xl
                     shadow-md transition-all duration-500 ease-out
                     hover:-translate-y-1 hover:shadow-lg group"
        >
          {/* Hover Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#185e9a] to-[#0e4d7a]
                       translate-y-full group-hover:translate-y-0
                       transition-transform duration-500 ease-out"
          />

          {/* Content */}
          <div className="relative z-10 group-hover:text-white transition-colors duration-300 text-center">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
              {service.icon}
            </div>

            <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-[#185e9a] group-hover:text-white">
              {service.title}
            </h3>

            <p className="text-xs sm:text-sm leading-snug opacity-90 hidden sm:block">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
}

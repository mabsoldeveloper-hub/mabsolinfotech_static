"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

// 🔢 Counter Component
const Counter = ({
  end,
  duration = 2000,
  suffix = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);

  // 👀 View detect
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-10 px-3 sm:px-8 lg:px-16 py-6 lg:py-10 bg-white overflow-hidden">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[550px]">

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

          <img
            src="/images/about-part.png"
            alt="about"
            className="relative z-10 w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div>

        {/* TOP TAG */}
        <h1 className="text-orange-500 text-[10px] sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
          About Us
        </h1>

        {/* HEADING */}
        <h2 className="text-sm sm:text-2xl lg:text-5xl font-bold text-[#1f4e79] leading-tight mb-2 sm:mb-6">
          Transforming Ideas <br /> Into Reality
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-[9px] sm:text-base lg:text-md text-justify leading-relaxed mb-2 sm:mb-4">
          At Mabsol Infotech, we specialize in delivering modern and innovative
          software solutions that help businesses simplify operations, improve
          productivity, and achieve long-term growth in the digital world.
        </p>

        <p className="text-gray-700 text-[9px] sm:text-base lg:text-md text-justify leading-relaxed mb-2 sm:mb-4">
          From custom Web Development and ERP Systems to Accounting, Payroll,
          and Business Automation solutions, we create scalable technologies
          tailored to your business needs.
        </p>

        <p className="text-gray-700 text-[9px] sm:text-base lg:text-md text-justify leading-relaxed mb-3 sm:mb-8">
          With a strong focus on quality, performance, and customer
          satisfaction, our team is committed to building reliable digital
          experiences that drive success and innovation for every client.
        </p>

        {/* COUNTERS */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8">

          {/* TEAM */}
          <div className="bg-orange-50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-sm sm:text-3xl lg:text-4xl font-extrabold text-orange-500">
              <Counter end={50} suffix="+" />
            </h3>

            <p className="text-[8px] sm:text-sm text-gray-600 mt-1 sm:mt-2 font-medium">
              Team
            </p>
          </div>

          {/* CLIENTS */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-sm sm:text-3xl lg:text-4xl font-extrabold text-[#1f4e79]">
              <Counter end={2000} suffix="+" />
            </h3>

            <p className="text-[8px] sm:text-sm text-gray-600 mt-1 sm:mt-2 font-medium">
              Clients
            </p>
          </div>

          {/* SUCCESS */}
          <div className="bg-green-50 rounded-xl sm:rounded-2xl p-2 sm:p-6 text-center shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-sm sm:text-3xl lg:text-4xl font-extrabold text-green-500">
              <Counter end={99} suffix="%" />
            </h3>

            <p className="text-[8px] sm:text-sm text-gray-600 mt-1 sm:mt-2 font-medium">
              Success
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
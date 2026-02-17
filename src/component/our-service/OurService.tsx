"use client";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const service = [
  {
    image: "images/our.webp",
    title: "Website Development",
    Descriptions:
      "Website Development Services to Build Your Digital Identity Our expert website development  services are designed to help businesses establish a...",
    role: "Read More",
  },
  {
    image: "images/our2.webp",
    title: "Accounting Software",
    Descriptions:
      "Accounting Software Solutions to Streamline Your Financial Operations Our accounting software solutions provide seamless business accounting, automated accounting, and payroll...",
    role: "Read More",
  },
  {
    image: "images/our3.webp",
    title: "Payroll Software",
    Descriptions:
      "Advanced Payroll Software for Efficient Salary and HR Management Our advanced payroll software is designed to simplify and automate every...",
    role: "Read More",
  },
  {
    image: "images/our4.webp",
    title: "ERP Software",
    Descriptions:
      "Smart ERP Software for Complete Business Management Our powerful ERP software provides everything you need to manage your business efficiently....",
    role: "Read More",
  },
  {
    image: "images/our5.webp",
    title: "SFA Software",
    Descriptions:
      "Powerful SFA Software to Automate and Optimize Sales Operations Our robust SFA software is designed to automate and streamline your...",
    role: "Read More",
  },
];

const OurService = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
        // style={{ backgroundImage: `url(/bg.avif)` }}
        style={{ backgroundImage: "url('/base-1.png')" }}
      ></div>

      <div className="relative z-10 opacity-100 px-6 lg:px-20">
        <div>
          <h1 className="text-center text-[#185e9a] text-4xl font-bold underline">
            Our Services
          </h1>
          <div className="flex justify-center items-center gap-4 pt-4">
            <Button className="!bg-gray-100 !py-5 !px-4 !border-none">
              All Posts
            </Button>
            <Button className="!bg-gray-100 !py-5 !px-4 !border-none">
              Services
            </Button>
          </div>
        </div>

        <div className="pt-10">
          <Marquee
            speed={100}
            pauseOnHover={true}
            gradient={false}
            play={isPlaying}
          >
            {service.map((item, index) => (
              <div
                key={index}
                className="flex items-center rounded-2xl mx-6 w-[600px] h-[250px] overflow-hidden group border border-transparent hover:border-2 hover:border-blue-300 transition-all duration-300 "
              >
                {/* Image */}
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="w-1/2 p-4 flex flex-col justify-center ">
                  <h2 className="text-xl font-bold text-[#185e9a] mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.Descriptions}
                  </p>
                  <a
                    href="#"
                    className="mt-3 text-sm underline text-[#185e9a] font-semibold"
                  >
                    {item.role}
                  </a>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OurService;

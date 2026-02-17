"use client";

import { Card, Typography, Button } from "antd";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const { Title } = Typography;

export default function AccountingSoftwarePage() {
  const sliderRef = useRef<any>(null);
  const router = useRouter();
  const services = [
    {
      image: "/images/our.webp",
      title: "Website Development",
      description:
        "Website Development Services to Build Your Digital Identity...",
      path: "/website-development",
    },
    {
      image: "/images/our2.webp",
      title: "Accounting Software",
      description:
        "Accounting Software Solutions to Streamline Your Financial Operations...",
      path: "/accounting-software",
    },
    {
      image: "/images/our3.webp",
      title: "Payroll Software",
      description:
        "Advanced Payroll Software for Efficient Salary and HR Management...",
      path: "/payroll-software",
    },
    {
      image: "/images/our4.webp",
      title: "ERP Software",
      description:
        "Smart ERP Software for Complete Business Management...",
      path: "/erp-software",
    },
    {
      image: "/images/our5.webp",
      title: "SFA Software",
      description:
        "Powerful SFA Software to Automate and Optimize Sales Operations...",
      path: "/sfa-software",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
       {/* Top Section */}
          <div
  className="
    h-[45vh] sm:h-[50vh] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center relative
    px-4 text-center
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/header-image.webp')",
  }}
>
  <h1 className="
    text-3xl sm:text-4xl md:text-6xl
    font-bold text-white
    drop-shadow-md
    mb-2 sm:mb-3
  ">
    SFA Software
  </h1>

  <p className="
    text-xs sm:text-sm md:text-lg
    text-white
    max-w-xs sm:max-w-xl md:max-w-3xl
    leading-relaxed
  ">
    Manage your entire organization with real-time agility and unified
    data insights for smarter growth.
  </p>
</div>


     {/* ===== Description Section ===== */}
<section className="py-8 sm:py-10 flex justify-center bg-white">
  <div className="w-full max-w-7xl px-4 sm:px-6">
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-8 md:gap-10
        items-center
        bg-white
        p-4 sm:p-6 md:p-10
      "
    >
      {/* Left Content */}
      <div>
        <h2
          className="
            text-xl sm:text-2xl md:text-[32px]
            font-bold text-[#1a3d7c]
            leading-snug
          "
        >
          What Is{" "}
          <span className="text-orange-600">
            Sales Force Automation?
          </span>
        </h2>

        <p
          className="
            text-gray-600
            text-sm sm:text-base
            leading-relaxed sm:leading-7
            mt-4 sm:mt-6
            text-justify
          "
        >
          Sales Force Automation (SFA) is a technology-driven solution designed
          to streamline and automate sales-related activities for organizations.
          It enables businesses to efficiently manage sales operations, track
          customer interactions, and reduce manual administrative work for sales
          teams. By automating routine processes, SFA improves productivity,
          ensures better data accuracy, and provides real-time access to critical
          business information. This allows sales teams and field executives to
          focus more on customer engagement and performance-driven outcomes,
          ultimately supporting informed decision-making and sustainable
          business growth.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center">
        <img
          src="/images/sfa-softwarefeature.png"
          alt="Sales Force Automation"
          className="
            w-full
            h-[220px] sm:h-[300px] md:h-[400px]
            rounded-lg
            object-contain md:object-cover
          "
        />
      </div>
    </div>
  </div>
</section>

      {/* image section */}

      {/* <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white">
                <img
                    src="/images/sfa-softwarefeature.png"  
                    alt="Centered Image"
                    className="w-full max-w-4xl object-contain"
                />
      </div> */}

      {/* ===== Other Services Section ===== */}
      <section className="py-10 bg-gray-50 relative">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a3d7c]  font-bold underline underline-offset-5 leading-snug">
              Other
              <span className="text-orange-600"> Services</span>
            </h2>
          </div>

          {/* ==== Carousel ==== */}
          <div className="relative">
            <Button
              type="text"
              icon={<LeftOutlined />}
              className="!absolute -left-8 top-1/2 -translate-y-1/2 z-20 !bg-white shadow-md hover:!bg-gray-100"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Button
              type="text"
              icon={<RightOutlined />}
              className="!absolute -right-8 top-1/2 -translate-y-1/2 z-20 !bg-white shadow-md hover:!bg-gray-100"
              onClick={() => sliderRef.current?.slickNext()}
            />

            <Slider ref={sliderRef} {...settings}>
              {services.map((item, index) => (
                <div key={index} className="px-4">
                  <Card
                    hoverable
                    className="rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-md"
                  >
                    <div
                      className="h-[200px] w-full overflow-hidden cursor-pointer"
                      onClick={() => router.push(item.path)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h2 className="text-lg font-bold text-[#1a3d7c] mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                      <a
                        href="#"
                        className="mt-3 inline-block text-sm underline text-[#1a3d7c] font-semibold"
                      >
                      </a>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

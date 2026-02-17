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
      image: "/images/web-development.jpg",
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
      image: "/images/Sfa-software.png",
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
      {/* <header className="relative text-white text-center py-16 overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/account-mab.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />
        <div className="relative z-10">
          <Title className="!text-white !mb-4 drop-shadow-lg !text-6xl font-bold">
            Accounting Software
          </Title>
        </div>
      </header> */}
 <header className="h-[45vh] sm:h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">

  {/* Background Image */}
  <div
    className="
      absolute inset-0 
      bg-cover bg-center 
      bg-scroll sm:bg-fixed
    "
    style={{ backgroundImage: "url('/images/header-image.webp')" }}
  />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/70" />

  {/* Content */}
  <div className="relative z-10 px-4 text-center">
    <h1 className="text-white mb-3 text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
      Accounting Software
    </h1>

    <p className="text-sm sm:text-base md:text-md text-white max-w-xl sm:max-w-3xl mx-auto">
      Create, control, and enhance your brand identity through stunning,
      high-performance websites.
    </p>
  </div>

</header>

{/* ===== Description Section ===== */}
<section className="py-8 sm:py-10 flex justify-center">
  <div className="w-full max-w-7xl px-4 sm:px-6">

    <div className="border-0 shadow-none p-4 sm:p-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">

        {/* Left Image */}
        <div className="w-full">
          <img
            src="/images/our.webp"
            alt="Accounting Software"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl sm:text-[28px] md:text-[32px] font-bold text-[#1a3d7c] leading-snug">
            Boosts Your Business Efficiency with a Complete{" "}
            <span className="text-orange-600 block sm:inline">
              Accounting Software?
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-[16px] text-justify leading-6 sm:leading-7 mt-4 sm:mt-6">
            From recording accounting transactions such as vouchers, ledgers,
            trial balance, and balance sheets, everything can be accessed
            instantly with Busy Accounting Software. Efficiently manage your
            inventory with advanced details like batch numbers (with expiry
            dates), serial numbers, and product parameters such as colour, size,
            and style. Handle multiple godowns and locations seamlessly using
            this powerful inventory management solution. Generate GST-compliant,
            professional invoices easily based on your business needs. Maintain
            party-wise, item-wise, and date-wise pricing with this reliable GST
            accounting software.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>



      {/* ===== Other Services Section ===== */}
      <section className="py-10 bg-white relative">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a3d7c]  font-bold underline underline-offset-6 leading-snug">
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

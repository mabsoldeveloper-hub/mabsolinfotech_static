"use client";

import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa6";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const teamMembers: Testimonial[] = [
  
  {
    name: "Shanky Mittal",
    role: "ALCOLABS PVT. LTD.",
    image: "/images/alco.webp",
    description:
      "Mabsol Infotech’s software solutions, including Marg, have significantly enhanced our financial management capabilities. Their professionalism and expertise have provided us with a distinct competitive edge. We appreciate their ongoing support and the positive impact their solutions have had on our business.",
  },
  {
    name: "Ashwani Mehta",
    role: "ASTERISK LABORATORIES INDIA PVT. LTD.",
    image: "/images/crousel1.png",
    description:
      "The software solutions from Mabsol Infotech have been a game-changer for us. Their technical expertise and customer-centric approach have been instrumental in optimizing our financial operations. We value their proactive support and their ability to tailor solutions to meet our specific needs.",
  },
  {
    name: "Deepak Pathak",
    role: "SATYAM ENTERPRISES ZIRAKPUR",
    image: "/images/satyam.jpg",
    description:
      "Partnering with Mabsol Infotech has revolutionized our approach to managing business operations. Their expertise with software solutions like Tally and Marg has streamlined our financial processes, leading to greater efficiency and accuracy.",
  },
];

const OurTestimonial = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<CarouselRef>(null);
  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);

  return (
    <section className="bg-[#f7f7f7] py-6 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-orange-500" />
            <span className="text-orange-500 font-semibold text-xl">
              Our Testimonial
            </span>
            <div className="w-10 h-[2px] bg-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b3766]">
            What our clients say?
          </h2>

          <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-9">
            Hear directly from our clients about their journey and
            success with our solutions.
          </p>

          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-5" />
        </div>

        {/* Slider Section */}
        <div className="relative">
          {/* Left Arrow */}

          <button
            onClick={prevSlide}
            className="absolute -left-2 lg:-left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 duration-300"
          >
            <LeftOutlined className="text-2xl text-[#0b3766]" />
          </button>

          {/* Right Arrow */}

          <button
            onClick={nextSlide}
            className="absolute -right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 duration-300"
          >
            <RightOutlined className="text-2xl text-[#0b3766]" />
          </button>

          <Carousel
            ref={carouselRef}
            autoplay
            dots
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {teamMembers.map((item, index) => (
              <div key={index} className="px-4 py-6 pt-16">
                <div className="relative bg-white rounded-[25px] shadow-lg border border-gray-100 h-auto overflow-visible">

                  {/* Orange Top Border */}

                  <div className="absolute top-0 left-0 w-full h-[6px] bg-orange-500 rounded-t-[25px]" />

                  {/* Logo */}

                  <div className="absolute left-1/2 -translate-x-1/2 -top-16">
                    <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="pt-28 px-8 flex flex-col h-full">
                    <div className="flex justify-center mb-5">
                      <FaQuoteLeft className="text-orange-500 text-4xl" />
                    </div>

                    <p
                      className={`text-gray-600 text-sm sm:text-base leading-7 text-center transition-all duration-300 ${expandedCards[index] ? "" : "line-clamp-4"
                        }`}
                    >
                      {item.description}
                    </p>

                    <button
                      onClick={() => toggleReadMore(index)}
                      className="mt-3 text-orange-500 font-medium text-sm hover:text-orange-600"
                    >
                      {expandedCards[index] ? "Read Less" : "Read More"}
                    </button>

                    <div className="pb-10">
                      <div className="w-12 h-[2px] bg-orange-500 mx-auto mb-6"></div>

                      <h3 className="text-center text-[#0b3766] text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-center text-orange-500 text-md mt-3 uppercase">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Custom Dot Styling */}

      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li button:before {
          font-size: 14px;
          color: #d1d5db;
          opacity: 1;
        }

        .slick-dots li.slick-active button:before {
          color: #f97316;
        }
      `}</style>
    </section>
  );
};

export default OurTestimonial;
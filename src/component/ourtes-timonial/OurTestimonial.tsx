
"use client"

import { Carousel } from 'antd'
import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';
import AOS from "aos";
import "aos/dist/aos.css";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const teamMembers: Testimonial[] = [
  {
    name: "K.S Chauhan",
    role: "  BIOMAX BIOTECHNICS PVT. LTD. ",
    image: "images/company-profile-1.webp",
    description: " Mabsol Infotech has truly exceeded our expectations. Their support with Busy and Marg software has not only enhanced our productivity but also simplified complex tasks. The professional approach and in-depth knowledge of their products have made a significant impact on our operations. We couldn’t be more pleased with their service. ",
  },
  {
    name: " Shanky Mittal ",
    role: " ALCOLABS PVT. LTD.",
    image: "images/alco.webp",
    description: " Mabsol Infotech’s software solutions, including Marg, have significantly enhanced our financial management capabilities. Their professionalism and expertise have provided us with a distinct competitive edge. We appreciate their ongoing support and the positive impact their solutions have had on our business.  ",

  },
  {
    name: " Ashwani Mehta ",
    role: " ASTERISK LABORATORIES INDIA PVT. LTD.",
    image: "images/crousel1.png",
    description: " The software solutions from Mabsol Infotech, have been a game-changer for us. Their technical expertise and customer-centric approach have been instrumental in optimizing our financial operations. We value their proactive support and their ability to tailor solutions to meet our specific needs. ",

  },
  {
    name: " Deepak Pathak ",
    role: " Satyam Enterprises Zirakpur ",
    // image: "images/maxresdefault.webp",
    image: "images/satyam.jpg",
    description: " Partnering with Mabsol Infotech has revolutionized our approach to managing business operations. Their expertise with software solutions like Tally and Marg has streamlined our financial processes, leading to greater efficiency and accuracy. The team’s commitment to our success and their responsive support make them a  partner. ",

  },
]



const OurTestimonial = () => {

  const carouselRef = useRef<CarouselRef>(null);

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className='py-10 lg:px-20 px-6 bg-white'>
      <div className="text-center mb-14">

        {/* Small Label */}
        <h1 className="text-orange-500 text-2xl font-semibold mb-3">
          Our Testimonial
        </h1>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-[#1f4e79] leading-tight">
          What our clients say?
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Hear directly from our clients about their journey and success with our solutions.
        </p>

      </div>

      {/* Slider */}
      <div className="relative mt-6 sm:mt-16 w-full">

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-2 md:left-8 top-1/2 -translate-y-1/2 p-1 sm:p-2 md:p-3 rounded-full shadow-md sm:shadow-lg bg-white hover:bg-gray-100 z-10"
        >
          <LeftOutlined className="text-[10px] sm:text-xl md:text-2xl text-gray-700" />
        </button>

        {/* Carousel */}
        <Carousel
          ref={carouselRef}
          slidesToShow={3}
          autoplay
          dots={false}
          arrows={false}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3, // mobile me bhi 3 cards
              },
            },
          ]}
        >

          {teamMembers.map((item, index) => (
            <div key={index} className="px-1 sm:px-3 py-8 sm:py-14">

              <div className="relative bg-white text-center px-2 sm:px-6 pt-8 sm:pt-16 pb-3 sm:pb-8 rounded-lg shadow-md hover:shadow-xl transition group">

                {/* Image */}
                <div className="absolute -top-5 sm:-top-12 left-1/2 -translate-x-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-24 sm:h-24 rounded-full object-cover border-2 sm:border-4 border-white shadow-md group-hover:scale-105 transition"
                  />
                </div>

                {/* Quote */}
                <p className="text-[#1f4e79] text-[7px] sm:text-sm text-justify leading-3 sm:leading-relaxed mt-2 sm:mt-4 px-1 sm:px-2 line-clamp-4">
                  {item.description}
                </p>

                {/* Name */}
                <h3 className="text-orange-500 font-semibold mt-2 sm:mt-6 text-[8px] sm:text-base">
                  {item.name}
                </h3>

                {/* Role */}
                <p className="text-[6px] sm:text-xs text-[#1f4e79]">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </Carousel>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-2 md:right-8 top-1/2 -translate-y-1/2 p-1 sm:p-2 md:p-3 rounded-full shadow-md sm:shadow-lg bg-white hover:bg-gray-100 z-10"
        >
          <RightOutlined className="text-[10px] sm:text-xl md:text-2xl text-gray-700" />
        </button>

      </div>
    </div>
  );
};
export default OurTestimonial
"use client"

import { Button, Col, Rate, Row } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { StoreMallDirectoryOutlined } from '@mui/icons-material';

const reviews = [
    {
        text: "Great experience working with Mabsol Infotech. The team is very professional and supportive.",
        author_name: "Abhishek Prajapati",
        rating: 5,
        relative_time_description: "2 weeks ago"
    },
    {
        text: "Excellent service and timely delivery of my project. Highly recommended!",
        author_name: "Sikha Sharma",
        rating: 4,
        relative_time_description: "1 month ago"
    },
    {
        text: "Very good company. Helpful staff and good environment.",
        author_name: "Manpreet Singh",
        rating: 5,
        relative_time_description: "3 days ago"
    },
    {
        text: "Very good company. Helpful staff and good environment.",
        author_name: "Rahul Rana",
        rating: 5,
        relative_time_description: "3 days ago"
    },
    {
    text: "Great company with a friendly and professional team. The service quality is excellent and the staff is always ready to assist.",
    author_name: "Poonam Arora",
    rating: 5,
    relative_time_description: "1 week ago"
},
{
    text: "One of the best companies to work with. Amazing environment, quick support, and excellent customer service experience.",
    author_name: "Rani Gupta",
    rating: 4,
    relative_time_description: "4 days ago"
},
{
    text: "Highly impressed with their professionalism and dedication. They provide quality services and maintain excellent communication throughout the project.",
    author_name: "Saurabh Kumar",
    rating: 4,
    relative_time_description: "2 weeks ago"
}

];


const GoogleReview = () => {
    const [value, setValue] = useState(5);
    return (
        <div className='lg:px-20 px-6 py-6 bg-white'>
<div className="text-center pt-10 sm:pt-14 lg:pt-20 px-4">
  <h1 className="text-[#185e9a] text-lg sm:text-xl lg:text-2xl font-bold underline">
    # Google Reviews
  </h1>

  <p className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif py-4 sm:py-5 lg:py-6 text-black leading-tight">
    <span className="text-[#185e9a] text-2xl sm:text-4xl lg:text-5xl">
      What our
    </span>{" "}
    clients says?
  </p>

  <div className="pt-3 sm:pt-4 w-full flex justify-center items-center">
    <hr className="w-[30%] sm:w-[20%] lg:w-[15%] border-t-4 border-[#185e9a]" />
  </div>
</div>


            <Row
                className='lg:py-20'
                justify="center"
                align="middle"
                gutter={[24, 24]}
            >
                <Col xs={24} lg={8}>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                        <div className='text-3xl !text-[#185e9a]'>
                            {/* <Image src="/gmlogo.svg" alt='img' height={60} width={60} className=''/> */}
                            <StoreMallDirectoryOutlined style={{ color: "#185e9a", fontSize:64 }} />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <h1 className='font-bold text-black'>Mabsol Infotech Pvt.Ltd.</h1>
                            <div className='text-xl text-yellow-500 font-bold flex gap-2 items-center'>
                                4.9 <Rate onChange={setValue} value={value} />
                            </div>
                            <p className='text-black'>Based on 79 reviews</p>
                            <p className='text-gray-700'>powered by Google</p>
                            <Button  className=' !rounded-none !py-4'>
                                review us on <FcGoogle />
                            </Button>
                        </div>
                    </div>
                </Col>

                <Col xs={24} lg={16}>
<div className="w-full px-4 py-6">
  <h2 className="text-2xl font-bold text-center text-[#185e9a] mb-6">
    Client Reviews
  </h2>

  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    loop={true}
  >
    {reviews.map((review, index) => (
      <SwiperSlide key={index} className="h-auto">
        <div className="bg-white p-6 shadow-lg min-h-[240px] flex flex-col justify-between rounded-lg">
          <p className="italic text-gray-700 mb-4">
            {review.text}
          </p>

          <div>
            <div className="font-semibold text-sm">
              {review.author_name}
            </div>

            <div className="text-yellow-500 text-sm mb-1">
              {"⭐".repeat(review.rating)}
            </div>

            <div className="text-xs text-gray-400">
              {review.relative_time_description}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
                </Col>
            </Row>


        </div>
    )
}

export default GoogleReview
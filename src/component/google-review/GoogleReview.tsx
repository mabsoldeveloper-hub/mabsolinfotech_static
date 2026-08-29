"use client";

import React, { useState } from "react";
import {
  Avatar,
  Button,
  Rate,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  StarFilled,
  TeamOutlined,
  LikeOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    text: "Great experience working with Mabsol Infotech. The team is very professional and supportive.",
    author_name: "Abhishek Prajapati",
    rating: 5,
    relative_time_description: "2 weeks ago",
  },
  {
    text: "Excellent service and timely delivery of my project. Highly recommended!",
    author_name: "Sikha Sharma",
    rating: 5,
    relative_time_description: "1 month ago",
  },
  {
    text: "Very supportive team with excellent technical knowledge. They helped us streamline our business processes.",
    author_name: "Manpreet Singh",
    rating: 5,
    relative_time_description: "3 days ago",
  },
  {
    text: "Excellent support for Marg ERP software and regular software updates. The team is responsive, professional, and always ready to assist whenever needed.",
    author_name: "Poonam Arora",
    rating: 5,
    relative_time_description: "1 week ago",
  },
  {
    text: "Very good company. Helpful staff and good environment.",
    author_name: "Rahul Sharma",
    rating: 5,
    relative_time_description: "3 days ago",
  },
  {
    text: "We have been using their ERP solutions for a long time and are very satisfied with the support.",
    author_name: "Rani Gupta",
    rating: 4,
    relative_time_description: "4 days ago",
  },
  {
    text: "Their development services, technical expertise, and commitment to client satisfaction are truly impressive.",
    author_name: "Rishabh Kumar",
    rating: 5,
    relative_time_description: "4 weeks ago",
  },
];

export default function GoogleReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = [
    reviews[startIndex % reviews.length],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + reviews.length) %
        reviews.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-10">
      {/* Background */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/50 -z-10 lg:z-0" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-100/40 -z-10 lg:z-0" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="border-b-2 border-[#0b3766] pb-1 text-lg font-semibold text-orange-500">
            # Google Reviews
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            <span className="text-orange-500">
              What our
            </span>{" "}
            <span className="text-[#0b3766]">clients say?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Real experiences from real people who trust
            Mabsol Infotech for their success.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-14 bg-orange-500" />
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <div className="h-[2px] w-14 bg-orange-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-10 flex flex-col gap-8 xl:flex-row">
          {/* Fixed Google Card */}
          <div className="xl:w-[340px] shrink-0">
            <div className="flex min-h-[400px] flex-col items-center rounded-[20px] border border-slate-100 bg-white p-8 text-center shadow-lg">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                <FcGoogle className="text-5xl" />
              </div>

              <h3 className="text-2xl text-[#0b3766] font-bold">
                Mabsol Infotech Pvt. Ltd.
              </h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-5xl font-bold text-orange-500">
                  4.9
                </span>

                <Rate
                  disabled
                  value={5}
                />
              </div>

              <p className="mt-4 text-slate-500">
                Based on{" "}
                <span className="font-semibold text-[#0b3766]">
                  92 reviews
                </span>
              </p>

              <p className="mt-2 text-slate-400">
                powered by Google
              </p>

              <Button
                type="primary"
                size="large"
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?gs_ssp=eJzj4tFP1zfMyMhNs6wsSjdgtFI1qDC2NEizNDZPhIIkK4MKS4OUpLTENKNUi5TUFANDAy_x3MSk4vwchcy8tPyS1OQMhYKyEoWckhQAwlAZeg&q=mabsol+infotech+pvt+ltd#lrd=0x390f937aaaaaaaab:0x90dbfaf2e8ded010,3,,,,",
                    "_blank"
                  )
                }
                className="mt-auto rounded-full px-8 !bg-[#0b3766] hover:!bg-[#0a2f58]"
              >
                Review us on Google
              </Button>
            </div>
          </div>

          {/* Reviews */}
          <div className="relative flex-1">
            <button
              onClick={prevSlide}
              className="absolute -left-8 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3766] text-white shadow-lg lg:flex"
            >
              <LeftOutlined />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-8 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3766] text-white shadow-lg lg:flex"
            >
              <RightOutlined />
            </button>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleReviews.map(
                (review, index) => (
                  <div
                    key={index}
                    className="flex h-[400px] flex-col rounded-[24px] border border-slate-100 bg-white p-8 shadow-lg"
                  >
                    <div className="text-[70px] leading-none text-blue-100">
                      ❝
                    </div>

                    <p className=" flex-1 text-slate-700 leading-8">
                      {review.text}
                    </p>

                    <div className="my-4 border-t" />

                    <div className="flex items-center gap-4">
                      <Avatar
                        size={56}
                        className="!bg-blue-100 !font-bold !text-[#0b3766]"
                      >
                        {
                          review.author_name[0]
                        }
                      </Avatar>

                      <div>
                        <h4 className="font-bold text-[#0b3766]">
                          {
                            review.author_name
                          }
                        </h4>

                        <Rate
                          disabled
                          value={
                            review.rating
                          }
                          style={{
                            fontSize: 14,
                          }}
                        />

                        <p className="text-sm text-slate-500">
                          {
                            review.relative_time_description
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<StarFilled />}
            title="4.9 Average Rating"
            subtitle="Trusted by our clients"
          />

          <StatCard
            icon={<TeamOutlined />}
            title="80+ Reviews"
            subtitle="Across Google"
          />

          <StatCard
            icon={
              <SafetyCertificateOutlined />
            }
            title="100% Trusted"
            subtitle="Client Satisfaction"
          />

          <StatCard
            icon={<LikeOutlined />}
            title="Quality Service"
            subtitle="Our Commitment"
          />
        </div> */}
      </div>
    </section>
  );
}

// function StatCard({
//   icon,
//   title,
//   subtitle,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
// }) {
//   return (
//     <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md">
//       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3766] text-xl text-white">
//         {icon}
//       </div>

//       <div>
//         <h4 className="font-bold text-[#0b3766]">
//           {title}
//         </h4>

//         <p className="text-sm text-slate-500">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }
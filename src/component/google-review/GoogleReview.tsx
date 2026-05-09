"use client";

import React, { useState } from "react";
import { Button, Col, Rate, Row } from "antd";
import { FcGoogle } from "react-icons/fc";
import { StoreMallDirectoryOutlined } from "@mui/icons-material";
import { FaQuoteLeft } from "react-icons/fa";
import Script from "next/script";

const GoogleReview = () => {
  const [value] = useState(5);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#edf6ff] lg:px-20 px-4 py-16">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#185e9a]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

      {/* SEO SCHEMA */}
      <Script
        id="google-review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"Mabsol Infotech Pvt.Ltd",
            "url":"https://mabsolinfotech.cloud/",
            "logo":"https://mabsolinfotech.cloud/logo.png",
            "aggregateRating":{
              "@type":"AggregateRating",
              "ratingValue":"4.9",
              "reviewCount":"58"
            }
          }`,
        }}
      />

      {/* ELFSIGHT SCRIPT */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      {/* HEADING */}
      <div className="text-center relative z-10">
        <span className="inline-block bg-[#185e9a]/10 text-[#185e9a] px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
          GOOGLE REVIEWS
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-[#185e9a] mt-5 leading-tight">
          Trusted by <span className="text-orange-500">Happy Clients</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          See what our customers say about our software solutions,
          development services, and support experience.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-28 h-1.5 rounded-full bg-[#185e9a]"></div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <Row
        gutter={[32, 32]}
        justify="center"
        align="middle"
        className="mt-14 relative z-10"
      >

        {/* LEFT CARD */}
        <Col xs={24} lg={7}>
          <div className="bg-white/90 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300">


            {/* COMPANY LOGO */}
            <div className="flex justify-center items-center mb-4">
              <img
                src="/images/logo.webp"
                alt="Mabsol Infotech"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* COMPANY */}
            <h3 className="text-2xl font-bold text-[#185e9a] mt-5">
              Mabsol Infotech
            </h3>

            <p className="text-gray-500 mt-1">
              Software & IT Solutions Company
            </p>

            {/* RATING */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <span className="text-4xl font-extrabold text-orange-500">
                4.9
              </span>

              <div>
                <Rate disabled value={value} className="text-lg" />
                <p className="text-sm text-gray-500 mt-1">
                  Based on 58 Reviews
                </p>
              </div>
            </div>

            {/* REVIEW BUTTON */}
            <a
              href="https://www.google.com/search?hl=en-IN&gl=in&q=SCO-76,+2ND+Floor,+Mabsol+Infotech+Pvt.Ltd.,+near,+railway+Crossing,+Shree+Ram+Atta+Chakki,+Ekta+Vihar,+Sector+19,+Panchkula,+Haryana+134113&ludocid=10438212482557202448&lsig=AB86z5VoRfCz5AE9b_2YxBOQpbG8#lrd="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="large"
                className="!mt-8 !h-14 !px-8 !rounded-xl !border-0 !bg-[#185e9a] hover:!bg-[#144a7a] !text-white !font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center gap-3">
                  Write a Review
                  <FcGoogle className="text-xl" />
                </span>
              </Button>
            </a>

            {/* SMALL INFO */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
              <FaQuoteLeft />
              Powered by Google Reviews
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE REVIEWS */}
        <Col xs={24} lg={17}>
          <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-2xl p-3 md:p-5">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#185e9a]">
                  What Clients Say
                </h3>

                <p className="text-gray-500 mt-2">
                  Real feedback from our satisfied customers.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#185e9a]/10 px-4 py-2 rounded-full">
                <FcGoogle className="text-2xl" />
                <span className="font-semibold text-[#185e9a]">
                  Google Verified
                </span>
              </div>
            </div>

            {/* ELFSIGHT WIDGET */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="elfsight-app-c5fe587d-7bbf-4c08-aaa3-cfd569414b2a"
                data-elfsight-app-lazy
              ></div>
            </div>

          </div>
        </Col>
      </Row>
    </section>
  );
};

export default GoogleReview;
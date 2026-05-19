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
      <div className="text-center relative z-10 px-4">

        <span className="inline-block bg-[#185e9a]/10 text-[#185e9a] px-4 py-1.5 rounded-full font-semibold text-[11px] sm:text-sm tracking-wide">
          GOOGLE REVIEWS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#185e9a] mt-4 leading-snug">
          Trusted by{" "}
          <span className="text-orange-500">
            Happy Clients
          </span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          See what our customers say about our software solutions,
          development services, and support experience.
        </p>

        <div className="flex justify-center mt-5">
          <div className="w-20 sm:w-28 h-1.5 rounded-full bg-[#185e9a]"></div>
        </div>

      </div>


      {/* MAIN SECTION */}
      <Row
        gutter={[20, 20]}
        justify="center"
        className="mt-8 md:mt-10 relative z-10"
      >
        {/* FULL WIDTH REVIEWS */}
        <Col xs={24}>
          <div className="w-full bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-xl p-3 md:p-5">
            {/* ELFSIGHT WIDGET */}
            <div className="overflow-hidden rounded-xl min-h-[250px] md:min-h-[320px]">
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
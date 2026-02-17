"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="bg-cover bg-center bg-no-repeat min-h-screen lg:py-20 py-14 px-4 sm:px-6 lg:px-20"
      style={{ backgroundImage: "url('/base-1.png')" }}
    >
      {/* Title + Description */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold underline text-[#185e9a] text-center">
          About Us
        </h1>
        <p className="text-base sm:text-lg italic py-4 text-justify">
          At Mabsol Infotech, we are committed to delivering innovative software
          solutions that empower businesses to thrive in a competitive world.
          Specializing in Web Development, Accounting Software, ERP Software,
          and Payroll Software, we offer tailored services to streamline your
          operations and drive growth. With a focus on quality and customer
          satisfaction, we ensure seamless experiences and lasting partnerships.
        </p>
      </div>

      {/* Why Choose Mabsol Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 gap-8 lg:gap-14 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl text-[#185e9a] underline font-bold">
            Why Choose Mabsol Infotech?
          </h1>
          <p className="text-base sm:text-lg italic py-4 text-justify">
            People choose Mabsol Infotech for our expertise, reliability, and
            commitment to excellence. We deliver customized solutions like
            Accounting Software, ERP, Payroll, and Web Development, backed by
            exceptional customer support to ensure your success.
          </p>
          <ul className="space-y-3">
            {[
              "Tailored Solutions - Customized software and services to fit your business needs.",
              "Reliable Support - Prompt and responsive customer support for seamless operations.",
              "Advanced Technology - Leveraging the latest tools to drive innovation and growth.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckOutlined className="bg-[#185e9a] !text-white p-1 rounded-full text-sm" />
                <span className="text-base italic text-black">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <Card
            data-aos="fade-right"
            styles={{ body: { padding: 0 } }}
            variant="outlined"
            className="rounded-2xl overflow-hidden shadow-2xl border-none w-[600px] max-w-full"
          >
            <img
              src="images/section1.webp"
              alt=""
              className="w-full h-60 sm:h-72 md:h-96 object-cover transition duration-300 ease-in-out hover:scale-105"
            />
          </Card>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 gap-8 lg:gap-14 justify-center items-center">
        <div className="flex justify-center items-center">
          <Card
            data-aos="fade-right"
            styles={{ body: { padding: 0 } }}
            variant="outlined"
            className="rounded-2xl overflow-hidden shadow-2xl border-none w-[600px] max-w-full"
          >
            <img
              src="images/section2.jpeg"
              alt=""
              className="w-full h-60 sm:h-72 md:h-96 object-cover transition duration-300 ease-in-out hover:scale-105"
            />
          </Card>
        </div>

        <div>
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-3xl sm:text-4xl text-[#185e9a] underline font-bold"
          >
            Our Mission
          </h1>
          <p className="text-base sm:text-lg italic py-4 text-justify">
            Our mission at Mabsol Infotech is to empower businesses with
            cutting-edge technology solutions that simplify processes, enhance
            efficiency, and foster growth. We are dedicated to delivering
            innovative, reliable, and scalable tools that meet the evolving
            needs of our clients while maintaining a focus on excellence and
            customer satisfaction.
          </p>
          <ul className="space-y-3">
            {[
              "Deliver innovative and scalable software solutions.",
              "Simplify business processes to boost efficiency.",
              "Focus on customer satisfaction and long-term success.",
              "Stay committed to quality and technological excellence.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckOutlined className="bg-[#185e9a] !text-white p-1 rounded-full text-sm" />
                <span className="text-base italic text-black">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 gap-8 lg:gap-14 items-center">
        <div data-aos="fade-left">
          <h1
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-3xl sm:text-4xl text-[#185e9a] underline font-bold"
          >
            Our Vision
          </h1>
          <p className="text-base sm:text-lg italic py-4 text-justify">
            At Mabsol Infotech, we envision a future where businesses of all
            sizes leverage technology to achieve their full potential. We aim to
            be a trusted partner in this journey, offering solutions that drive
            innovation, streamline operations, and build long-term success for
            our clients.
          </p>
          <ul className="space-y-3">
            {[
              "Empower businesses through advanced technology.",
              "Become a trusted partner for growth and success.",
              "Drive innovation with customer-centric solutions.",
              "Foster long-term relationships built on trust and excellence.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckOutlined className="bg-[#185e9a] !text-white p-1 rounded-full text-sm" />
                <span className="text-base italic text-black">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Card
            data-aos="fade-right"
            styles={{ body: { padding: 0 } }}
            variant="outlined"
            className="rounded-2xl overflow-hidden shadow-2xl border-none w-[600px] max-w-full"
          >
            <img
              src="images/section3.webp"
              alt=""
              className="w-full h-60 sm:h-72 md:h-96 object-cover transition duration-300 ease-in-out hover:scale-105"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

"use client";

import React from "react";
import Link from "next/link";
import {

  HomeOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden grid grid-cols-2 gap-3 sm:gap-6 lg:gap-12 px-3 sm:px-8 lg:px-20 py-6 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">


      {/* LEFT SIDE */}
      <div
        data-aos="fade-right"
        className="grid grid-cols-2 gap-2 sm:gap-6 items-start">

        {/* HEADING */}
        <div className="col-span-2 text-left">
          <h1 className="text-sm sm:text-4xl md:text-5xl font-bold text-[#1f4e79] mb-1 sm:mb-3">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="text-[8px] sm:text-base text-gray-600 leading-relaxed">
            We’re here to help you with your business needs.
            Reach out for support, queries, or collaboration.
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-2 sm:p-5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">

            <FaPhoneAlt className="text-[12px] sm:text-2xl text-green-600" />

            <h3 className="font-semibold text-[11px] sm:text-lg text-[#1f4e79]">
              Phone
            </h3>
          </div>

          <div className="text-[8px] sm:text-sm mt-1 sm:mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-[#1f4e79] leading-4 sm:leading-6">

            <a
              href="tel:9888914287"
              className="hover:text-blue-600 break-all"
            >
              9888914287
            </a>

            <a
              href="tel:9888914283"
              className="hover:text-blue-600 break-all"
            >
              9888914283
            </a>

            <a
              href="tel:9356042496"
              className="hover:text-blue-600 break-all"
            >
              9356042496
            </a>

            <a
              href="tel:9357815181"
              className="hover:text-blue-600 break-all"
            >
              9357815181
            </a>

            <a
              href="tel:9855605181"
              className="hover:text-blue-600 break-all"
            >
              9855605181
            </a>

            <a
              href="tel:9855145181"
              className="hover:text-blue-600 break-all"
            >
              9855145181
            </a>

          </div>
        </div>

                {/* Phone */}
        <div className="bg-white p-2 sm:p-5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">

            <FaPhoneAlt className="text-[12px] sm:text-2xl text-green-600" />

            <h3 className="font-semibold text-[11px] sm:text-lg text-[#1f4e79]">
              TelePhone
            </h3>
          </div>

          <div className="text-[8px] sm:text-sm mt-1 sm:mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-[#1f4e79] leading-4 sm:leading-6">

            <a
              href="tel:01722575181"
              className="hover:text-blue-600 break-all"
            >
              0172 2575181
            </a>

          </div>
        </div>

        {/* Email */}
        <div className="bg-white p-2 sm:p-5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition">

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">

            <AiOutlineMail className="text-[12px] sm:text-2xl text-red-500" />

            <h3 className="font-semibold text-[11px] sm:text-lg text-[#1f4e79]">
              Email
            </h3>
          </div>

          <div className="text-[8px] sm:text-sm mt-1 sm:mt-2 text-[#1f4e79] break-all leading-4 sm:leading-6">

            <a
              href="mailto:mabsolinfotech@gmail.com"
              className="block hover:text-blue-600"
            >
              mabsolinfotech@gmail.com
            </a>

            <a
              href="mailto:contact@mabsolinfotech.com"
              className="block hover:text-blue-600"
            >
              contact@mabsolinfotech.com
            </a>

          </div>
        </div>

        {/* Address */}
        <div className="bg-white p-2 sm:p-5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition">

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">

            <IoLocationSharp className="text-[12px] sm:text-2xl text-red-500" />

            <h3 className="font-semibold text-[11px] sm:text-lg text-[#1f4e79]">
              Address
            </h3>
          </div>

          <Link
            href="https://www.google.com/maps/place/Mabsol+Infotech+Pvt.Ltd./@30.668727,76.834759,17z"
            target="_blank"
          >
            <p className="text-[8px] sm:text-sm text-gray-600 hover:text-blue-600 leading-4 sm:leading-6">
              SCO-76, 2nd Floor,
              Sector 19,
              Panchkula, Haryana
            </p>
          </Link>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-2 sm:p-5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition">

          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">

            <HomeOutlined className="text-[12px] sm:text-2xl text-red-500" />

            <h3 className="font-semibold text-[11px] sm:text-lg text-[#1f4e79]">
              Working Hours
            </h3>
          </div>

          <p className="text-[8px] sm:text-sm text-gray-600 mt-1 sm:mt-2 leading-4 sm:leading-6">
            Mon - Sat <br />
            10:00 AM – 6:30 PM
          </p>
        </div>

      </div>

      {/* RIGHT SIDE MAP */}
      <div
        data-aos="fade-left"
        className="w-full h-[220px] sm:h-[400px] lg:h-[500px]"
      >

        <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">

          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.7655040841573!2d76.83218437613026!3d30.668731088722033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f937aaaaaaaab%3A0x90dbfaf2e8ded010!2sMabsol%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1752842731021!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
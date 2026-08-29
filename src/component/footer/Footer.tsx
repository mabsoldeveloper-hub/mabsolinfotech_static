"use client";
import React from "react";
import {
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#0b1d5b] text-white py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(/footer.png)` }}
      ></div>

      {/* Footer Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 z-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

        {/* Logo + About */}
        <div>
          <div className="h-[65px] sm:h-[80px] w-[170px] sm:w-[200px]">
            <img
              src="/footerlogo.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-xs sm:text-sm text-gray-300 pt-4 sm:pt-6 leading-relaxed">
            MABSOL INFOTECH PRIVATE LIMITED is the leading and reliable ERP
            software vendor, aiding various industries with cost-effective and
            efficient software solutions.
          </p>


        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Newsletter
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
            Stay updated with our latest news and offers.
          </p>

          <form className="flex flex-col gap-3 w-full 
                 sm:max-w-[240px] 
                 md:max-w-[260px] 
                 lg:max-w-[280px]">

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-3 py-2 text-sm rounded-sm
    border border-gray-400 bg-white/10 text-white
    placeholder:text-gray-300
    focus:outline-none focus:ring-1 focus:ring-white"
            />

            <button
              type="submit"
              className="w-full py-2 text-sm font-medium
    bg-[#1a3c96] hover:bg-[#2550c4]  
    transition-all duration-300
    rounded-sm text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Products + Services + Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-10 xl:gap-5">

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-5 whitespace-nowrap">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="/tallys" className="hover:text-white transition">
                  Tally
                </a>
              </li>

              <li>
                <a href="/margErp" className="hover:text-white transition">
                  Marg ERP 9+
                </a>
              </li>

              <li>
                <a href="/reporting" className="hover:text-white transition">
                  M R Reporting
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 whitespace-nowrap">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a
                  href="/website-development"
                  className="hover:text-white transition"
                >
                  Website Development
                </a>
              </li>

              <li>
                <a
                  href="/accounting-software"
                  className="hover:text-white transition"
                >
                  Accounting Software
                </a>
              </li>

              <li>
                <a
                  href="/payroll-software"
                  className="hover:text-white transition"
                >
                  Payroll Software
                </a>
              </li>

              <li>
                <a href="/erp-software" className="hover:text-white transition">
                  ERP Software
                </a>
              </li>

              <li>
                <a href="/sfa-software" className="hover:text-white transition">
                  SFA Software
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 whitespace-nowrap">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}
                  className="hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                  }}
                  className="hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a href="/career" className="hover:text-white">
                  Career
                </a>
              </li>

              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("Team");
                  }}
                  className="hover:text-white"
                >
                  Team
                </a>
              </li>


            </ul>
          </div>
        </div>

      </div>


      {/* Footer Bottom Section */}

      <div className="relative mt-6 border-t border-white/20 pt-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div
          className="
      flex flex-col gap-5
      sm:flex-row sm:items-center sm:justify-between
    "
        >
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
            <a
              href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
          flex h-9 w-9 items-center justify-center rounded-full
          bg-white/10 text-lg text-white
          transition-all duration-300
          hover:-translate-y-1 hover:bg-[#2550c4]
          hover:shadow-md hover:shadow-blue-900/30
          sm:h-10 sm:w-10 sm:text-xl
        "
            >
              <FacebookFilled />
            </a>

            <a
              href="https://www.youtube.com/@ABMINFOTECHPanchkula"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="
          flex h-9 w-9 items-center justify-center rounded-full
          bg-white/10 text-lg text-white
          transition-all duration-300
          hover:-translate-y-1 hover:bg-[#ff0000]
          hover:shadow-md hover:shadow-red-900/30
          sm:h-10 sm:w-10 sm:text-xl
        "
            >
              <YoutubeFilled />
            </a>

            <a
              href="https://www.instagram.com/mabsol_infotech_pvt_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
          flex h-9 w-9 items-center justify-center rounded-full
          bg-white/10 text-lg text-white
          transition-all duration-300
          hover:-translate-y-1 hover:bg-[#e1306c]
          hover:shadow-md hover:shadow-pink-900/30
          sm:h-10 sm:w-10 sm:text-xl
        "
            >
              <InstagramFilled />
            </a>

            <a
              href="https://www.linkedin.com/in/mabsol-infotech-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
          flex h-9 w-9 items-center justify-center rounded-full
          bg-white/10 text-lg text-white
          transition-all duration-300
          hover:-translate-y-1 hover:bg-[#0a66c2]
          hover:shadow-md hover:shadow-blue-900/30
          sm:h-10 sm:w-10 sm:text-xl
        "
            >
              <LinkedinFilled />
            </a>
          </div>

          {/* Copyright + Links */}
          <div className="flex flex-1 flex-col items-center text-center sm:ml-5">
            <p
              className="
          w-full
          text-[9px] leading-4 text-gray-400
          sm:text-[11px] sm:leading-5
          md:text-xs
          lg:text-sm
        "
            >
              © {new Date().getFullYear()} MABSOL INFOTECH PRIVATE LIMITED.
              <span className="hidden sm:inline"> All Rights Reserved.</span>
            </p>

            {/* Footer Links */}
            <div
              className="
          mt-2 flex w-full flex-wrap items-center justify-center
          gap-x-3 gap-y-1.5
          text-[9px] text-gray-400
          sm:gap-x-4 sm:text-[11px]
          md:text-xs
          lg:text-sm
        "
            >
              <Link
                href="/term-condition"
                className="transition-colors duration-200 hover:text-white"
              >
                Terms & Conditions
              </Link>

              <span className="text-white/20">|</span>

              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>

              <span className="text-white/20">|</span>

              <Link
                href="/jobs-create"
                className="transition-colors duration-200 hover:text-white"
              >
                Jobs Create
              </Link>

              <span className="text-white/20">|</span>

              <Link
                href="/location"
                className="transition-colors duration-200 hover:text-white"
              >
                User Locator
              </Link>
            </div>
          </div>

          {/* Empty spacer on desktop for balanced layout */}
          <div className="hidden w-[152px] sm:block" />
        </div>

        {/* Scroll To Top */}
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
      fixed bottom-4 right-4 z-50
      flex h-9 w-9 items-center justify-center
      rounded-full
      bg-blue-600 text-white
      shadow-lg shadow-blue-900/30
      transition-all duration-300
      hover:-translate-y-1 hover:scale-110
      hover:bg-blue-500
      focus:outline-none focus:ring-2
      focus:ring-blue-400 focus:ring-offset-2
      focus:ring-offset-[#0b1d5b]
      sm:bottom-5 sm:right-5
      sm:h-10 sm:w-10
      md:bottom-6 md:right-6
    "
        >
          <MdOutlineKeyboardDoubleArrowUp size={21} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
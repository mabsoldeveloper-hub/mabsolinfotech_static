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

          <div className="flex items-center gap-3 sm:gap-4 mt-5 text-xl sm:text-2xl flex-nowrap">

            <a
              href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md 
    bg-white/10 text-white hover:bg-[#2550c4] 
    transition-all duration-300"
            >
              <FacebookFilled />
            </a>

            <a
              href="https://www.youtube.com/@ABMINFOTECHPanchkula"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md 
    bg-white/10 text-white hover:bg-[#2550c4] transition-all duration-300"
            >
              <YoutubeFilled />
            </a>

            <a
              href="https://www.instagram.com/mabsol_infotech_pvt_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md 
    bg-white/10 text-white hover:bg-[#2550c4] transition-all duration-300"
            >
              <InstagramFilled />
            </a>

            <a
              href="https://www.linkedin.com/in/mabsol-infotech-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md 
    bg-white/10 text-white hover:bg-[#2550c4] transition-all duration-300"
            >
              <LinkedinFilled />
            </a>

          </div>
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

      <div className="relative mt-5 border-t border-white/50 pt-3">

        <div className="text-center">
          <p className="text-gray-400 text-[9px] sm:text-[11px] md:text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
            © {new Date().getFullYear()} MABSOL INFOTECH PRIVATE LIMITED. All Rights Reserved.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-2 text-gray-400 text-[9px] sm:text-[11px] md:text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
            <Link href="/term-condition" className="hover:text-white transition">
              Terms & Conditions
            </Link>

            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/jobs-create" className="hover:text-white transition">
              Jobs Create
            </Link>

            <Link href="/location" className="hover:text-white transition">
              User Locator
            </Link>
          </div>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
      fixed
      bottom-4
      right-4
      z-50
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-blue-600
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-110
      hover:bg-blue-500
      md:bottom-6
      md:right-6
    "
        >
          <MdOutlineKeyboardDoubleArrowUp size={22} />
        </button>

      </div>
    </div>
  );
};

export default Footer;
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

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<div className="relative bg-blue-800 text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-8 lg:px-16 overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
    style={{ backgroundImage: `url(/footer.png)` }}
  ></div>

  {/* Footer Grid */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-20">

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

      <div className="flex gap-4 mt-5 text-xl sm:text-2xl text-white flex-wrap">
        <a href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/">
          <FacebookFilled />
        </a>

        <a href="https://www.youtube.com/@ABMINFOTECHPanchkula">
          <YoutubeFilled />
        </a>

        <a href="https://www.instagram.com/mabsol_infotech_pvt_ltd/">
          <InstagramFilled />
        </a>

        <a href="https://www.linkedin.com/in/mabsol-infotech-pvt-ltd/">
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

      <form className="w-full">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full max-w-full px-4 py-2 text-sm rounded-none border bg-white/10 border-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
        />

        <button
          type="submit"
          className="w-full mt-3 text-center bg-[#33386f] hover:bg-[#2b2f5c] transition cursor-pointer rounded-none text-white py-2 text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* Products & Services */}
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-4">
        Our Products
      </h3>

      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
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

      <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-4">
        Our Services
      </h3>

      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
        <li>
          <a href="/website-development" className="hover:text-white transition">
            Website Development
          </a>
        </li>

        <li>
          <a href="/accounting-software" className="hover:text-white transition">
            Accounting Software
          </a>
        </li>

        <li>
          <a href="/payroll-software" className="hover:text-white transition">
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
      <h3 className="text-lg sm:text-xl font-semibold mb-4">
        Quick Links
      </h3>

      <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
            }}
            className="hover:text-white cursor-pointer"
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
            className="hover:text-white cursor-pointer"
          >
            Contact
          </a>
        </li>

        <li>
          <a href="/career" className="hover:text-white cursor-pointer">
            Career
          </a>
        </li>

        <li>
          <Link href="/faq" className="hover:text-white cursor-pointer">
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
            className="hover:text-white cursor-pointer"
          >
            Team
          </a>
        </li>

        <li>
          <a href="/term-condition" className="hover:text-white cursor-pointer">
            Terms and Conditions
          </a>
        </li>

        <li>
          <a href="/privacy-policy" className="hover:text-white cursor-pointer">
            Privacy Policy
          </a>
        </li>

        <li>
          <Link href="/jobs-create" className="hover:text-white cursor-pointer">
            Jobs Create
          </Link>
        </li>

        <li>
          <Link href="/location" className="hover:text-white cursor-pointer">
            User Locator
          </Link>
        </li>
      </ul>
    </div>
     </div> {/*grid vala div */}
  </div>

  {/* Bottom */}
  <div className="border-t border-gray-700 mt-10 pt-5 text-center text-[11px] sm:text-sm text-gray-400 relative z-20">
    © {new Date().getFullYear()} MABSOL INFOTECH PRIVATE LIMITED. All Rights Reserved.
  </div>
</div>
  );
};

export default Footer;

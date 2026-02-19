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
    <div className="relative bg-[#185e9a] text-white pt-16 pb-8 px-4 sm:px-8 lg:px-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ backgroundImage: `url(/footer.png)` }}
      ></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 opacity-100 z-20">
        <div>
          <div className="h-[80px] w-[200px]">
            <img src="/footerlogo.webp" alt="" className="h-[100%] w-[100%]" />
          </div>
          <p className="text-sm text-gray-300 pt-6">
            MABSOL INFOTECH PRIVATE LIMITED is the leading and reliable ERP
            software vendor, aiding various industries with cost-effective and
            efficient software solutions.
          </p>

          <div className="flex gap-4 mt-6 text-2xl text-white">
            <a href="https://www.facebook.com/people/Mabsol-Infotech-Pvt-Ltd-Haryana/61578120662281/">
              <FacebookFilled />
            </a>
            {/* <a href="#">
              <TwitterSquareFilled />
            </a> */}
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

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-[300px] rounded-none px-4 py-2 mb-3 border 
             focus:outline-1 focus:outline-white"
            />

            <button
              type="submit"
              className="w-[300px] text-center bg-[#33386f]  cursor-pointer rounded-none text-white py-2 "
            >
              Subscribe
            </button>
          </form>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
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

          <h3 className="text-xl font-semibold mt-6 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
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

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
                className="hover:!text-white cursor-pointer"
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
                className="hover:!text-white cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/career" className="hover:!text-white cursor-pointer">Career</a>
            </li>
            {/* <li>
              <a href="#" onClick={handleClick}>
                FAQ
              </a>
            </li> */}

            <li>
              <Link href="/faq" className="hover:!text-white cursor-pointer">FAQ</Link>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("Team");

                }}
                className="hover:!text-white cursor-pointer"
              >
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:!text-white cursor-pointer">Portfolio Single</a>
            </li>
            <li>
              <a href="/term-condition" className="hover:!text-white cursor-pointer">Terms and Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:!text-white cursor-pointer">Refund and Cancellation Policy</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:!text-white cursor-pointer">Privacy Policy</a>
            </li>
            <li>
              <Link href="/jobs-create" className="hover:!text-white cursor-pointer">
                Jobs Create
              </Link>
            </li>
            {/* <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="/payment">Payment Getway</a>
            </li> */}
            <Link href="/location" className="hover:!text-white cursor-pointer">
              <li>User Locator</li>
            </Link>

          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MABSOL INFOTECH PRIVATE LIMITED. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;

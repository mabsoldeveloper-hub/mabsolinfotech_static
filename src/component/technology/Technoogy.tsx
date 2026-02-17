import { SnippetsFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Technoogy = () => {
  return (
    <div className="relative py-20 overflow-hidden px-6 lg:px-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
        style={{ backgroundImage: `url(/bg5.jpeg)` }}
      ></div>

      <div className="relative z-20 opacity-100 grid grid-cols-1 lg:grid-cols-2">
        <div data-aos="zoom-in-right">
          <h1 className="text-[#185e9a] text-3xl font-bold font-serif underline">
            # Innovation Hub
          </h1>
          <p className="text-4xl text-gray-700 font-bold font-serif max-w-[500px] py-2">
            Where Technology Transforms Business
          </p>
          <Button className="!text-[#185e9a] !bg-transparent !rounded-none !py-6 !px-12 hover:!text-white hover:!bg-[#185e9a] !mt-6 !text-xl !border-[#185e9a]">
            Project <SnippetsFilled />
          </Button>
        </div>
        <div data-aos="zoom-in-left">
          <h1 className="text-3xl font-bold text-[#185e9a]">
            Empowering Businesses with Leading Software Solutions
          </h1>
          <p className="text-lg italic leading-8">
            At Mabsol Infotech, our suite of advanced solutions—Marg, Tally,
            Busy, MR Reporting, and GreyHR—drives efficiency, compliance, and
            growth for businesses across sectors. Discover how our tools
            simplify operations, improve productivity, and support smarter
            decision-making.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-32">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col gap-10"
        >
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">Marg ERP</span>
            <p className="text-lg italic pt-4">
              Streamline inventory and distribution with features like batch
              tracking, smart billing, and real-time updates, tailored for
              industries like pharmaceuticals and retail.
            </p>
          </div>
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">Tally</span>
            <p className="text-lg italic pt-4">
              Simplify accounting and compliance with automated GST, integrated
              banking, and powerful analytics to support financial clarity for
              SMBs.
            </p>
          </div>
          <div>
            <span className="text-2xl  underline font-semibold text-[#185e9a]">
              HR Payroll
            </span>
            <p className="text-lg italic pt-4">
              Comprehensive accounting and GST compliance, providing real-time
              insights and scalability for growing businesses.
            </p>
          </div>
          <div>
            <span className="text-2xl  underline font-semibold text-[#185e9a]">
              MR Reporting
            </span>
            <p className="text-lg italic pt-4">
              Empower sales teams with GPS tracking, call reporting, and
              analytics, enhancing field efficiency for healthcare companies.
            </p>
          </div>
        </div>
        <div className="h-[300px] md:h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden">
          <img
            src="images/section1.webp"
            alt=""
            className="h-full w-full object-cover rounded-3xl transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex flex-col gap-10"
        >
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">GreyHR</span>
            <p className="text-lg italic pt-4">
              Automate HR tasks like payroll and compliance, freeing time for
              strategic functions with a user-friendly, cloud-based platform.
            </p>
          </div>
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">
              Automated Compliance
            </span>
            <p className="text-lg italic pt-4">
              Each solution automates tax, payroll, and regulatory compliance,
              ensuring seamless adherence to changing standards.
            </p>
          </div>
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">
              Cloud-Enabled Access
            </span>
            <p className="text-lg italic pt-4">
              Secure, scalable cloud solutions for real-time data access and
              collaboration across locations.
            </p>
          </div>
          <div>
            <span className="text-2xl underline font-semibold text-[#185e9a]">
              Insightful Analytics
            </span>
            <p className="text-lg italic pt-4">
              From financial reports to HR metrics, our tools provide actionable
              insights for smarter decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technoogy;

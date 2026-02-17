import { CheckOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 py-20 max-w-7xl mx-auto text-white">
      <Card
        data-aos="fade-right"
        styles={{ body: { padding: "40px 20px 40px 20px" } }}
        className="!bg-[#185e9a]"
      >
        <div className="h-[400px] overflow-hidden">
          <img
            src="images/slider2.webp"
            alt=""
            className="h-[100%] w-[100%] rounded-2xl overflow-hidden"
          />
        </div>
        <p className="text-4xl text-white font-semibold py-6">
          Empowering Your Business with Intelligent Software Solutions
        </p>
        <p className="text-white text-sm">
          Streamline Operations, Maximize Efficiency with Mabsol Infotech
        </p>
      </Card>

      <Card data-aos="fade-left" className="!bg-gray-200">
        <span className="text-3xl font-semibold underline text-[#185e9a]">
          # Case Studies
        </span>
        <p className="text-4xl font-serif font-semibold py-8">
          Transforming Business Efficiency with Mabsol Infotech
        </p>
        <p className="pt-4 italic text-lg">
          At Mabsol Infotech, we’re committed to enhancing business operations
          through our innovative software solutions. Explore how our tailored
          software applications have empowered diverse industries to streamline
          their processes and achieve remarkable results.
        </p>

        <div className="flex flex-col gap-4 py-8">
          <li className="flex justify-start items-center gap-2">
            <CheckOutlined className="p-1 bg-[#185e9a] rounded-full hover:text-black !text-white !font-bold" />
            <span className="text-lg italic text-black">
              Revolutionizing Accounting with Tally
            </span>
          </li>

          <li className="flex justify-start items-center gap-2">
            <CheckOutlined className="p-1 bg-[#185e9a] rounded-full hover:text-black !text-white !font-bold" />
            <span className="text-lg italic text-black">
              Optimizing Business Operations with Marg ERP
            </span>
          </li>

          <li className="flex justify-start items-center gap-2">
            <CheckOutlined className="p-1 bg-[#185e9a] rounded-full hover:text-black !text-white !font-bold" />
            <span className="text-lg italic text-black">
              Enhancing Reporting Capabilities with MR Reporting
            </span>
          </li>

          <li className="flex justify-start items-center gap-2">
            <CheckOutlined className="p-1 bg-[#185e9a] rounded-full hover:text-black !text-white !font-bold" />
            <span className="text-lg italic text-black">
              Streamlining Clinic Management with Clinic Management Software
            </span>
          </li>
        </div>

        <p className="pt-4 italic text-lg">
          These case studies highlight how Mabsol Infotech’s solutions address
          specific challenges and deliver tangible results, demonstrating our
          commitment to enhancing business performance across various sectors.
        </p>
      </Card>
    </div>
  );
};

export default CaseStudy;

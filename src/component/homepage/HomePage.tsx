"use client";

import { Button, Card } from "antd";
import { div } from "framer-motion/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcEditImage, FcElectronics, FcGlobe, FcPlanner } from "react-icons/fc";

// const image = [
//   {
//     image: "/1.webp",
//   },
//   {
//     image: "/2.webp",
//   },
//   {
//     image: "/3.webp",
//   },
//   {
//     image: "/4.png",
//   },
//   {
//     image: "/5.jpg",
//   },
//   {
//     image: "/1.webp",
//   },
//   {
//     image: "/1.webp",
//   },
//   {
//     image: "/1.webp",
//   },
// ];

const HomePage = () => {
  const images = [
    "images/background.jpg",
    "images/background2.jpg",
    "images/background.avif",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((preIndex) => (preIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full min-h-[80vh]">
        <div
          style={{
            backgroundImage: `url(${images[index]})`,
            transition: "background-image 1s ease-in-out",
          }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        ></div>

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div> */}

        <div className="relative z-10 flex flex-col h-[80vh] justify-center items-center gap-6 px-4 text-center bg-black/50 text-white">
          <h1 className="text-3xl lg:text-5xl text-center font-bold max-w-[700px] pt-6">
            Smart Solutions for Smarter Business Management
          </h1>

          <p className="text-center lg:max-w-[800px] w-full lg:leading-8">
            Mabsol Infotech empowers businesses with cutting-edge software
            solutions like Marg, Tally, MR Reporting, and greytHR. From
            accounting to HR management, we simplify your operations and ensure
            seamless workflows with top-notch customer support.
          </p>

          <div
            data-aos="fade-up"
            className="flex justify-start items-center text-start"
          >
            <Link href="/about_us">
              <Button className="!py-6 !px-8 !rounded-none !text-md text-white!  hover:!bg-blue-900 !bg-transparent">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" relative z-30 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 lg:px-20 px-6 bottom-16">
        <Card
          data-aos="fade-right"
          styles={{
            body: { padding: "24px" },
          }}
          classNames={{
            body: "flex flex-col items-center text-center  gap-2 lg:gap-6",
          }}
        >
          <FcEditImage className="text-6xl text-[#185e9a]" />
          <h1 className="text-3xl font-serif font-bold text-[#185e9a]">
            Accounting Software
          </h1>
          <p className="text-lg italic">
            Simplify financial management with tools like Tally, Marg, and Busy
            for invoicing, GST, and reporting.
          </p>
          <Button className="!bg-[#185e9a] !py-5 !px-8 !rounded-none !text-white">
            View
          </Button>
        </Card>

        <Card
          data-aos="fade-right"
          styles={{
            body: { padding: "24px" },
          }}
          classNames={{
            body: "flex flex-col items-center text-center  gap-2 lg:gap-6",
          }}
        >
          {/* <MailFilled/> */}
          <FcGlobe className="text-6xl text-[#185e9a]" />
          <h1 className="text-3xl font-serif font-bold text-[#185e9a]">
            Web Development
          </h1>
          <p className="text-lg italic">
            We design responsive, user-friendly websites to enhance your online
            presence and drive engagement.
          </p>
          <Button className="!bg-[#185e9a] !py-5 !rounded-none !px-8 !text-white">
            View
          </Button>
        </Card>
        <Card
          data-aos="fade-left"
          // styles={{
          //   body: {
          //     display: "flex",
          //     flexDirection: "column",
          //     gap: "10px",
          //     alignItems: "center",
          //     textAlign: "center",
          //   },
          // }}
          styles={{
            body: { padding: "24px" },
          }}
          classNames={{
            body: "flex flex-col items-center text-center  gap-2 lg:gap-6",
          }}
        >
          {/* <MailFilled/> */}
          <FcPlanner className="text-6xl text-[#185e9a]" />
          <h1 className="text-3xl font-serif font-bold text-[#185e9a]">
            ERP Software
          </h1>
          <p className="text-lg italic">
            Optimize business operations with ERP solutions that integrate
            inventory, resource planning, and more.
          </p>
          <Button className="!bg-[#185e9a] !py-5 !px-8 !rounded-none !text-white">
            View
          </Button>
        </Card>
        <Card
          data-aos="fade-left"
          styles={{
            body: { padding: "24px" },
          }}
          classNames={{
            body: "flex flex-col items-center text-center  gap-2 lg:gap-6",
          }}
        >
          {/* <MailFilled /> */}
          <FcElectronics className="text-6xl text-[#185e9a]" />
          <h1 className="text-3xl font-bold text-[#185e9a] font-serif">
            Payroll Software
          </h1>
          <p className="text-lg italic">
            Automate payroll and compliance with reliable tools like greytHR,
            saving time and ensuring accuracy.
          </p>
          <Button className="!bg-[#185e9a] !rounded-none !py-5 !px-8 !text-white">
            View
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;

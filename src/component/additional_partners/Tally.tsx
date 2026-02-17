"use client";
//import {Typography, Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

// const { Title, Paragraph } = Typography;


export default function Tally() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  interface Features {
    id: number;
    title: string;
    content: string[];
  }

  const features: Features[] = [
    {
      id: 1,
      title: "01. Simple to learn, easier to use.",
      content:
        ["Getting started with TallyPrime is extremely simple. You can setup the application in less than a minute and get started with invoicing even faster. It just works the way you expect it to. And with the consistency and intuitiveness in design, you will be able to discover more and learn easily, as you are using TallyPrime."],
    },
    {
      id: 2,
      title: "02. Insightful, actionable & customizable reports.",
      content:
        ["TallyPrime comes with a diverse set of readily available business reports with powerful and actionable insights, helping you make informed decisions for your business growth. Be it business relationships, cash or inventory, these reports will help you manage all these aspects better with extremely easy discovery and navigation."],
    },
    {
      id: 3,
      title: "03. Anywhere, anytime and secure access.",
      content:
        ["With TallyPrime, you can access business reports from web browser, wherever you are, and with the promise that your data is available only to you. This comes along with multiple user and feature based security levels. And an additional layer of security called TallyVault, that ensures encryption which no one in the world can break, not even us at Tally."],
    },
    {
      id: 4,
      title: "04. Do more with TallyPrime!",
      content:
        ["TallyPrime is enhanced to simplify MSME payments and drive your payment processes compliant to MSME rule. Registered MSMEs can effortlessly print UDYAM registration number, track upcoming or delayed receivables, and send timely reminders. Businesses transacting with MSMEs can quickly identify the upcoming payables to MSMEs along with due days and use ‘MSME Form -1’ to report overdue bills."],
    },
  ];

  const toggleFeature = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen text-center text-gray-800">
      {/* ===== Header Section ===== */}

      {/* Top Section */}
      <div
        className="
    min-h-[320px] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center
    text-center
    px-4
  "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/header-image.webp')",
        }}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Tally Software
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-lg mt-2 text-white max-w-xl">
          Smart Billing, Accounting & Inventory Software trusted by 1M+ businesses.
        </p>
      </div>



      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className=" text-2xl sm:text-3xl md:text-5xl
        font-bold text-[#185e9a]
        leading-snug">
            What is <span className="text-orange-500">Tally Software?</span>
          </h2>
          <p className="text-lg text-gray-600 justify-center text-justify leading-relaxed">
            Tally is an intelligent accounting and inventory management solution built specifically for retail and distribution businesses. It simplifies day-to-day operations such as billing, invoicing, and payment tracking, while ensuring accurate management of sales, expenses, and inventory. The software helps businesses maintain better control over stock levels, pricing, and financial records. With built-in automation and seamless integrations, Tally reduces manual effort, improves accuracy, and enables faster decision-making, allowing businesses to save time and operate more efficiently.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/tally-prime.webp"
            alt="Tally Software"
            className="w-[350px]"
          />
        </div>
      </div>


      {/* ===== Why TallyPrime ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-blue-800">Why </span>
              <span className="text-orange-600">TallyPrime?</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              At Tally, we believe in the power of technology to make business owners
              more efficient, empowered, and confident, so they can focus on what
              matters most. Our products are designed to adapt to your business needs,
              making everyday tasks simpler and more intuitive.
              <br />
              <br />
              TallyPrime takes this approach further by making automation easier than
              ever. Whether you are starting fresh or upgrading, it offers a smooth
              experience without the need to learn new processes. With improved
              flexibility, adaptability, and a modern interface, TallyPrime fits
              seamlessly into the way you work and helps you get more done with ease.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/simple.webp"
              alt="TallyPrime Interface"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-xl"
            />
          </div>

        </div>
      </section>


      {/* ===== Accordion Features Section ===== */}
      {/* ===== Features of TallyPrime ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/images/any.webp"
              alt="TallyPrime Features"
              className="w-full max-w-xl h-auto object-cover "
            />
          </div>

          {/* Right Content */}
          <div className="p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8">
              Features of <span className="text-orange-600">TallyPrime</span>
            </h2>

            <div className="space-y-5">
              {features.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <h3
                    onClick={() => toggleFeature(item.id)}
                    className={`cursor-pointer text-xl font-semibold transition-colors duration-300 ${activeIndex === item.id
                      ? "text-blue-800"
                      : "text-blue-800 hover:text-orange-500"
                      }`}
                  >
                    {item.title}
                  </h3>

                  {activeIndex === item.id && (
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                      {item.content.map((point: string, index: number) => (
                        <li key={index} className="leading-relaxed">
                          {point}
                        </li>
                      ))}

                    </ul>

                  )}
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

    </div>

  );
}
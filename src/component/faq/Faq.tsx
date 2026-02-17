"use client";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useState } from "react";

const Faq = () => {
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const toggle1 = (index: number) => {
    setOpenIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggle2 = (index: number) => {
    setOpenIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Comprehensive Knowledge Base",
      answer:
        "Access a vast library of articles and tutorials covering everything from software installation to advanced features. Whether you’re a beginner or an experienced user, you’ll find the guidance you need.",
    },
    {
      question: "In-Depth E-books & Whitepapers",
      answer:
        "Download valuable e-books and whitepapers that delve into industry best practices, software usage tips, and business management strategies. Equip yourself with the knowledge to make informed decisions.",
    },
    {
      question: "Live Webinars & Training Sessions",
      answer:
        "Join our expert-led webinars and training sessions to enhance your skills. Participate in interactive sessions where you can ask questions and gain insights directly from our knowledgeable team.",
    },
    {
      question: "Expert Blog & Articles",
      answer:
        "Stay updated with the latest trends and insights in the software industry through our blog. Discover articles written by industry experts, covering topics that matter to your business.",
    },
  ];

  const faq = [
    {
      question: "Practical Tools & Calculators",
      answer:
        "Utilize our practical tools and calculators to assist with budgeting, inventory management, and financial analysis. These resources can help you streamline your processes and improve decision-making..",
    },
    {
      question: "Case Studies & Success Stories",
      answer:
        "Learn from real-world examples of how our clients have successfully implemented our software solutions. Discover the challenges they faced and the results they achieved, providing you with inspiration and practical insights.",
    },
    {
      question: "Community Forum",
      answer:
        "Engage with other users in our community forum. Share experiences, ask questions, and exchange tips with fellow Mabsol Infotech users. Leverage the collective knowledge of our community to enhance your understanding.",
    },
    {
      question: "Customer Support Resources",
      answer:
        "Access quick guides and troubleshooting articles that provide immediate solutions to common issues. Our customer support resources are designed to ensure you have a seamless experience with our products.",
    },
  ];

  return (
    <div className="lg:h-[90vh] h-full w-[100vw] px-4 lg:px-40 bg-white">
      <h1 className="text-5xl font-bold text-center w-full mb-4 underline text-gray-700  pt-10">
        FAQ
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-10">
        <Card
          styles={{ body: { padding: "10px" } }}
          className=" shadow-2xl"
        >
          {faqData.map((item, index) => (
            <div key={index} className="border-4 border-white cursor-pointer group">
              <div
                onClick={() => toggle1(index)}
                className=" bg-[#185e9a] flex justify-between items-center px-4 py-4"
              >
                <h1 style={{ fontFamily: "Montserrat, sans-serif" }} className="text-[16px]  text-white">
                  {item.question}
                </h1>
                {openIndex1 === index ? (
                  <MinusOutlined
                    className="text-xl !text-white fill-white rounded-full p-1 transition-transform duration-300 rotate-180"
                  />
                ) : (
                  <PlusOutlined
                    className="text-xl !text-white fill-white rounded-full p-1 transition-transform duration-300"
                  />
                )}

              </div>
              <div
                className={`transition-all duration-300 overflow-hidden bg-blue-100 px-6 ${openIndex1 === index ? "max-h-[1000px] py-4" : "max-h-0"
                  }`}
              >
                <p style={{ fontFamily: "Montserrat, sans-serif" }} className="text-gray-800">{item.answer}</p>
              </div>
            </div>
          ))}
        </Card>
        <Card
          styles={{ body: { padding: "10px" } }}
          className="shadow-2xl"
        >
          {faq.map((item, index) => (
            <div
              key={index}
              className="border-4 border-white cursor-pointer group"
            >
              <div
                onClick={() => toggle2(index)}
                className="bg-[#185e9a] flex justify-between items-center px-4 py-4"
              >
                <h1
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-lg text-white"
                >
                  {item.question}
                </h1>

                {openIndex2 === index ? (
                  <MinusOutlined
                    style={{ color: "#fff" }}
                    className="text-xl rounded-full p-1 transition-transform duration-300 rotate-180"
                  />
                ) : (
                  <PlusOutlined
                    style={{ color: "#fff" }}
                    className="text-xl rounded-full p-1 transition-transform duration-300"
                  />
                )}


              </div>

              <div
                className={`transition-all duration-300 overflow-hidden bg-blue-100 px-6 ${openIndex2 === index ? "max-h-[1000px] py-4" : "max-h-0"
                  }`}
              >
                <p
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-gray-800"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}

        </Card>
      </div>
    </div>
  );
};

export default Faq;

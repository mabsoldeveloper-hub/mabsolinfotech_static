import { Button, Card } from "antd";
import Link from "next/link";
import React from "react";

type Product = {
  title: string;
  price: string;
  para: string;
  img: string;
  link: string;
};

const productData: Product[] = [
  {
    title: "M R Reporting",
    price: "₹1,500.00",
    para: "M R Reporting is a powerful reporting solution that simplifies data analysis, provides real-time insights, and helps businesses track performance and make smarter decisions efficiently.",
    img: "product1.webp",
    link: "/reporting",
  },
  {
    title: "Tally",
    price: "₹22,500.00 – ₹67,500.00",
    para: "Tally is a powerful accounting software that simplifies financial management, streamlines invoicing, and provides real-time insights to help businesses manage operations efficiently.",
    img: "images/Tally.webp",
    link: "/tallys",
  },
  {
    title: "MARG ERP 9+",
    price: "₹10,300.00 – ₹26,000.00",
    para: "MARG ERP 9+ is a robust enterprise resource planning software that streamlines business operations, enhances productivity, and supports data-driven decision making.",
    img: "Bannner.webp",
    link: "/margErp",
  },
];

const OurProduct = () => {
  return (
<div className="py-5 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-20 bg-white">

  {/* Heading */}
  <div className="text-center mb-10 sm:mb-14">

    <h1 className="text-orange-500 text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
      Our Products
    </h1>

    <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-[#1f4e79] leading-tight">
      Explore Our Premium Solutions
    </h2>

    <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base max-w-md sm:max-w-xl mx-auto">
      Powerful software solutions to manage your business efficiently
    </p>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">

    {productData.map((product, index) => (
      <Card
        key={index}
        styles={{ body: { padding: 0 } }}
        className="group border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
      >

        {/* Image */}
        <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden bg-gray-100">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col px-4 sm:px-6 py-4 sm:py-6 flex-grow">

          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1f4e79] group-hover:text-[#185e9a] transition">
            {product.title}
          </h2>

          {/* <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {product.para}
          </p> */}

          <p className="text-orange-500 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
            {product.price}
          </p>

          {/* Button */}
          <div className="mt-auto pt-4 sm:pt-6">
            <Link href={product.link}>
              <Button
                type="primary"
                className="w-full !h-10 sm:!h-11 !rounded-lg sm:!rounded-xl !bg-[#1f4e79] !border-[#1f4e79] hover:!bg-[#163d5c] hover:!border-[#163d5c] !font-semibold sm:!font-bold !text-white transition text-sm sm:text-base"
              >
                View Details →
              </Button>
            </Link>
          </div>

        </div>

      </Card>
    ))}

  </div>
</div>
  );
};

export default OurProduct;
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import { RightOutlined, EyeOutlined } from "@ant-design/icons";

const softwareProducts = [
    {
        image: "/images/product.webp",
        title: "M R Reporting",
        subtitle: "M R Reporting",
        price: "₹1,500.00",
        url: "/reporting",
    },
    {
        image: "/images/Tally-gold.jpg",
        hoverImage: "/images/Tally-silver.jpg",
        title: "Tally ERP 9",
        subtitle: "Tally",
        price: "₹22,500.00 – ₹67,500.00",
        url: "/tallys",
    },
    {
        image: "/images/marg-basic.png",
        title: "MARG ERP 9+",
        subtitle: "MARG ERP 9+",
        price: "₹10,300.00 – ₹26,000.00",
        url: "/margErp",
    },
];

export default function SoftwareProductsPage() {
    return (
    <div className="bg-gray-50 w-full overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center text-center">
        
        <Image
          src="/images/product.jpg"
          alt="Software Products"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#185a9e]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Software Products by{" "}
            <span className="text-orange-400 block sm:inline">
              Mabsol Infotech
            </span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Mabsol Infotech proudly partners with top software providers like
            Marg, Tally, Busy, and Greyhr to offer robust business solutions.
          </p>
        </div>
      </section>

      {/* ================= NOTE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-orange-50 rounded-lg border-l-4 border-orange-600 p-4 sm:p-6 shadow-sm">
          
          <h3 className="text-orange-700 text-base sm:text-lg font-semibold mb-2">
            Important Note
          </h3>

          <p className="text-orange-600 text-sm sm:text-base leading-relaxed">
            The displayed price is the standard software price as per the official website.
          </p>

          <ul className="text-orange-600 text-sm sm:text-base mt-3 space-y-1 list-disc pl-5">
            <li>
              Customization, additional features, or local modifications will be charged separately.
            </li>
            <li>
              GST will be charged extra as per applicable tax laws.
            </li>
          </ul>
        </div>
      </div>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          
          {softwareProducts.map((product: any, idx: number) => (
            
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />

                {/* Hover Image */}
                {product.hoverImage && (
                  <Image
                    src={product.hoverImage}
                    alt={`${product.title} hover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-5 text-center">
                
                <Link href={product.url}>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                    {product.title}
                  </h2>
                </Link>

                <p className="text-gray-500 text-sm sm:text-base mb-3 line-clamp-2 flex-1">
                  {product.subtitle}
                </p>

                <p className="text-lg sm:text-xl font-bold text-[#185a9e] mb-4">
                  {product.price}
                </p>

                <Link href={product.url}>
                  <Button
                    type="primary"
                    size="large"
                    className="w-full !bg-[#185a9e] hover:!bg-[#144a82] rounded-lg"
                  >
                    Select Options
                  </Button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
    );
}

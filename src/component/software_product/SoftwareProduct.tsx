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
        image: "/images/tally-gold.jpg",
        hoverImage: "/images/tally-silver.jpg",
        title: "Tally ERP 9",
        subtitle: "Tally",
        price: "₹22,500.00 – ₹64,000.00",
        url: "/tallys",
    },
    {
        image: "/images/marg-basic.png",
        title: "MARG ERP 9+",
        subtitle: "MARG ERP 9+",
        price: "₹1,000.00 – ₹25,200.00",
        url: "/margErp",
    },
];

export default function SoftwareProductsPage() {
    return (
        <div className="bg-gray-50 ">
            {/* HERO */}
            <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center text-center">
                <Image
                    src="/images/product.jpg"
                    alt="Software Products"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#185a9e]/90" />

                <div className="relative z-10 max-w-5xl px-4 sm:px-6 text-center mx-auto mt-4 sm:mt-6 md:mt-8">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Software Products by{" "}
                        <span className="text-orange-400 block sm:inline">
                            Mabsol Infotech
                        </span>
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6">
                        Mabsol Infotech proudly partners with top software providers like
                        Marg, Tally, Busy, and Greyhr to offer robust business solutions.
                    </p>

                    <Link href="/" className="inline-flex justify-center">
                        <Button ghost size="large" className="w-full sm:w-auto">
                            <RightOutlined /> Home
                        </Button>
                    </Link>
                </div>

            </section>

            {/* PRODUCTS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {softwareProducts.map((product, idx) => (
                        <div
                            key={idx}
                            className="group overflow-hidden"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain"
                                    priority={idx === 0}
                                />

                                {/* HOVER IMAGE (ONLY TALLY) */}
                                {product.hoverImage && (
                                    <Image
                                        src={product.hoverImage}
                                        alt={`${product.title} hover`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                                    />
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="pt-5 sm:pt-6 text-center">
                                <Link href={product.url}>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                                        {product.title}
                                    </h2>
                                </Link>

                                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                                    {product.subtitle}
                                </p>


                                <p className="text-lg font-bold text-[#185a9e] mb-4">
                                    {product.price}
                                </p>

                                <Link href={product.url}>
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="w-full !bg-[#185a9e] hover:!bg-[#144a82]"
                                    >
                                        Select options
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

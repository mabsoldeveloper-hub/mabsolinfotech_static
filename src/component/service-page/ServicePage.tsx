"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";


const servicesData = [
    {
        title: "Website Development",
        img: "/images/webd.jpg",
        desc: "Website Development Services to Build Your Digital Identity. Our expert website development services are designed to help businesses establish a ...",
        path: "/website-development",
    },
    {
        title: "Accounting Software",
        img: "/images/accounting.jpg",
        desc: "Accounting Software Solutions to Streamline Your Financial Operations. Our accounting software solutions provide seamless business accounting, automated accounting, and payroll ...",
        path: "/accounting-software",
    },
    {
        title: "Payroll Software",
        img: "/images/payroll.jpg",
        desc: "Advanced Payroll Software for Efficient Salary and HR Management. Our advanced payroll software is designed to simplify and automate every ...",
        path: "/payroll-software",
    },
    {
        title: "ERP Software",
        img: "/images/erp.jpg",
        desc: "Smart ERP Software for Complete Business Management. Our powerful ERP software provides everything you need to manage your business efficiently...",
        path: "/erp-software",
    },
    {
        title: "SFA Software",
        img: "/images/sfa.jpg",
        desc: "Powerful SFA Software to Automate and Optimize Sales Operations. Our robust SFA software is designed to automate and streamline your ...",
        path: "/sfa-software",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-gray-50 ">
            <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center text-center">
                <Image
                    src="/images/servi.jpg"
                    alt="Services Background"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#185a9e]/90" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Mabsol Infotech{" "}
                        <span className="text-orange-500 block sm:inline">
                            IT Services
                        </span>
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                        Mabsol Infotech offers a range of IT services including Website
                        Development, Accounting Software, Payroll Software, ERP Software,
                        and SFA Software. Our solutions are customized to meet the unique
                        needs of businesses in various industries…
                    </p>

                    <Link href="/" className="inline-flex justify-center">
                        <Button ghost size="large" className="w-full sm:w-auto">
                            <RightOutlined /> Home
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden rounded-t-2xl">
                                <motion.div
                                    className="w-full h-full"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>


                            <div className="p-5 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                                    <Link
                                        href={service.path}
                                        className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {service.title}
                                    </Link>
                                </h2>


                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">

                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

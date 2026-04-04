"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Job {
    _id: string;
    title: string;
    company: string;
    location: string;
    experience: string;
    positions: number;
    qualification: string;
    jobType: string;
    timings: string;
    aboutUs: string;
    positionOverview: string;

    responsibilities: string[];
    requiredSkills: string[];
    preferredSkills: string[];
    whatWeOffer: string[];
    howToApply: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    expireAt: Date;
}
const CareerPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/jobs")
            .then(res => res.json())
            .then((data) => {
                // ✅ make sure we have an array
                if (Array.isArray(data)) {
                    setJobs(data);
                } else if (Array.isArray(data.jobs)) {
                    setJobs(data.jobs);
                } else {
                    console.error("Jobs API did not return an array", data);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const handleApply = (id: string) => {
        router.push(`/jobsApply/${id}`); // Navigate to job details page
    };

    return (
        <>
            <div className="w-full min-h-screen text-white overflow-hidden ">

                {/* Top Section */}
                <div
                    className="min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh]  flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/background2.jpeg')",
                        filter: "brightness(0.9)",
                    }}
                >

                    {/* Title */}
                    <h1 className="text-7xl font-bold text-white drop-shadow-md mt-4">Career</h1>

                    {/* Subtitle */}
                    <p className="text-3xl mt-3 text-center text-white">Our reinvention
                        starts with you.</p>
                </div>

                {/* Content Section */}
                <section className="w-full flex justify-center bg-white">
                    <div className="flex flex-col max-w-7xl  md:flex-row items-center justify-between px-15 md:px-15 py-15 !bg-white text-gray-800 relative gap-10">
                        {/* Left Text */}
                        <div className="md:w-1/2 space-y-4">
                            <h3 className="text-3xl font-bold text-[#185e9a]">
                                Career Opportunities at <span className="text-orange-600">Mabsol Infotech</span>
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#185e9a]">
                                Your Gateway to <span className="text-orange-600">Growth and Innovation</span>
                            </h2>
                            {/* Line */}
                            <div className="w-28 h-1 bg-gray-700 mt-4 mb-6 rounded-full"></div>
                            and creativity come together to create meaningful results.
                            <p className="text-gray-700 leading-relaxed text-[14px] md:text-[16px] text-justify">
                                Welcome to Mabsol Infotech, where passion meets purpose. We specialize in selling industry-leading software like Marg, Tally, Busy, MR Reporting, and Greythr. Our commitment to providing unparalleled customer support makes us a trusted partner for businesses of all sizes.<br />

                                At Mabsol Infotech, we believe our people are our most valuable asset. We provide an environment where your skills are nurtured, ideas are valued, and your career aspirations are turned into reality.<br />

                                If you’re ready to be part of a growing team that drives technological transformation for businesses, we’d love to hear from you!<br />

                                At Mabsol Infotech, we’re not just building careers—we’re shaping futures. Whether you’re passionate about technology, sales, or customer support, there’s a place for you here. Explore opportunities to grow with us and make an impact in the world of software solutions.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                            <img
                                src="/images/office-man.jpg"
                                alt="Office Man"
                                className="w-[700px] rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* choose section */}
                <section className="w-full flex justify-center bg-white">
                    <div className="max-w-7xl mx-5 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT → IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src="/images/career-points.png"
                                alt="Career Points"
                                className="w-full max-w-md md:max-w-full object-contain rounded-sm"
                            />
                        </div>

                        {/* RIGHT → CONTENT */}
                        <div className="bg-white">
                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#185e9a] leading-snug">
                                Why Choose a Career at{" "}
                                <span className="text-orange-600">Mabsol Infotech?</span>
                            </h2>

                            {/* Line */}
                            <div className="w-28 h-1 bg-gray-700 mt-4 mb-6 rounded-full"></div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed text-[14px] md:text-[16px] text-justify justify-center mb-4">
                                At Mabsol Infotech, we’re more than just a workplace—we’re a thriving
                                community of innovators, problem-solvers, and passionate professionals
                                dedicated to transforming businesses with cutting-edge software
                                solutions. We believe in fostering an environment where collaboration
                                and creativity come together to create meaningful results.
                                <br /><br />
                                When you join Mabsol Infotech, you’re not just stepping into a job—
                                you’re becoming part of a supportive family that celebrates diversity,
                                encourages continuous learning, and thrives on innovation. We provide
                                opportunities that challenge you, empower you, and help you achieve
                                your full potential. Here’s why choosing a career with us could be one
                                of the most rewarding decisions of your professional journey:
                            </p>
                        </div>

                    </div>
                </section>

                {/* job section */}
                <section className="w-full py-5 sm:py-8 md:py-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#185e9a] font-bold mb-8 text-left md:text-left">
                            Our Open Roles
                        </h2>

                        <div className="space-y-4">
                            {Array.isArray(jobs) && jobs.length > 0 ? (
                                jobs.map(job => (
                                    <div
                                        key={job._id}
                                        className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition"
                                    >
                                        <div>
                                            <p className="text-sm sm:text-base mb-2 font-semibold text-green-600 tracking-wide">
                                                OPEN ROLE
                                            </p>

                                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-2">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mt-3">
                                                <span>{job.jobType}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:mt-0">
                                            <button
                                                onClick={() => handleApply(job._id)}
                                                className="w-full md:w-auto bg-[#185e9a] hover:bg-blue-400 text-white px-5 py-2.5 rounded-sm text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition"
                                            >
                                                Apply Now <span>↗</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-10 text-center">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-3">
                                        No Job Openings Right Now
                                    </h3>

                                    <p className="text-gray-600 text-sm sm:text-base">
                                        Currently, there are no open positions available.
                                        <br />
                                        You can contact us for future opportunities.
                                    </p>

                                    <a
                                        href="/contact"
                                        className="inline-block mt-6 bg-[#185e9a] hover:bg-blue-400 text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium transition"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}

export default CareerPage
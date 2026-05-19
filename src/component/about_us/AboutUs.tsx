"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Card, Progress } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <div className="font-sans text-gray-700">
            {/* ================= HERO ================= */}
            <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center
            ">

                <Image
                    src="/images/about.jpg"
                    alt="About Us"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#185a9e]/80" />

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About<span className="text-orange-500"> Us</span> </h1>
                </div>
            </section>

            {/* ================= COMPANY ================= */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">
                        About <span className="text-orange-500">MABSOL Infotech Pvt. Ltd.</span>
                    </h2>

                    <div className="text-sm sm:text-base leading-relaxed font-medium text-justify space-y-4">
                        <p >
                            MABSOL Infotech Private Limited is the leading and reliable ERP software vendor, aiding various industries with cost-effective and efficient software solutions. We deal in ERP Software like Busy, Tally, MR Reporting, HR Expert, My Clinic & HIS ERP, Grey Tip, Hotel and Restaurant ERP Software, Website and Android/IOS App Development, CRM Management and many more, which helps with business operations like GST billing and filing, day-to-day calls, reporting processes, human resource management, email marketing, etc. Our services are not just limited to ERP software only.
                        </p>

                        <p>
                            We have spread ourselves to other services like web customization, software development as well as android app development. MABSOL centers itself on the idea of trust and ease of doing business. Our directors have been in the industry for 10+ years running now, which has helped them grow as professional experts in this space. The name of the company itself is sourced on the initials of the 2 directors: Anjani Kumar Pathak, Bhupendra Nath Chaubey
                        </p>

                        <p>
                            Their friendship goes back to their time in school and has stayed strong ever since. Working together as professional directors today and running a successful business, their bond of friendship and their compatibility has helped them grow personally and professionally. The understanding in-between these childhood friends has developed them into the director’s role today, managing over 2500 plus customer database and around 10,000+ user license software work from different fields.
                        </p>

                        <p>
                            MABSOL is a customer-friendly business, working diligently to provide you software solutions, so your business operates smoothly and grows with speed. This is why we keep your software current with the latest versions and continue to provide efficient backup support post-implementations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FOUNDERS ================= */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10">
                        📝 Mabsol <span className="text-orange-500">Infotech Founders</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 text-justify gap-8">
                        <FounderCard
                            img="/images/Anjani-Kumar.webp"
                            name="Anjani Kumar Pathak"
                            desc="Anjani Kumar Pathak’s visionary leadership has been the cornerstone of Mabsol Infotech’s success, guiding the company with innovation and foresight."
                        />

                        <FounderCard
                            img="/images/Bhupendra-Chaubey.webp"
                            name="Bhupendra Nath Chaubey"
                            desc="Bhupendra Nath Chaubey’s unwavering commitment and deep industry knowledge have been instrumental in shaping Mabsol Infotech into a trusted name in software solutions."
                        />
                    </div>
                </div>
            </section>

            {/* ================= PRODUCT ================= */}
            <section className="py-10 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-0 items-center">
                    {/* Left Side */}
                    <div>
                        <p className="text-orange-500 font-semibold mb-2"># ABOUT US</p>
                        <h2 className="text-3xl font-bold mb-10">
                            Product Development <span className="text-orange-500">for Better Business</span>
                        </h2>

                        <p className="mb-4">
                            We are empowered by the one of the best IT Team in the industry to provide the End-To-End customised software solutions to ours clients to meet their expectations with 100% satisfaction.
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-blue-800">
                            <li>Best Team of IT professional in one roof</li>
                            <li>20+ Years of Collective Team Experience</li>
                            <li>2000+ Happy Deliveries</li>
                            <li>4000+ Happy & Satisfied Clients</li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-xl w-full h-[250px] mb-4">
                            <motion.div
                                className="w-full h-full"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <Image
                                    src="/images/first1.jpg"
                                    alt="Product"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>
                        </div>

                        <Card
                            variant="borderless"
                            className="rounded-xl shadow-lg !bg-[#185a9e] w-full"
                        >
                            <p className="text-sm font-medium text-white">
                                Empowering Business with Innovative Software Solutions
                            </p>
                            <p className="text-sm text-white mt-1">
                                Unlock Potential with Advanced Business Software
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE DO ================= */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="overflow-hidden rounded-xl w-full max-w-[600px] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] mx-auto">
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/wedo.jpg"
                                alt="What we do"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover rounded-xl shadow-md"
                            />
                        </motion.div>
                    </div>


                    <div>
                        <h2 className="text-3xl font-bold mb-10">
                            What <span className="text-orange-500">We Do</span>
                        </h2>

                        <p className="mb-6 text-md">
                            At Mabsol Infotech, we provide innovative software solutions designed to enhance business operations and drive success...
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-blue-800 mb-6">
                            <li>Simplify financial management with Tally's comprehensive accounting features.</li>
                            <li>Optimize stock control and streamline supply chain operations with Marg software.</li>
                            <li>Integrate accounting, inventory, and more with Busy for a unified business management solution.</li>
                            <li>Receive expert guidance and seamless software implementation tailored to your needs.</li>
                        </ul>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <ProgressBlock label="Accounting Solutions" percent={90} />
                            <ProgressBlock label="Inventory Management" percent={95} />
                            <ProgressBlock label="Business Management" percent={92} />
                            <ProgressBlock label="Data Accuracy" percent={96} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-12 md:py-16 bg-[#185a9e] text-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center text-justify">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Join Us on Your Journey to Success
                        </h2>

                        <p className="mb-6 ">
                            Discover how Mabsol Infotech can transform your business operations with our expert software solutions. Whether you’re looking to streamline accounting, manage inventory, or enhance overall business management, we’re here to help you achieve your goals. Contact us today to learn more and get started on your path to greater efficiency and success.
                        </p>

                        <Link href="/contact">
                            <Button type="primary" size="large">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-xl w-full max-w-[600px] h-[400px] mx-auto">
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/join.jpg"
                                alt="Join Us"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* our benefit section */}
            <section className="py-10 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                    <p className="text-orange-500 text-lg font-bold mb-2"># OUR BENEFITS</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        We Deal With Aspects of Professional IT Services
                    </h2>
                    <p className="text-gray-700 text-md max-w-3xl mx-auto mb-12">
                        Our commitment towards delivering 100% satisfaction to our clients makes us the best choice to be your partner, adding technical wings to your business with experience & expertise.
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">
                        <BenefitCard
                            icon="💻"
                            title="Digital Experience"
                            points={[
                                "User-Focused Design: Creating intuitive, engaging interfaces.",
                                "Latest Tech: Using cutting-edge tools for innovation.",
                                "Smooth Integration: Seamlessly blending with existing systems.",
                            ]}
                        />
                        <BenefitCard
                            icon="📈"
                            title="Business Planning"
                            points={[
                                "Strategic Insight: Aligning goals with market trends.",
                                "Custom Solutions: Tailored strategies for growth.",
                                "Risk Control: Proactive measures for continuity.",
                            ]}
                        />
                        <BenefitCard
                            icon="📱"
                            title="App Development"
                            points={[
                                "Custom Apps: Tailored to your business needs.",
                                "Cross-Platform: Seamless performance on all devices.",
                                "Scalable Design: Apps that grow with your business.",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= SUCCESS ================= */}
            < section className="py-10 bg-gray-50" >
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="overflow-hidden rounded-xl w-full max-w-[600px] h-[400px] mx-auto">
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/Success.jpg"
                                alt="Success"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover rounded-xl shadow-md"
                            />
                        </motion.div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-10">
                            We Increasing <span className="text-orange-500">Business Success With Technology</span>
                        </h2>

                        <p className="mb-6">
                            We have spread ourselves to other services along with product reseller, like Website, Software Development as well as Android App Development
                        </p>

                        <ProgressBlock label="Pharmacy & Accounting Software" percent={94} />
                        <ProgressBlock label="Payroll & Management Software" percent={90} />
                        <ProgressBlock label="Website & Software Development" percent={99} />
                        <ProgressBlock label="Technical Support & Helpdesk" percent={99.99} />
                    </div>
                </div>
            </section >


           
        </div >
    );
}

/* ================= COMPONENTS ================= */
function FounderCard({
    img,
    name,
    desc,
}: {
    img: string;
    name: string;
    desc: string;
}) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="overflow-hidden w-full max-w-[400px]  rounded-xl mb-4">
                <motion.img
                    src={img}
                    alt={name}
                    className="w-full "
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
            <h3 className="text-xl font-semibold text-[#0b3a74] mb-2">{name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center  md:text-left  max-w-[400px]">
                {desc}
            </p>
        </div>
    );
}
/* ================= COMPONENTS ================= */
function BenefitCard({
    icon,
    title,
    points,
}: {
    icon: string;
    title: string;
    points: string[];
}) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  ">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{title}</h3>
            <ul className="text-gray-700 text-sm list-disc list-outside space-y-1 text-left">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

        </div>
    );
}

function ProgressBlock({
    label,
    percent,
}: {
    label: string;
    percent: number;
}) {
    return (
        <div>
            <div className="flex justify-between text-sm font-medium mb-2">
                <span>{label}</span>
                <span>{percent}%</span>
            </div>

            <Progress
                percent={percent}
                showInfo={false}
                strokeColor="#185a9a"
                size="default"
                className="!h-full rounded-full"
            />
        </div>
    );


}

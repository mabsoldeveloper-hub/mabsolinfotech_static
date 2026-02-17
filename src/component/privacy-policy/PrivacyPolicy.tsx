"use client";

import React from "react";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title } = Typography;

const sections = [
    {
        id: "Who_we_are",
        title: "Who we are",
        content: (
            <>
                Our website address is: <b>https://mabsolinfotech.com</b>. We are
                committed to protecting your privacy and ensuring the security of your
                personal data.
            </>
        ),
    },
    {
        id: "Comments",
        title: "Data We Collect",
        content: (
            <>
                <h3 className="text-xl font-semibold text-[#F97316] mb-3">Comments</h3>
                <p>
                    When visitors leave comments on our site, we collect the data provided
                    in the comments form, along with the visitor’s IP address and browser
                    user agent string to help with spam detection. An anonymized string
                    created from your email address (a hash) may be sent to the Gravatar
                    service to check if you are using it. You can view the Gravatar
                    service privacy policy here: https://mabsolinfotech.com Once your
                    comment is approved, your profile picture (if available) will be
                    visible to the public in the context of your comment.
                </p>
            </>
        ),
    },
    {
        id: "Media",
        title: "Media",
        content: (
            <>
                If you upload images to the website, avoid uploading images containing
                embedded location data (EXIF GPS), as visitors to the site can download
                and extract this data.
            </>
        ),
    },
    {
        id: "Cookies",
        title: "Cookies",
        content: (
            <>
                If you leave a comment on our site, you can opt to save your name,
                email, and website in cookies for your convenience. These cookies will
                last for one year.
                <br />
                When you visit our login page, a temporary cookie is set to check if
                your browser accepts cookies. This cookie does not contain personal data
                and is deleted when you close your browser.
                <br />
                Login cookies last for two days, while screen preferences cookies last
                for one year. If you select “Remember Me,” your login persists for two
                weeks. Logging out removes login cookies.
                <br />
                If you edit or publish an article, a cookie is stored containing the
                post ID of the edited article. This cookie expires after one day.
            </>
        ),
    },
    {
        id: "Embedded_content_from_other_websites",
        title: "Embedded content from other websites",
        content: (
            <>
                Articles on our website may include embedded content (e.g., videos,
                images, or articles) from other websites. This embedded content behaves
                the same as if you visited the external website directly. These websites
                may collect data, use cookies, and track your interactions, especially
                if you are logged into their platform.
            </>
        ),
    },
    {
        id: "How_We_Use_and_Share_Your_Data",
        title: "How We Use and Share Your Data",
        content: (
            <>
                <h3 className="text-xl font-semibold text-[#F97316] mb-3">
                    Data Sharing
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell your personal data to third parties. However, if you
                    request a password reset, your IP address will be included in the
                    reset email. Visitor comments may also be checked through automated
                    spam detection services.
                </p>
                <h3 className="text-xl font-semibold text-[#F97316] mb-3">
                    Data Retention
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Comments: Comments and their metadata are retained indefinitely to
                    recognize and approve follow-up comments without requiring moderation.
                    Registered Users: For users who register on our website, we store the
                    personal information provided in their user profiles. Registered users
                    can view, edit, or delete their data at any time, except for their
                    usernames. Website administrators also have access to this
                    information.
                </p>
            </>
        ),
    },

    {
        id: "Your_Rights",
        title: "Your Rights",
        content: (
            <>
                If you have an account or have left comments on our site, you can
                request an exported file of the personal data we hold, including any
                data provided to us. You can also request the deletion of your personal
                data, except for information we are required to keep for administrative,
                legal, or security purposes.
            </>
        ),
    },
    {
        id: "Data_Protection_and_Breach_Procedures",
        title: "Data Protection & Breach Procedures",
        content: (
            <>
                We take appropriate security measures to protect your data from
                unauthorized access, alteration, or disclosure. In the event of a data
                breach, we have procedures in place to identify and mitigate the breach
                while notifying affected parties and complying with regulatory
                requirements.
            </>
        ),
    },
    {
        id: "Third-Party_Data",
        title: "Third-Party Data",
        content: (
            <>
                We may receive data from third-party services (e.g., payment processors
                or analytics tools) to enhance our services. These services are required
                to comply with applicable data protection regulations.
            </>
        ),
    },
    {
        id: "Automated_Decision-Making",
        title: "Automated Decision-Making",
        content: (
            <>
                We do not engage in automated decision-making or profiling based on your
                data..
            </>
        ),
    },
    {
        id: "Contact_Information",
        title: "Contact Information",
        content: (
            <>
                For any privacy-related concerns or inquiries, please contact us at:
                <br />
                <strong>Email: </strong>
                <a
                    href="mailto:mabsolinfotech@gmail.com"
                    className="text-blue-600 underline"
                >
                    mabsolinfotech@gmail.com
                </a>
                <br />
                <strong>Address:</strong> SCO-76, 2nd Floor, Near Railway Crossing,
                Shree Ram Atta Chakki, Ekta Vihar, Sector 19, Panchkula, Haryana 134113,
                India.
            </>
        ),
    },
];

const PrivacyPolicyPage = () => {
    const router = useRouter();

    return (
        <main
            className="min-h-screen w-full bg-gray-50"
            style={{ backgroundImage: "url('/base-1.png')" }}
        >
            <header className="relative w-full h-[180px] 
             sm:h-[220px] 
             md:h-[260px] 
             lg:h-[300px] text-white flex items-center justify-center overflow-hidden">
                <img
                    src="/images/privacy.jpg"
                    alt="Privacy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/80 to-[#004AAD]/75" />

                <div className="relative z-10 text-center px-6">
                    <Title className="!text-white !font-bold drop-shadow-lg
                   !text-3xl 
                    sm:!text-4xl 
                    md:!text-5xl 
                    lg:!text-6xl">

                        Privacy <span className="text-orange-500 block sm:inline">Policy</span>
                    </Title>

                    <div className="mt-10">
                        <Link
                            href="/"
                            className="bg-white/20 text-white px-6 py-2 lg:px-10 lg:py-4 font-semibold shadow hover:bg-[#185e9a] transition"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </header>
            <div className="w-full mx-auto  max-w-7xl 
             mx-auto 
             px-4 
             sm:px-6 
             lg:px-8 
             py-12 
             md:py-20 
            space-y-10 
             md:space-y-12py-12 md:py-20 space-y-10 md:space-y-12">
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="
                      bg-white 
                        p-4 
                        sm:p-6 
                        md:p-8 
                        rounded-xl 
                        shadow-md 
                        scroll-mt-24
                           "

                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-[#1a3d7c] mb-3 md:mb-4">
                            {section.title}
                        </h2>

                        <div className="text-gray-700 leading-relaxed   text-sm 
                     sm:text-base 
                      md:text-lg">
                            {section.content}
                        </div>
                    </section>
                ))}
            </div>
        </main>

    );
};

export default PrivacyPolicyPage;

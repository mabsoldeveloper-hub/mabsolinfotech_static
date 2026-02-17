"use client";
import Image from "next/image";
import Link from "next/link";

export default function GreytHRPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
  
       
      {/* Top Section */}
<div
  className="
    min-h-[300px] md:h-[60vh]
    flex flex-col justify-center items-center
    bg-cover bg-center
    text-center
    px-4
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/MR-report.jpg')",
  }}
>
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white drop-shadow-md mt-2">
    Make Quick Work of Hard Work
  </h1>

  {/* Subtitle */}
  <p className="text-xs sm:text-sm md:text-lg mt-2 text-white max-w-xl">
    Get rid of repetitive HR tasks and manual spreadsheets. Automate,
    centralize, and empower employees with modern HRMS.
  </p>
</div>
      {/* ===== FEATURES SECTION ===== */}
<section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 text-center">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3 text-[#185e9a]">
    Full-Suite HRMS for{" "}
    <span className="text-orange-500">Indian Businesses</span>
  </h2>

  {/* Subheading */}
  <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
    Recruit, Onboard, Engage, Pay, Appraise, Retain and Retire Employees.
    Run your entire people ops from one platform.
  </p>

  {/* Features Grid */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        icon: "/images/automation.webp",
        title: "Automation",
        text: "Eliminate repetitive, time-consuming HR tasks to boost productivity.",
      },
      {
        icon: "/images/database.svg",
        title: "Centralised Employee Database",
        text: "Remove duplication and maintain consistent employee information.",
      },
      {
        icon: "/images/selfservice.png",
        title: "Employee Self Service",
        text: "Give employees the tools to manage their own HR information easily.",
      },
      {
        icon: "/images/chatbot.png",
        title: "Bella – Smart Chatbot",
        text: "AI-powered HR assistant for quick query resolution and better engagement.",
      },
      {
        icon: "/images/payroll.webp",
        title: "Payroll Automation",
        text: "Ensure fast, accurate payroll processing with complete compliance.",
      },
      {
        icon: "/images/reports.png",
        title: "Advanced Reports",
        text: "150+ admin reports for leave, attendance, payroll, MIS, and more.",
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
      >
        {/* Icon */}
        <div className="flex justify-center mb-3">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={40}
            height={40}
            className="sm:w-[60px] sm:h-[60px]"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-lg font-semibold text-blue-700 mb-1">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600">
          {feature.text}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ===== STATS SECTION ===== */}
      <section
        className="relative text-white py-8 overflow-hidden bg-fixed bg-center bg-cover">

        {/* Optional faint pattern overlay for texture */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-cover opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#185e9a]">
    Trusted by Businesses <span className="text-orange-500">Across India</span>
  </h2>

  {/*  MOBILE ME BHI 3 COLUMN */}
  <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
    {[
      { value: "250+", label: "Cities", icon: "🌆" },
      { value: "23K+", label: "Companies", icon: "🏢" },
      { value: "23L+", label: "Users", icon: "👨‍💼" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="
          backdrop-blur-md
          p-3 sm:p-6 md:p-8
          rounded-xl sm:rounded-2xl
          shadow-lg
          bg-[#185e9a]
          text-white
          hover:bg-white/20
          hover:text-[#185e9a]
          transition-all
          hover:-translate-y-2
          duration-300
          group
        "
      >
        <div className="text-2xl sm:text-4xl mb-1 sm:mb-3">
          {item.icon}
        </div>

        <h3 className="text-lg sm:text-3xl md:text-5xl font-bold mb-1 group-hover:text-[#185e9a]">
          {item.value}
        </h3>

        <p className="text-xs sm:text-base opacity-90">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>

      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="max-w-7xl mx-auto py-8 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-[#185e9a]">
          Modern HR and Payroll are Complex —<span className="!text-orange-500">We Simplify It</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "You don’t have an HRMS, and running HR ops on Sheets?",
              desc: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave and attendance",
            },
            {
              title:
                "Your payroll solution is unstable, requires hours of manual work?",
              desc: "Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error.",
            },
            {
              title:
                "Most HR and payroll tasks are manual, clerical, and take hours to complete?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management.",
            },
            {
              title:
                "You’re still using old ways to capture and track leaves and attendance?",
              desc: "Give access to the best-in-category leave management solution for efficient leave management.",
            },
            {
              title:
                "You’re still using old ways to capture and track leaves and attendance?",
              desc: "150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare and State-level Policies.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#185e9a] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

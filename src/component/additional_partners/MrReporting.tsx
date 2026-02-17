"use client";
import Image from "next/image";
import Link from "next/link";

export default function MrReporting() {
  return (
    <div className="bg-gray-50 text-gray-800 text-center">
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
          MR Reporting Software
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-lg mt-2 text-white max-w-xl">
          Empowering Pharma Businesses with Smart Market Research & Real-Time Insights
        </p>
      </div>


      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className=" text-2xl sm:text-3xl md:text-5xl
        font-bold text-[#185e9a]
        leading-snug">
            What is <span className="text-orange-500">MR Reporting?</span>
          </h2>
          <p className="text-lg text-gray-600 justify-center text-justify leading-relaxed">
            MR (Market Research) reporting software refers to software
            specifically designed for the market research industry. It provides a
            platform for managing and analyzing market research data and
            generating reports based on that data. The software typically includes
            tools for data collection, such as survey design and distribution, as
            well as data analysis and visualization tools, such as charts, graphs,
            and tables.
          </p>
          <p className="text-lg text-gray-600 justify-center text-justify leading-relaxed">
            Overall, MR reporting software is an essential tool for businesses
            that rely on market research to make informed decisions about their
            products, services, and target markets.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/mr-head.png"
            alt="MR Reporting Software"
            className="w-[600px]"
          />
        </div>
      </div>

      {/* ====== Pharma CRM Section ====== */}
      <section className="bg-blue-50 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ===== Left Image ===== */}
          <div className="flex justify-center">
            <Image
              src="/images/background.jpg" // apni image ka path
              alt="MR Pharma CRM Software"
              width={480}
              height={420}
              className="object-contain"
              priority
            />
          </div>

          {/* ===== Right Content ===== */}
          <div>
            <h2 className="text-4xl sm:text-3xl md:text-5xl font-semibold mb-4 text-[#185e9a]">
              MR – Pharma CRM Software{" "}
              <span className="text-orange-500">(Simple & Human-Centric)</span>
            </h2>

            <p className="leading-relaxed text-justify text-gray-700">
              MRR is simple, easy-to-use Pharma CRM software that does not require
              any specific computer knowledge. Anyone familiar with basic computer
              applications can easily file their{" "}
              <strong>Daily Call Reports (DCR)</strong> and instantly send them to
              the company via the Internet — saving courier costs and time.
            </p>

            <p className="leading-relaxed text-justify mt-4 text-gray-700">
              Managers can assign tasks and delegate responsibilities in
              real-time. The DCRs filled by sales representatives are
              automatically updated in the company’s management database,
              accessible both online and offline. This automation enhances
              efficiency, transparency, and reliability in the marketing process.
            </p>

            <p className="leading-relaxed mt-4 font-medium text-gray-800">
              MRR saves valuable resources —{" "}
              <strong className="text-orange-500">Time, Money, and Effort</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* ====== Features Section ====== */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-semibold mb-10 text-[#185e9a] text-center">
          Outstanding Features of{" "}
          <span className="text-orange-500">MR Reporting Software</span>
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-700 text-justify leading-relaxed">
          <li>Simple and user-friendly interface that saves time, cost, and paperwork.</li>
          <li>Android-based mobile application with accurate GPS location tracking.</li>
          <li>Doctor, chemist, and route visits tracked and displayed on maps.</li>
          <li>Mobile app works seamlessly even without an active internet connection.</li>
          <li>E-Detailing module to reduce the cost of printing visual aids.</li>
          <li>Daily Call Reports (DCR) can be submitted anytime, from anywhere.</li>
          <li>Real-time tracking and status updates for sample and gift distribution.</li>
          <li>Automatic generation of monthly expense reports.</li>
          <li>Sales data capturing with advanced analysis capabilities.</li>
          <li>Consolidated stock and sales reports for managers and administrators.</li>
          <li>Seamless integration with MR-KnowIT and Pharma ERP systems.</li>
          <li>Approval workflow for DCRs, expenses, leaves, and other requests.</li>
          <li>Built-in internal mailing system—no email ID required.</li>
          <li>Doctor and chemist visit analysis with actionable insights.</li>
          <li>Automatic calculation of target vs primary vs secondary sales.</li>
          <li>Doctor calls, product detailing, samples, and gift data captured in a single flow.</li>

        </ul>
      </section>

    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  CalendarCheck,
  Activity,
  Pill,
  Shield,
  Users,
  FileText,
  Cpu,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const ClinicManagement = () => {
  const highlights = [
    { icon: <Shield />, title: "Secure & Reliable", desc: "HIPAA-compliant data security with regular cloud backups." },
    { icon: <Cloud />, title: "Cloud or On-Premise", desc: "Deploy based on your hospital’s IT infrastructure." },
    { icon: <Users />, title: "Multi-User Access", desc: "Role-based access for doctors, staff, and admins." },
    { icon: <Activity />, title: "Real-Time Reports", desc: "Access instant data insights and analytics dashboards." },
    { icon: <Cpu />, title: "Seamless Integrations", desc: "Connect with EHR, LIS, and other hospital systems." },
    { icon: <FileText />, title: "Paperless Operations", desc: "Digitize every hospital process efficiently." },
  ];

  const modules = [
    { icon: "🏥", title: "Front Office", desc: "Manage patient registrations, appointments, and notifications." },
    { icon: "🩺", title: "Out Patient (OPD)", desc: "Handle registration, billing, and electronic prescriptions." },
    { icon: "🛏️", title: "In Patient (IPD)", desc: "Admission, discharge, transfer, and room management." },
    { icon: "🧪", title: "Laboratory", desc: "Test booking, lab inventory, and automated test reports." },
    { icon: "📊", title: "Radiology", desc: "Schedule and manage X-Ray, MRI, CT Scan reports." },
    { icon: "💊", title: "Pharmacy", desc: "Medicine stock, expiry tracking, and billing automation." },
    { icon: "🩸", title: "Blood Bank", desc: "Donor data, component stock, and donation camp tracking." },
    { icon: "🏗️", title: "OT & Ward", desc: "Surgery scheduling, notes, and nursing coordination." },
    { icon: "📦", title: "Inventory", desc: "Procurement, consumables, and asset management." },
    { icon: "👨‍⚕️", title: "Doctor Accounting", desc: "Automate consultant billing and revenue sharing." },
    { icon: "📊", title: "MIS Dashboard", desc: "Track key metrics with live analytics and reports." },
    { icon: "🔐", title: "User Management", desc: "Role-based access control for enhanced security." },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#0b3a74] to-[#185e9a] text-white overflow-hidden">
      {/*Hero Section */}
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
      "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/images/our2.webp')",
  }}
>
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white drop-shadow-md mt-2">
    Clinic Management
  </h1>

  {/* Subtitle */}
  <p className="text-xs sm:text-sm md:text-lg mt-2 text-white max-w-xl">
    Streamline Your Clinic Operations with Ease
  </p>
</div>


      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white text-gray-800 relative">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#185e9a]">
            What is <span className="text-orange-500">Clinic Management?</span></h2>
          <p className="text-md text-gray-600 justify-center text-justify leading-relaxed">
            Clinic Management Software is designed to efficiently manage every aspect of daily healthcare operations —
            from patient registration, appointment scheduling, and electronic medical records to billing, invoicing,
            and comprehensive reports. The system streamlines routine administrative tasks, reduces dependency on
            manual paperwork, and minimizes the chances of human error.
          </p>

          <p className="text-md text-gray-600 justify-center text-justify leading-relaxed mt-3">
            By providing real-time access to patient data and seamless integration across departments, the software
            enables clinics to improve operational efficiency, enhance staff productivity, and deliver a smoother,
            more personalized patient experience. With automated workflows, secure data handling, and insightful
            analytics, clinics can make informed decisions, optimize resources, and focus more on delivering
            quality patient care.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/clinic.png"
            alt="clinic management"
            className="w-[500px]"
          />
        </div>
      </div>

      {/* Why Choose Section */}
     <div className="bg-[#f9fbff] py-10 sm:py-14 md:py-20 text-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
    
    {/* Heading */}
    <h2 className="
      text-xl sm:text-2xl md:text-4xl
      font-bold
      mb-6 sm:mb-10
      text-[#185e9a]
    ">
      Why Choose <span className="text-orange-600">EGERP Informatics</span>?
    </h2>

    {/* Grid */}
    <div className="
      grid grid-cols-2
      md:grid-cols-3
      gap-4 sm:gap-6 md:gap-8
    ">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="
            bg-white
            p-4 sm:p-5 md:p-6
            rounded-xl sm:rounded-2xl
            shadow-md hover:shadow-xl
            transition
          "
        >
          <div className="
            text-blue-600
            text-2xl sm:text-3xl md:text-4xl
            mb-2 sm:mb-3
            flex justify-center
          ">
            {item.icon}
          </div>

          <h3 className="
            text-sm sm:text-base md:text-xl
            font-semibold
            mb-1 sm:mb-2
          ">
            {item.title}
          </h3>

          <p className="
            text-xs sm:text-sm md:text-base
            text-gray-600
            leading-relaxed
          ">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* Modules Section */}
     <div className="bg-white py-10 sm:py-14 md:py-20 text-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
    
    {/* Heading */}
    <h2 className="
      text-xl sm:text-2xl md:text-4xl
      font-bold text-[#185e9a]
      mb-6 sm:mb-10
    ">
      Core Modules We Offer
    </h2>

    {/* Grid */}
    <div className="
      grid grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4 sm:gap-6
    ">
      {modules.map((mod, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className="
            border border-blue-100
            bg-blue-50
            p-4 sm:p-5
            rounded-xl sm:rounded-2xl
            shadow-md hover:shadow-xl
            hover:bg-blue-100
            transition
          "
        >
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
            {mod.icon}
          </div>

          <h3 className="
            text-sm sm:text-base md:text-lg
            font-semibold text-[#185e9a]
          ">
            {mod.title}
          </h3>

          <p className="
            text-xs sm:text-sm md:text-base
            text-gray-600
            mt-1 sm:mt-2
            leading-relaxed
          ">
            {mod.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


    </div>
  );
};

export default ClinicManagement;

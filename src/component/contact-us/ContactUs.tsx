"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTime, MdPhoneInTalk } from "react-icons/md";

/* ── Scroll reveal hook ── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Single info row inside a card ── */
function InfoRow({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-[13px] sm:text-sm text-slate-600
        hover:text-[#0b3a74] font-medium transition-colors duration-200 group/row"
    >
      <span
        className="w-1 h-1 rounded-full bg-slate-300
          group-hover/row:bg-[#0b3a74] transition-colors duration-200 flex-shrink-0"
      />
      {children}
    </a>
  );
}

/* ── Reusable card ── */
function ContactCard({
  icon,
  iconBg,
  iconColor,
  accentColor,
  label,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-white rounded-2xl border border-slate-100 overflow-hidden
        flex flex-col
        shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.04)]
        hover:shadow-[0_8px_40px_rgba(11,58,116,0.13)]
        hover:-translate-y-1 transition-all duration-300 ease-out
        ${className}`}
    >
      {/* Glowing top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300
          opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: accentColor }}
      />

      {/* Left edge accent */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full
          opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ backgroundColor: accentColor }}
      />

      <div className="p-5 sm:p-6 flex flex-col flex-1">

        {/* Header row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center
              text-lg flex-shrink-0 transition-transform duration-300
              group-hover:scale-105"
            style={{ backgroundColor: iconBg, color: iconColor }}
          >
            {icon}
          </div>
          <h3 className="font-bold text-[13px] sm:text-[14px] text-[#0b3a74] tracking-wide">
            {label}
          </h3>
        </div>

        {/* Divider bar */}
        <div className="h-[2px] bg-slate-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              backgroundColor: accentColor,
              width: hovered ? "100%" : "20px",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1.5">{children}</div>
      </div>
    </div>
  );
}

/* ── MAIN ── */
export default function ContactUs() {
  const { ref: secRef, inView: secIn } = useInView(0.08);
  const { ref: mapRef, inView: mapIn } = useInView(0.08);

  const now = new Date();

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const currentTime = currentHour * 60 + currentMinute;

  const openingTime = 10 * 60; // 10:00 AM
  const closingTime = 19 * 60; // 7:00 PM

  const day = now.getDay();

  const isSunday = day === 0;

  const isOpen =
    !isSunday &&
    currentTime >= openingTime &&
    currentTime <= closingTime;


  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f4f7fd] py-5 sm:py-10 lg:py-15"
    >
      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c8d3e8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blue glow top-right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full
          bg-blue-100 blur-3xl opacity-60 pointer-events-none"
      />

      {/* Orange glow bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full
          bg-orange-50 blur-3xl opacity-70 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ════ HEADING ════ */}
        <div
          ref={secRef}
          style={{
            opacity: secIn ? 1 : 0,
            transform: secIn ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
          className="mb-8 sm:mb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 rounded-full bg-[#0b3a74]/25" />
            <span className="text-[10px] font-black tracking-[4px] uppercase text-[#0b3a74]/50">
              Get In Touch
            </span>
          </div>

          {/*Title */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b3a74] tracking-tight">
              Contact <span className="text-orange-500">Us</span>
            </h2>
          </div>

          {/* Accent dots */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="h-[3px] w-10 rounded-full bg-[#0b3a74]" />
            <div className="h-[3px] w-3 rounded-full bg-[#0b3a74]/35" />
            <div className="h-[3px] w-1.5 rounded-full bg-[#0b3a74]/15" />
          </div>

          <p className="text-slate-400 text-sm sm:text-[15px] max-w-md leading-relaxed">
            We&apos;re here to help with your business needs. Reach out for
            support, queries, or collaboration.
          </p>
        </div>

        {/* ════ MAIN GRID ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-stretch">

          {/* ── LEFT: Cards ── */}
          <div
            style={{
              opacity: secIn ? 1 : 0,
              transform: secIn ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.7s 0.1s ease, transform 0.7s 0.1s ease",
            }}
            className="flex flex-col gap-4"
          >

            {/* ROW 1 — Phone (big) + Telephone+Email stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Phone — tall card */}
              <ContactCard
                icon={<FaPhoneAlt />}
                iconBg="#f0fdf4"
                iconColor="#16a34a"
                accentColor="#16a34a"
                label="Mobile Numbers"
                className="row-span-1"
              >
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    ["9888914287", "tel:9888914287"],
                    ["9888914283", "tel:9888914283"],
                    ["9356042496", "tel:9356042496"],
                    ["9357815181", "tel:9357815181"],
                    ["9855605181", "tel:9855605181"],
                    ["9855145181", "tel:9855145181"],
                    ["9876675181", "tel:9876675181"],
                    ["9023415181", "tel:9023415181"],
                  ].map(([num, href]) => (
                    <InfoRow key={num} href={href}>
                      {num}
                    </InfoRow>
                  ))}
                </div>
              </ContactCard>

              {/* Right column: Telephone + Email stacked */}
              <div className="flex flex-col gap-4">

                {/* Telephone */}
                <ContactCard
                  icon={<MdPhoneInTalk className="text-xl" />}
                  iconBg="#f0f9ff"
                  iconColor="#0369a1"
                  accentColor="#0369a1"
                  label="Telephone"
                >
                  <InfoRow href="tel:01722575181">0172-2575181</InfoRow>
                </ContactCard>

                {/* Email */}
                <ContactCard
                  icon={<AiOutlineMail className="text-xl" />}
                  iconBg="#fef2f2"
                  iconColor="#dc2626"
                  accentColor="#dc2626"
                  label="Email Address"
                >
                  <InfoRow href="mailto:support@mabsolinfotech.com">
                    support@mabsolinfotech.com
                  </InfoRow>
                  <InfoRow href="mailto:mabsolinfotech@gmail.com">
                    mabsolinfotech@gmail.com
                  </InfoRow>

                </ContactCard>

              </div>
            </div>

            {/* ROW 2 — Address + Working Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Address */}
              <ContactCard
                icon={<IoLocationSharp className="text-xl" />}
                iconBg="#f5f3ff"
                iconColor="#7c3aed"
                accentColor="#7c3aed"
                label="Our Address"
              >
                <Link
                  href="https://www.google.com/maps/place/Mabsol+Infotech+Pvt.Ltd./@30.668727,76.834759,17z"
                  target="_blank"
                  className="flex items-start gap-2 group/addr"
                >
                  <span
                    className="mt-[5px] w-1 h-1 rounded-full bg-slate-300 flex-shrink-0
                      group-hover/addr:bg-[#7c3aed] transition-colors"
                  />
                  <span
                    className="text-[13px] sm:text-sm text-slate-600
                      group-hover/addr:text-[#7c3aed] transition-colors leading-relaxed"
                  >
                    SCO-76, 2nd Floor, Sector 19,
                    <br />
                    Panchkula, Haryana – 134113
                  </span>
                </Link>
              </ContactCard>

              {/* Working Hours */}

              <ContactCard
                icon={<MdOutlineAccessTime className="text-xl" />}
                iconBg="#fff7ed"
                iconColor="#f97316"
                accentColor="#f97316"
                label="Working Hours"
              >
                <div className="space-y-3">

                  <div className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1.5 text-[11px] font-bold
        tracking-wide px-2.5 py-1 rounded-full border
        ${isOpen
                          ? "bg-green-50 text-green-700 border-green-100"
                          : "bg-red-50 text-red-700 border-red-100"
                        }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-green-500" : "bg-red-500"
                          }`}
                      />

                      {isOpen ? "Open Now" : "Closed"}
                    </span>
                  </div>

                  <div>
                    <p className="text-[13px] sm:text-sm font-bold text-[#0b3a74]">
                      Mon – Sat
                    </p>

                    <p className="text-[13px] sm:text-sm text-slate-500 mt-0.5">
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </ContactCard>

            </div>
          </div>

          {/* ── RIGHT: Map ── */}
          <div
            ref={mapRef}
            style={{
              opacity: mapIn ? 1 : 0,
              transform: mapIn ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease",
            }}
            className="relative rounded-2xl overflow-hidden
              border border-slate-100
              shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_24px_rgba(0,0,0,0.07)]
              min-h-[320px] lg:min-h-0"
          >
            {/* Map label badge */}
            <div
              className="absolute top-4 left-4 z-10 flex items-center gap-2
                bg-white/95 backdrop-blur-sm border border-slate-100
                rounded-xl px-3 py-2 shadow-sm"
            >
              <IoLocationSharp className="text-[#0b3a74] text-base" />
              <span className="text-[12px] font-bold text-[#0b3a74]">
                Mabsol Infotech, Panchkula
              </span>
            </div>

            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.7655040841573!2d76.83218437613026!3d30.668731088722033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f937aaaaaaaab%3A0x90dbfaf2e8ded010!2sMabsol%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1752842731021!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mabsol Infotech Location"
            />
          </div>

        </div>



      </div>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Cloud, FileText } from "lucide-react";
import { Button, Modal } from "antd";
import PaymentGetway from "../payment-getway/PaymentGetway";

export default function MRReportingPage() {
  // PRODUCTS
  const products = [
    {
      id: "1",
      title: "MR Reporting — Cloud",
      price: 1500,
      tag: "Cloud",
      bullets: [
        "Analyze doctor and chemist visits",
        "Personalized URL with Company Name",
        "Internal Mailing System",
      ],
      accent: "bg-white",
      image: "/images/mr-mabsol.png",
    },
  ];

  const user = {
    name: "Abhishek Singh",
    email: "abhishek@example.com",
    company: "Mabsol Infotech",
  };

  // FEATURES
  const features = [
    {
      title: "User-friendly interface",
      desc: "Save time, money, and paper with an easy-to-use CRM.",
      icon: "💻",
    },
    {
      title: "GPS Tracking",
      desc: "Track doctor visits, chemist visits and routes on the map.",
      icon: "📍",
    },
    {
      title: "Offline Mode",
      desc: "Mobile app works even when the internet is not available.",
      icon: "📴",
    },
    {
      title: "E-Detailing App",
      desc: "Reduce printing cost — showcase visual aids digitally.",
      icon: "📊",
    },
    {
      title: "Anytime DCR Submission",
      desc: "Submit Daily Call Reports from anywhere, anytime.",
      icon: "📝",
    },
    {
      title: "Doctor Calls + Samples + Gifts",
      desc: "Record doctor calls, samples, and gifts instantly.",
      icon: "🎁",
    },
    {
      title: "Expenses & POB Tracking",
      desc: "Add expenses, chemist POB and stockist visits easily.",
      icon: "💼",
    },
    {
      title: "Auto Checks & Validations",
      desc: "System ensures accurate and timely DCR submission.",
      icon: "✔️",
    },
    {
      title: "Sample & Gift Status Tracking",
      desc: "Track all samples and gifts in real-time.",
      icon: "📦",
    },
    {
      title: "Automatic Monthly Reports",
      desc: "Auto generates monthly expenses and performance reports.",
      icon: "📅",
    },
    {
      title: "Sales Data Collection",
      desc: "Accurate sales data for better decision-making.",
      icon: "📈",
    },
    {
      title: "Manager Dashboards",
      desc: "Managers can view consolidated stock & sales reports.",
      icon: "🗂️",
    },
  ];

  // EXTRA BULLETS
  const bullets = [
    "Integrates with MR-KnowIT Pharma ERP for real-time primary sales data and Stock-In-Transit Approval Management.",
    "Internal Mailing System: Send mail to all employees by name — no email ID required.",
    "Analyze doctor and chemist visits with detailed insights.",
    "Target vs Achievement Analysis with graphical reports.",
    "Automatically calculates target, primary, and secondary sales.",
    "Send Bulk SMS to Field Staff, Doctors, Chemists, and Stockists easily.",
    "Personalized company URL (e.g., www.xyz.com).",
    "Client’s logo appears on all pages.",
    "Includes easy-to-understand Training Manuals for all users.",
  ];

  // CART STATES
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  // ADD TO CART
  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing) {
        return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  // TOTAL ITEMS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // TOTAL PRICE — SAFE
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === String(item.id));
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            MRR- <span className="text-orange-600">Pharma CRM Software Is Easy To Use And Human Centric</span>
          </h1>

          <p className="text-gray-700 max-w-2xl">
            MRR is a simple Pharma CRM software that helps MR’s submit Daily
            Call Reports easily and lets managers track team performance.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:flex gap-3">
            <button className="px-4 py-3 bg-[#0b3a74] text-white rounded-lg font-medium w-full">
              Contact Sales
            </button>

            <button className="px-4 py-3 border rounded-lg w-full">
              Cloud Editions
            </button>
          </div>

          {/* 3 MINI FEATURES */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">

            <div className="bg-blue-50 rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100 flex gap-3">
              <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Access Anywhere
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Reports from any browser
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100 flex gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Internal Mailing
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Encrypted Messages
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100 flex gap-3 col-span-2 sm:col-span-1">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3a74]" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Actionable Reports
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Custom & Saveable
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src="/images/MR-report.jpg"
            className="w-full h-80 object-contain"
          />
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="w-full py-12 sm:py-16 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0b3a74]">
            Outstanding Features of{" "}
            <span className="text-orange-600">MRR Reporting Software</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-4xl mx-auto">
            Everything your medical representatives and managers need.
          </p>

          {/* ✅ FEATURES GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">

            {features.map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-xl shadow-md bg-white border border-[#dce7ff]
          hover:-translate-y-1 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-2">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-sm sm:text-lg text-[#0b3a74]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-10">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#0b3a74] mb-8 sm:mb-12">
          Buy MR Reporting Software - <span className="text-orange-600">Cloud Edition</span>  
        </h2>

        <div className="flex flex-col gap-8 sm:gap-16">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >

              {/* IMAGE */}
              <div className="md:w-1/2 bg-white flex justify-center items-center p-4 sm:p-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full max-h-36 sm:max-h-96 object-contain"
                />
              </div>

              {/* DETAILS */}
              <div className="md:w-1/2 p-5 sm:p-8">

                {/* TITLE + PRICE */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg sm:text-3xl font-semibold">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-500">
                      {p.tag} Edition
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-bold">
                      ₹
                      {p.price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      One-time
                    </div>
                  </div>
                </div>

                {/* FEATURES LIST */}
                <ul className="bg-blue-50/40 p-4 sm:p-5 rounded-xl space-y-1 sm:space-y-2 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <span className="text-green-600 text-sm">✔</span>
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    onClick={() => addToCart(Number(p.id))}
                    className="!bg-[#185e9a] !text-white px-4 py-4 rounded-lg flex items-center justify-center gap-2 !text-lg"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to cart
                  </Button>

                  <Button className="px-4 py-4 rounded-lg border text-lg">
                    Buy now
                  </Button>
                </div>

                {/* FOOTER */}
                <div className="mt-3 text-[10px] sm:text-xs text-gray-500">
                  SKU:27705 • Support: 1 year
                </div>
              </div>
            </div>
          ))}
        </div>
              {/* CART SUMMARY */}
      <div className="w-full max-w-7xl mt-5 sm:mt-8 bg-white rounded-2xl p-4 sm:p-6 shadow-md">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm sm:text-base">
            Cart Summary
          </div>
          <div className="font-semibold text-sm sm:text-base">
            {totalItems} item(s)
          </div>
        </div>

        {/* ITEMS */}
        <div className="mt-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-gray-500 text-center py-3 text-sm">
              Your cart is empty.
            </div>
          ) : (
            cart.map((c) => {
              const prod = products.find((x) => x.id === String(c.id));
              if (!prod) return null;

              return (
                <div
                  key={c.id}
                  className="flex justify-between items-start pb-2 border-b last:border-b-0"
                >
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      {prod.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      Qty: {c.qty}
                    </div>
                  </div>

                  <div className="font-semibold text-sm sm:text-base">
                    ₹{(prod.price * c.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* TOTAL */}
        <div className="mt-4 flex justify-between items-center border-t pt-4">
          <div className="text-gray-600 text-sm sm:text-base">
            Total
          </div>
          <div className="text-base sm:text-lg font-bold">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">

          {/* CLEAR BUTTON */}
          <Button
            onClick={() => setCart([])}
            className="py-3 sm:py-4 rounded-lg border text-sm"
          >
            Clear Cart
          </Button>

          {/* CHECKOUT BUTTON */}
          <Button
            disabled={cart.length === 0}
            className={`py-3 sm:py-4 rounded-lg text-sm ${cart.length === 0
              ? "bg-gray-200! text-gray-400!"
              : "bg-[#339933]! text-white!"
              }`}
            onClick={showLoading}
          >
            Checkout
          </Button>
        </div>

      </div>
      
      </div>
      </section>




      {/* IMAGE BELOW */}
      <div className="hidden sm:flex w-full min-h-screen sm:min-h-[80vh] justify-center items-center bg-gradient-to-b from-[#f8fbff] to-white px-4">
        <img
          src="/images/mr-people.png"
          className="w-full max-w-6xl object-contain"
        />
      </div>

      {/* BULLETS WITH IMAGE */}
      <section className="max-w-7xl mx-auto mt-6 sm:mt-10 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b3a74] text-center mb-4 sm:mb-6">
            Additional <span className="text-orange-600">Powerful Features</span>
          </h2>

          <ul className="space-y-3 sm:space-y-4">
            {bullets.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white shadow-sm sm:shadow-md
          rounded-xl p-3 sm:p-4 border-l-4 border-blue-600"
              >
                <span className="text-blue-600 text-lg sm:text-xl">✔</span>
                <p className="text-gray-700 text-sm sm:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src="/images/Reporting-Software.jpg"
            alt="Reporting Software"
            className="w-full max-w-xs sm:max-w-md md:max-w-full
      h-auto sm:h-[400px] md:h-[600px] object-contain"
          />
        </div>

      </section>

      <Modal
        title="Checkout Summary"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            {/* PaymentGetway ke handler ko call karenge */}
            <PaymentGetway totalPrice={totalPrice} user={user} />
          </>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="text-lg font-bold mb-4">
          Total Amount: ₹{totalPrice.toLocaleString("en-IN")}
        </div>
        {cart.map((c) => {
          const prod = products.find((x) => Number(x.id) === Number(c.id));
          if (!prod) return null;
          return (
            <div key={c.id} className="flex justify-between border-b pb-2">
              <div>
                <div className="font-medium">{prod.title}</div>
                <div className="text-xs text-gray-500">Qty: {c.qty}</div>
              </div>
              <div className="font-semibold">
                ₹{(prod.price * c.qty).toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </Modal>
    </div>
  );
}

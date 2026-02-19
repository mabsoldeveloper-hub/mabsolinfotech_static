"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Cloud, FileText } from "lucide-react";
import { Button, Modal } from "antd";
import PaymentGetway from "../payment-getway/PaymentGetway";

// Modern responsive TallyPrime product showcase
// Next.js + Tailwind styling (single-file React component preview)
const user = {
  name: "Abhishek Singh",
  email: "abhishek@example.com",
  company: "Mabsol Infotech",
};

export default function TallyPage() {
  const products = [
    {
      id: "silver",
      title: "TallyPrime — Silver",
      price: 22500,
      tag: "Silver",
      bullets: [
        "18% GST Extra",
        "Core accounting & invoicing",
        "GST & compliance-ready",
        "Simple reports & browser access",
      ],
      accent: "bg-white",
      image: "/images/Tally-silver.jpg",
    },
    {
      id: "gold",
      title: "TallyPrime — Gold",
      price: 67500,
      tag: "Gold",
      bullets: [
        "18% GST Extra",
        "All Silver features",
        "Customisable & savable reports",
        "TallyVault encryption + priority support",
      ],
      accent: "bg-yellow-50",
      image: "/images/Tally-gold.jpg",
    },
  ];

  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);


  const addToCart = (id: string) => {
    const exists = cart.find((c) => c.id === id);

    if (exists) {
      setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }

    setToastMsg("Item added to cart!");
    setTimeout(() => setToastMsg(null), 2000);
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => {
    const p = products.find((x) => x.id === i.id)!;
    return s + p.price * i.qty;
  }, 0);

  const GST_RATE = 0.18;

  const subtotal = totalPrice;
  const gstAmount = +(subtotal * GST_RATE).toFixed(2);
  const grandTotal = +(subtotal + gstAmount).toFixed(2);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f6fbff] to-white text-gray-900 overflow-hidden">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#0b3a74] flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <div className="text-lg font-semibold text-[#0b3a74]">
                TallyPrime
              </div>
              <div className="text-xs text-gray-500">
                Simple to learn. Powerful to run.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact">
            <button className="hidden md:inline text-sm px-4 py-2 rounded-lg border">
              Support
            </button></Link>
            {/* CART BUTTON WITH MODAL OPEN */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#0b3a74] text-white px-4 py-2 rounded-lg"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart{" "}
              <span className="ml-2 bg-white text-[#0b3a74] px-2 py-0.5 rounded text-xs">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b3a74] leading-tight">
            TallyPrime — <span className="text-orange-600">Choose an edition that fits your business</span>
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Tally is committed to leveraging technology to help business owners work smarter, stay in control, and achieve greater satisfaction. TallyPrime adjusts to your business needs and provides accurate, secure insights — allowing you to concentrate on what truly matters.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/contact">
            <button className="px-5 py-3 bg-[#0b3a74] text-white rounded-lg font-medium">
              Contact Sales
            </button>
            </Link>
            {/* <Link href="/tally-comparison">
            <button className="px-5 py-3 border rounded-lg">
              Comparison Editions
            </button>
            </Link> */}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            {/* 1️⃣ Access Anywhere */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <Cloud className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Access anywhere
                </div>
                <div className="text-gray-600">Reports from any browser</div>
              </div>
            </div>

            {/* 2️⃣ TallyVault */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">TallyVault</div>
                <div className="text-gray-600">End-to-end encryption</div>
              </div>
            </div>

            {/* 3️⃣ Actionable Reports */}
            <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-xl p-5 shadow-sm border border-blue-100 flex items-start gap-3">
              <FileText className="w-6 h-6 text-[#0b3a74] mt-1" />
              <div>
                <div className="font-semibold text-[#0b3a74]">
                  Actionable reports
                </div>
                <div className="text-gray-600">Customisable & savable</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image mock */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="p-6">
            <img
              src="/images/Tally-pic.png"
              alt="Tally mock"
              className="w-full h-80 object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#0b3a74] mb-8 sm:mb-10 px-4 leading-tight">
          Comparison Tally Prime Silver & Gold
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* SILVER CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Shimmer border */}
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#9ca3af,#e5e7eb,#6b7280,#d1d5db)] animate-shimmer-silver"></div>

            <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/tally-prime.webp"
                  alt="Tally Silver"
                  className="w-15 h-12 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Tally Prime Silver
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal for small businesses or individual users who need access
                from one computer.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>Single User:</strong> Perfect for one system access.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>Affordable:</strong> Lower cost compared to Gold
                    version.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>All Core Features:</strong> Perform all tasks
                    efficiently on a single computer.
                  </span>
                </li>
              </ul>

              {/* <div className="mt-6 flex justify-center">
                <button  className="bg-[#0b3a74] text-white px-6 py-2 rounded-lg hover:bg-[#0d4891] transition">
                  Choose Silver
                </button>
              </div> */}
            </div>
          </motion.div>

          {/* GOLD CARD */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-[2px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Shimmer border */}
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#c7a200,#fff8dc,#c7a200)] animate-shimmer-gold"></div>

            <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/tally-prime.webp"
                  alt="Tally Gold"
                  className="w-15 h-12 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Tally Prime Gold
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Designed for medium or growing businesses where multiple users
                need simultaneous access.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>Multiple Users:</strong> Ideal for medium-sized
                    companies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>Network Support:</strong> Unlimited users via local
                    area network (LAN).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>
                    <strong>Upgradeable:</strong> Easily upgrade from Silver as
                    your business grows.
                  </span>
                </li>
              </ul>

              {/* <div className="mt-6 flex justify-center">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                  Choose Gold
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SIDE-BY-SIDE */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#0b3a74] mb-8 sm:mb-10 px-4 leading-tight">
          Buy Your Tally Prime Silver & Gold
        </h2>
        <div className="flex flex-col gap-16">
          {products.map((p, index) => (
            <div
              key={p.id}
              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center ${index % 2 === 1 ? "md:flex" : ""
                }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-white flex justify-center items-center p-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[400px] rounded-xl shadow-md "
                />
              </div>

              {/* DETAILS SIDE */}
              <div className="w-full md:w-1/2 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {p.tag} Edition
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹
                      {p.price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-xs text-gray-500">One-time</div>
                  </div>
                </div>

                <div
                  className={`p-5 rounded-xl border ${p.accent} bg-blue-50/40`}
                >
                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-0.5 text-green-600">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  {/* Add to Cart */}
                  <Button
                    onClick={() => addToCart(p.id)}
                    className="w-full sm:flex-1 bg-[#185e9a]! text-white! 
               h-11 sm:h-12 rounded-lg 
               flex items-center justify-center gap-2 
               text-sm sm:text-base font-medium"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>

                  {/* Buy Now */}
                  <Button
                    onClick={() => addToCart(p.id)}
                    className="w-full sm:w-auto 
               h-11 sm:h-12 
               px-6 rounded-lg border 
               text-sm sm:text-base font-medium"
                  >
                    Buy Now
                  </Button>

                </div>

                <div className="mt-4 text-xs text-gray-500">
                  SKU: {p.id.toUpperCase()} • Support: 1 year
                  <ul className="text-gray-500 text-sm mt-2 space-y-1">
                    <li>* Customization, additional features, or local modifications will be charged separately.</li>
                    <li>* GST will be charged extra as per applicable tax laws.</li>
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CART SUMMARY */}
      <div className="mt-8 max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">

        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl sm:text-xl font-semibold text-gray-800">
            Cart Summary
          </h2>
          <span className="text-md sm:text-base font-medium text-gray-600">
            {totalItems} item(s)
          </span>
        </div>

        {/* CART ITEMS */}
        <div className="mt-5 space-y-4 text-sm sm:text-base">
          {cart.length === 0 ? (
            <div className="text-gray-400 text-center py-6">
              Your cart is empty.
            </div>
          ) : (
            cart.map((c) => {
              const prod = products.find((x) => x.id === c.id)!;
              return (
                <div
                  key={c.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium text-gray-800">
                      {prod.title}
                    </div>
                    <div className="text-md text-gray-500 mt-1">
                      Qty: {c.qty}
                    </div>
                  </div>
                  <div className="font-semibold text-gray-700">
                    ₹{(prod.price * c.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* BILLING BREAKDOWN */}
        <div className="mt-6 pt-4 border-t space-y-3 text-sm sm:text-base">

          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>GST (18%)</span>
            <span>₹{gstAmount.toLocaleString("en-IN")}</span>
          </div>

          {/* Highlighted Total */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mt-3">
            <span className="text-base sm:text-lg font-semibold text-gray-800">
              Total Payable
            </span>
            <span className="text-lg sm:text-xl font-bold text-[#185e9a]">
              ₹{grandTotal.toLocaleString("en-IN")}
            </span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">

          <Button
            onClick={() => {
              setCart([]);
              setSelected(null);
            }}
            className="px-6 py-2 rounded-lg"
          >
            Clear
          </Button>

          <Button
            disabled={cart.length === 0}
            className={`px-8 py-2 rounded-lg text-base font-medium ${cart.length === 0
              ? "bg-gray-200 text-gray-400"
              : "bg-[#185e9a]! text-white! hover:!bg-[#144a82]"
              }`}
            onClick={showLoading}
          >
            Checkout
          </Button>
        </div>

      </div>


      {/* FEATURES & DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              Simple to learn and apply
            </h3>
            <p className="mt-3 text-gray-700">
              Getting started with TallyPrime is a breeze. Install in under a
              minute and start invoicing even faster. The UI is intuitive and
              built around common business workflows.
            </p>

            <h3 className="mt-6 text-3xl font-bold text-gray-800">
              Access from anywhere, secure & reliable
            </h3>
            <p className="mt-3 text-gray-700">
              View reports from any browser while keeping your data safe with
              TallyVault — an extra layer of encryption only you can unlock.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              Why customers choose TallyPrime
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-green-600">✓</span> Actionable,
                customisable reports
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-green-600">✓</span> Fast setup &
                simple workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-green-600">✓</span> Secure
                browser-based access
              </li>
            </ul>

            {/* CART MODAL */}
            {isCartOpen && (
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white w-[90%] max-w-lg rounded-2xl shadow-xl p-6 animate-fadeIn">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Your Cart
                    </h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-gray-500 text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* CART LIST */}
                  {cart.length === 0 ? (
                    <div className="text-center text-gray-500 py-6">
                      Your cart is empty.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((c) => {
                        const prod = products.find((x) => x.id === c.id)!;
                        return (
                          <div
                            key={c.id}
                            className="flex justify-between items-center p-3 border rounded-lg"
                          >
                            <div>
                              <div className="font-medium">{prod.title}</div>
                              <div className="text-xs text-gray-500">
                                Price: ₹{prod.price.toLocaleString("en-IN")}
                              </div>
                            </div>

                            {/* QTY BUTTONS */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  if (c.qty > 1) {
                                    setCart(
                                      cart.map((x) =>
                                        x.id === c.id
                                          ? { ...x, qty: x.qty - 1 }
                                          : x
                                      )
                                    );
                                  }
                                }}
                                className="px-2 py-1 border rounded"
                              >
                                -
                              </button>

                              <span>{c.qty}</span>

                              <button
                                onClick={() =>
                                  setCart(
                                    cart.map((x) =>
                                      x.id === c.id
                                        ? { ...x, qty: x.qty + 1 }
                                        : x
                                    )
                                  )
                                }
                                className="px-2 py-1 border rounded"
                              >
                                +
                              </button>

                              <button
                                onClick={() =>
                                  setCart(cart.filter((x) => x.id !== c.id))
                                }
                                className="text-red-500 ml-2 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TOTAL */}
                  <div className="flex justify-between items-center mt-6 text-lg font-bold">
                    <span>Total:</span>
                    <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>

                  {/* PAYMENT BUTTON */}
                  <button
                    disabled={cart.length === 0}
                    className={`w-full mt-5 py-3 rounded-lg text-white font-medium ${cart.length === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                      }`}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-[#0b3a74] text-white px-5 py-3 rounded-xl shadow-lg animate-fadeIn">
          {toastMsg}
        </div>
      )}

      <Modal
        title="Checkout Summary"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Cancel</Button>

            {/* Final amount gateway ko bhejna chahiye */}
            <PaymentGetway totalPrice={grandTotal} user={user} />
          </>
        }
        open={open}
        onCancel={() => setOpen(false)}
      >
        {/* ITEM LIST */}
        <div className="space-y-3 mb-2">
          {cart.map((c) => {
            const prod = products.find((x) => x.id === c.id)!;
            return (
              <div key={c.id} className="flex justify-between pb-2 text-md">
                <div>
                  <div className="font-medium">{prod.title}</div>
                  <div className="text-md text-gray-500">
                    Qty: {c.qty}
                  </div>
                </div>
                <div className="font-semibold">
                  ₹{(prod.price * c.qty).toLocaleString("en-IN")}
                </div>
              </div>
            );
          })}
        </div>

        {/* BILLING BREAKDOWN */}
        <div className="pt-4 border-t space-y-2 text-md">

          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">GST (18%)</span>
            <span>₹{gstAmount.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-lg font-bold border-t pt-3 mt-2">
            <span>Total Payable</span>
            <span className="text-[#185e9a]">
              ₹{grandTotal.toLocaleString("en-IN")}
            </span>
          </div>

        </div>
      </Modal>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Trash2 } from "lucide-react";
import PaymentGetway from "../payment-getway/PaymentGetway";
import Link from "next/link";


// -------------------- CONSTANTS --------------------
const EXTRA_USER_PRICE = 3000;
const EXTRA_COMPANY_PRICE = 6500;

// -------------------- PRODUCT TYPE --------------------
interface ProductType {
  id: string;
  title: string;
  price: number;
  tag: string;
  bullets: string[];
  accent: string;
  image: string;
}

// -------------------- BASIC PRODUCT --------------------
const GOLD_PRODUCT: ProductType = {
  id: "gold",
  title: "Marg Erp 9+ — Gold",
  price: 26000,
  tag: "Gold",
  bullets: [
    "18% GST Extra",
    "Multi-user access on LAN",
    "25 user access",
    "25 companies supported",
    "Included Users: Unlimited Users",
    "Extra User Cost: Unlimited users allowed",
  ],
  accent: "bg-blue-200",
  image: "/images/marg-basic.png",
};

// ----------------------------------------------------
// CART ITEM TYPE
// ----------------------------------------------------
interface CartItem {
  product: ProductType;
  qty: number;
  extraUsers: number;
  extraCompanies: number;
  total: number;
}

// LIMITS FOR BASIC
const LIMITS = { user: 99, company: 99 };

// ----------------------------------------------------
// MAIN PAGE
// ----------------------------------------------------
export default function MargErpBasic() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMsg, setToastMsg] = useState("");

  const addToCart = (
    product: ProductType,
    qty: number,
    extraUsers: number,
    extraCompanies: number
  ) => {
    const total =
      product.price * qty +
      extraUsers * EXTRA_USER_PRICE +
      extraCompanies * EXTRA_COMPANY_PRICE;

    setCart((prev) => [
      ...prev,
      { product, qty, extraUsers, extraCompanies, total },
    ]);

    setToastMsg(`${product.title} added to cart!`);
    setTimeout(() => setToastMsg(""), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 md:p-10">
      {toastMsg && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
          {toastMsg}
        </div>
      )}

      {/* Buttons Section */}
      <div className="flex gap-3 mb-5">

        <Link href="/margErp/margErp-Basic">
          <button className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm">
            Buy Basic
          </button>
        </Link>

        <Link href="/margErp/margErp-Silver">
          <button className="px-4 py-2 text-sm rounded-md bg-gray-500 text-white font-medium hover:bg-gray-600 transition shadow-sm">
            Buy Silver
          </button>
        </Link>

      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0b3a74] mb-12">
        Buy Marg ERP 9+ — Gold Edition
      </h1>



      {/* PRODUCT CARD */}
      <ProductCard
        product={GOLD_PRODUCT}
        addToCart={addToCart}
        limits={LIMITS}
      />

      {/* CART SUMMARY */}
      <CartSummary cart={cart} setCart={setCart} />
    </div>
  );
}

//
// ----------------------------------------------------
// YOUR FULL ProductCard Component (Integrated)
// ----------------------------------------------------
interface CardProps {
  product: ProductType;
  addToCart: (
    product: ProductType,
    qty: number,
    extraUsers: number,
    extraCompanies: number
  ) => void;
  limits: { user: number; company: number };
}

function ProductCard({ product, addToCart, limits }: CardProps) {
  const [qty, setQty] = useState(1);
  const [extraUsers, setExtraUsers] = useState(1);
  const [extraCompanies, setExtraCompanies] = useState(1);

  const handleAdd = () => {
    addToCart(product, qty, extraUsers, extraCompanies);
  };

  return (
    <div className="bg-white max-w-[1400px] mx-auto text-[#0b3a74] items-center rounded-lg shadow-md border overflow-hidden">
      <div className="grid md:grid-cols-[35%_65%] gap-4 p-4">

        {/* LEFT IMAGE */}
        <div className="flex w-full items-center p-4 justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full px-10 py-5 flex flex-col gap-2">
          {/* Title & Price */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl font-bold">{product.title}</h3>
              <p className="text-gray-500">{product.tag} Edition</p>
            </div>

            <div className="text-right">
              <h3 className="text-3xl font-bold">₹{product.price}</h3>
              <p className="text-gray-500 text-md">One-time</p>
            </div>
          </div>

          {/* Bullets */}
          <ul className="mt-2 border rounded-xl p-3 space-y-3 text-gray-700">
            {product.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-600">✓</span> {b}
              </li>
            ))}
          </ul>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <InputField
              label="Quantity"
              value={qty}
              min={1}
              onChange={setQty}
            />
          </div>


          {/* Buttons */}
          <div className="pt-8 space-y-4">

            <div className="flex gap-6">

              {/* Add to Cart */}
              <button
                onClick={handleAdd}
                className="
        flex-1 h-16 
        bg-green-600 hover:bg-green-700
        text-white text-lg font-semibold
        rounded-sm
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
              >
                🛒 Add to Cart
              </button>

              {/* Buy Now */}
              <button
                onClick={handleAdd}
                className="
        flex-1 h-16
        bg-blue-600 hover:bg-blue-700
        text-white text-lg font-semibold
        rounded-sm
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
              >
                ⚡ Buy Now
              </button>

            </div>

          </div>

          {/* imp note */}
          <ul className="text-gray-700 text-sm mt-5">
            <li> SKU: 27686 • Support: 1 year • +18% GST. (Only For Trading).</li>
            <li>* Customization, additional features, or local modifications will be charged separately.</li>
            <li>* GST will be charged extra as per applicable tax laws.</li>
            <li>* For any changes or special requirements, please contact us.</li>
          </ul>
        </div>
      </div>

      <div className="h-5 w-full bg-blue-100"></div>
    </div>
  );
}

//
// ----------------------------------------------------
// InputField Component
// ----------------------------------------------------
function InputField({ label, value, onChange, min, max }: any) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border p-2 rounded w-full mt-1"
      />
    </div>
  );
}

//
// ----------------------------------------------------
// Your Full CartSummary Component
// ----------------------------------------------------
interface CartSummaryProps {
  cart: CartItem[];
  setCart?: (items: CartItem[]) => void;
}


// function CartSummary({ cart, setCart }: CartSummaryProps) {
//   const [open, setOpen] = useState(false);
//   // 🔹 Extra Pricing
//   const BASE_PRICE = 26000;
//   const EXTRA_USER_PRICE = 3000;
//   const EXTRA_COMPANY_PRICE = 6500;
//   // 🔹 Base Subtotal
//   const subtotal = cart.reduce(
//     (acc, item) => acc + BASE_PRICE * item.qty,
//     0
//   );

//   // 🔹 Total Extras
//   const totalExtraUsers = cart.reduce(
//     (acc, item) => acc + (item.extraUsers || 0) * item.qty,
//     0
//   );

//   const totalExtraCompanies = cart.reduce(
//     (acc, item) => acc + (item.extraCompanies || 0) * item.qty,
//     0
//   );

//   const extraUserCost = totalExtraUsers * EXTRA_USER_PRICE;
//   const extraCompanyCost = totalExtraCompanies * EXTRA_COMPANY_PRICE;

//   const subTotalWithExtras = subtotal + extraUserCost + extraCompanyCost;

//   const gst = subTotalWithExtras * 0.18;
//   const grandTotal = subTotalWithExtras + gst;;
//   const onDelete = (index: number) => {
//     setCart?.(cart.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <div className="max-w-[1400px] mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-[#0b3a74] mb-5 px-5">🛒 Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-gray-600 text-center py-10">Cart is empty !</p>
//         ) : (
//           <>
//             {/* Cart Items */}
//             {cart.map((item, index) => (
//               <div key={index} className="flex justify-between border-b py-3 px-5">
//                 <div>
//                   <div className="font-semibold text-xl text-[#0b3a74]">
//                     {item.product.title}
//                   </div>
//                   <div className="text-md text-gray-700">
//                     Qty: {item.qty} •
//                     Users: {1 + (item.extraUsers || 0)} •
//                     Companies: {1 + (item.extraCompanies || 0)}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   {/* <div className="font-bold">
//                     ₹{(
//                       item.product.price * item.qty +
//                       Math.max(0, (item.extraUsers - 1)) * 3000 * item.qty +
//                       Math.max(0, (item.extraCompanies - 1)) * 6500 * item.qty
//                     ).toLocaleString("en-IN")}
//                   </div> */}
//                   <Trash2
//                     className="text-red-500 cursor-pointer"
//                     onClick={() => onDelete(index)}
//                   />
//                 </div>
//               </div>
//             ))}

//             {/* 🔹 Order Summary */}
//             <div className="mt-6 space-y-3 bg-gray-50 p-6 rounded-xl border">

//               {/* Base Price */}
//               <div className="flex justify-between text-base">
//                 <span className="font-medium">Base Subtotal (1 User + 1 Company)</span>
//                 <span className="font-semibold">
//                   ₹{subtotal.toLocaleString("en-IN")}
//                 </span>
//               </div>

//               {/* Extra Users */}
//               {totalExtraUsers > 0 && (
//                 <div className="flex justify-between text-base text-gray-700">
//                   <span>Extra Users ({totalExtraUsers} × ₹3000)</span>
//                   <span className="font-semibold">
//                     ₹{extraUserCost.toLocaleString("en-IN")}
//                   </span>
//                 </div>
//               )}

//               {/* Extra Companies */}
//               {totalExtraCompanies > 0 && (
//                 <div className="flex justify-between text-base text-gray-700">
//                   <span>Extra Companies ({totalExtraCompanies} × ₹6500)</span>
//                   <span className="font-semibold">
//                     ₹{extraCompanyCost.toLocaleString("en-IN")}
//                   </span>
//                 </div>
//               )}

//               {/* Divider */}
//               <div className="border-t pt-3 flex justify-between text-lg font-semibold">
//                 <span>Subtotal (Before GST)</span>
//                 <span>₹{subTotalWithExtras.toLocaleString("en-IN")}</span>
//               </div>

//               {/* GST */}
//               <div className="flex justify-between text-base text-gray-700">
//                 <span>GST (18%)</span>
//                 <span className="font-semibold">
//                   ₹{gst.toLocaleString("en-IN")}
//                 </span>
//               </div>

//               {/* Grand Total */}
//               <div className="border-t pt-4 flex justify-between text-2xl font-bold text-[#0b3a74]">
//                 <span>Grand Total</span>
//                 <span>₹{grandTotal.toLocaleString("en-IN")}</span>
//               </div>

//             </div>

//             {/* Buttons */}
//             <div className="mt-5 flex justify-end gap-3">
//               <Button
//                 onClick={() => setCart?.([])}
//                 className="py-4 rounded-lg border"
//               >
//                 Clear
//               </Button>

//               <Button
//                 onClick={() => setOpen(true)}
//                 className="bg-[#339933]! text-white! py-4 rounded-lg"
//               >
//                 Checkout
//               </Button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* 🔹 Checkout Modal */}
//       <Modal
//         title={null}
//         open={open}
//         onCancel={() => setOpen(false)}
//         footer={null}
//         width={800}
//       >
//         <div className="bg-white p-4 rounded-xl">

//           <h2 className="text-3xl font-bold text-[#0b3a74] mb-5">
//             🧾 Checkout Summary
//           </h2>

//           {/* Cart Items */}
//           {cart.map((item, index) => (
//             <div key={index} className="flex justify-between border-b py-3">

//               <div>
//                 <div className="font-semibold text-xl text-[#0b3a74]">
//                   {item.product.title}
//                 </div>
//                 <div className="text-md text-gray-700">
//                   Qty: {item.qty} •
//                   Users: {1 + (item.extraUsers || 0)} •
//                   Companies: {1 + (item.extraCompanies || 0)}
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">

//                 <Trash2
//                   className="text-red-500 cursor-pointer"
//                   onClick={() => onDelete(index)}
//                 />
//               </div>

//             </div>
//           ))}

//           {/* 🔹 Order Summary */}
//           <div className="mt-6 space-y-3 bg-gray-50 p-6 rounded-xl border">

//             <div className="flex justify-between text-base">
//               <span className="font-medium">
//                 Base Subtotal (1 User + 1 Company)
//               </span>
//               <span className="font-semibold">
//                 ₹{subtotal.toLocaleString("en-IN")}
//               </span>
//             </div>

//             {totalExtraUsers > 0 && (
//               <div className="flex justify-between text-base text-gray-700">
//                 <span>Extra Users ({totalExtraUsers} × ₹3000)</span>
//                 <span className="font-semibold">
//                   ₹{extraUserCost.toLocaleString("en-IN")}
//                 </span>
//               </div>
//             )}

//             {totalExtraCompanies > 0 && (
//               <div className="flex justify-between text-base text-gray-700">
//                 <span>Extra Companies ({totalExtraCompanies} × ₹6500)</span>
//                 <span className="font-semibold">
//                   ₹{extraCompanyCost.toLocaleString("en-IN")}
//                 </span>
//               </div>
//             )}

//             <div className="border-t pt-3 flex justify-between text-lg font-semibold">
//               <span>Subtotal (Before GST)</span>
//               <span>₹{subTotalWithExtras.toLocaleString("en-IN")}</span>
//             </div>

//             <div className="flex justify-between text-base text-gray-700">
//               <span>GST (18%)</span>
//               <span className="font-semibold">
//                 ₹{gst.toLocaleString("en-IN")}
//               </span>
//             </div>

//             <div className="border-t pt-4 flex justify-between text-2xl font-bold text-[#0b3a74]">
//               <span>Grand Total</span>
//               <span>₹{grandTotal.toLocaleString("en-IN")}</span>
//             </div>

//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex justify-end gap-3">
//             <Button
//               onClick={() => setOpen(false)}
//               className="py-4 rounded-lg border"
//             >
//               Cancel
//             </Button>

//             <PaymentGetway
//               totalPrice={grandTotal}
//               user={{
//                 name: "User",
//                 email: "user@example.com",
//                 company: "My Company",
//               }}
//             />
//           </div>

//         </div>
//       </Modal>
//     </>
//   );

// }
function CartSummary({ cart, setCart }: CartSummaryProps) {
  const [open, setOpen] = useState(false);

  // 🔹 Base Pricing
  const BASE_PRICE = 26000;

  // 🔹 Base Subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + BASE_PRICE * item.qty,
    0
  );

  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  const onDelete = (index: number) => {
    setCart?.(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#0b3a74] mb-5 px-5">
          🛒 Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-10">
            Cart is empty !
          </p>
        ) : (
          <>
            {/* Cart Items */}
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-3 px-5"
              >
                <div>
                  <div className="font-semibold text-xl text-[#0b3a74]">
                    {item.product.title}
                  </div>
                  <div className="text-md text-gray-700">
                    Qty: {item.qty}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
            ))}

            {/* 🔹 Order Summary */}
            <div className="mt-6 space-y-3 bg-gray-50 p-6 rounded-xl border">

              {/* Subtotal */}
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal (Before GST)</span>
                <span>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              {/* GST */}
              <div className="flex justify-between text-base text-gray-700">
                <span>GST (18%)</span>
                <span className="font-semibold">
                  ₹{gst.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Grand Total */}
              <div className="border-t pt-4 flex justify-between text-2xl font-bold text-[#0b3a74]">
                <span>Grand Total</span>
                <span>
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-end gap-3">
              <Button
                onClick={() => setCart?.([])}
                className="py-4 rounded-lg border"
              >
                Clear
              </Button>

              <Button
                onClick={() => setOpen(true)}
                className="bg-[#339933]! text-white! py-4 rounded-lg"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>

      {/* 🔹 Checkout Modal */}
      <Modal
        title={null}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <div className="bg-white p-4 rounded-xl">

          <h2 className="text-3xl font-bold text-[#0b3a74] mb-5">
            🧾 Checkout Summary
          </h2>

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-3">
              <div>
                <div className="font-semibold text-xl text-[#0b3a74]">
                  {item.product.title}
                </div>
                <div className="text-md text-gray-700">
                  Qty: {item.qty}
                </div>
              </div>

              <Trash2
                className="text-red-500 cursor-pointer"
                onClick={() => onDelete(index)}
              />
            </div>
          ))}

          {/* Order Summary */}
          <div className="mt-6 space-y-3 bg-gray-50 p-6 rounded-xl border">

            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal (Before GST)</span>
              <span>
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between text-base text-gray-700">
              <span>GST (18%)</span>
              <span className="font-semibold">
                ₹{gst.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="border-t pt-4 flex justify-between text-2xl font-bold text-[#0b3a74]">
              <span>Grand Total</span>
              <span>
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <Button
              onClick={() => setOpen(false)}
              className="py-4 rounded-lg border"
            >
              Cancel
            </Button>

            <PaymentGetway
              totalPrice={grandTotal}
              user={{
                name: "User",
                email: "user@example.com",
                company: "My Company",
              }}
            />
          </div>

        </div>
      </Modal>
    </>
  );
}


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
const BASIC_PRODUCT: ProductType = {
  id: "basic",
  title: "Marg Erp 9+ — Basic",
  price: 10300,
  tag: "Basic",
  bullets: [
    "18% GST Extra",
    "Perfect for beginners & small setups.",
    "Included Users: 1 Full-Rights User",
    `Extra User Cost: ₹${EXTRA_USER_PRICE} per user (Max 2 Users)`,
    `Extra Company Cost: ₹${EXTRA_COMPANY_PRICE} per company (Max 2 Companies)`,
  ],
  accent: "bg-blue-200",
  image: "/images/marg-basic.png",
};

// CART ITEM TYPE
interface CartItem {
  product: ProductType;
  qty: number;
  extraUsers: number;
  extraCompanies: number;
  // total: number;
}

// LIMITS FOR BASIC
const LIMITS = { user: 2, company: 2 };

// MAIN PAGE
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
        <Link href="/margErp-Silver">
          <button className="px-4 py-2 text-sm rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition shadow-sm">
            Buy Silver
          </button>
        </Link>
        <Link href="/margErp/margErp-Gold">
          <button className="px-4 py-2 text-sm rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition shadow-sm">
            Buy Gold
          </button>
        </Link>
      </div>


      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0b3a74] mb-12">
        Buy Marg ERP 9+ — Basic Edition
      </h1>

      {/* PRODUCT CARD */}
      <ProductCard
        product={BASIC_PRODUCT}
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
      <div className="grid md:grid-cols-2 gap-2 p-4">
        {/* LEFT IMAGE */}
        <div className="flex w-full items-center p-4 justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full p-2">
          {/* Title & Price */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl font-bold">{product.title}</h3>
              <p className="text-gray-500 mt-2">{product.tag} (Limited Edition)</p>
            </div>

            <div className="text-right">
              <h3 className="text-3xl font-bold">₹{product.price}</h3>
              <p className="text-gray-500 text-sm">One-time</p>
            </div>
          </div>

          {/* Bullets */}
          <ul className="mt-5 border rounded-xl p-5 space-y-3 text-gray-700">
            {product.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-600">✓</span> {b}
              </li>
            ))}
          </ul>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">

            {/* Quantity */}
            <InputField
              label="Quantity"
              value={qty}
              min={1}
              onChange={setQty}
            />

            {/* Add Users Dropdown */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium">
                Add Users (Max: 2)
              </label>
              <select
                value={extraUsers}

                onChange={(e) => setExtraUsers(Number(e.target.value))}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>

            {/* Add Companies Dropdown */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium">
                Add Companies (Max: 2)
              </label>
              <select
                value={extraCompanies}
                onChange={(e) => setExtraCompanies(Number(e.target.value))}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>

          </div>


          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleAdd}
              className="flex-1 bg-[#185e9a]! text-white! py-4!"
            >
              Add to Cart
            </Button>

            <Button onClick={handleAdd} className="px-6 py-4! rounded-xl border font-semibold">
              Buy Now
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            SKU: 27686 • Support: 1 year • +18% GST. (Only For Trading).
          </p>
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

function CartSummary({ cart, setCart }: CartSummaryProps) {
  const [open, setOpen] = useState(false);
  // 🔹 Extra Pricing
  const EXTRA_USER_PRICE = 3000;
  const EXTRA_COMPANY_PRICE = 6500;

  // 🔹 Base Subtotal (Cart Items)
  // 🔹 Base Subtotal (Only Product Price × Qty)
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
  // 🔹 Extras (1 User + 1 Company Included Free Per Product)
  const totalExtraUsers = cart.reduce((acc, item) => {
    const chargeableUsers = Math.max(0, (item.extraUsers || 1) - 1);
    return acc + chargeableUsers * item.qty;
  }, 0);

  const totalExtraCompanies = cart.reduce((acc, item) => {
    const chargeableCompanies = Math.max(0, (item.extraCompanies || 1) - 1);
    return acc + chargeableCompanies * item.qty;
  }, 0);

  const extraUserCost = totalExtraUsers * EXTRA_USER_PRICE;
  const extraCompanyCost = totalExtraCompanies * EXTRA_COMPANY_PRICE;

  // 🔹 Subtotal Including Extras
  const subTotalWithExtras = subtotal + extraUserCost + extraCompanyCost;

  // 🔹 GST + Grand Total
  const gst = subTotalWithExtras * 0.18;
  const grandTotal = subTotalWithExtras + gst;
  const onDelete = (index: number) => {
    setCart?.(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#0b3a74] mb-5">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-10">Cart is empty</p>
        ) : (
          <>
            {/* Cart Items */}
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-3">
                <div>
                  <div className="font-semibold text-lg">
                    {item.product.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    Qty: {item.qty} • Users: {item.extraUsers} • Companies: {item.extraCompanies}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="font-bold">
                    ₹{(
                      item.product.price * item.qty +
                      Math.max(0, (item.extraUsers - 1)) * 3000 * item.qty +
                      Math.max(0, (item.extraCompanies - 1)) * 6500 * item.qty
                    ).toLocaleString("en-IN")}
                  </div>
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
            ))}

            {/* 🔹 Order Summary */}
            <div className="mt-4 space-y-2">

              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              {totalExtraUsers > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Extra Users ({totalExtraUsers})</span>
                  <span>₹{extraUserCost.toLocaleString("en-IN")}</span>
                </div>
              )}

              {totalExtraCompanies > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Extra Companies ({totalExtraCompanies})</span>
                  <span>₹{extraCompanyCost.toLocaleString("en-IN")}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>₹{gst.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-xl font-bold border-t pt-3">
                <span>Total</span>
                <span>₹{grandTotal.toLocaleString("en-IN")}</span>
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
        title="Checkout Summary"
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <PaymentGetway
            key="pay"
            totalPrice={grandTotal}
            user={{
              name: "User",
              email: "user@example.com",
              company: "My Company",
            }}
          />,
        ]}
      >
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2 mb-2">
            <div>
              <div className="font-medium">{item.product.title}</div>
              <div className="text-xs text-gray-500">
                Qty: {item.qty}
              </div>
            </div>
            <div className="font-semibold">
              ₹{(
                item.product.price * item.qty +
                Math.max(0, (item.extraUsers - 1)) * 3000 * item.qty +
                Math.max(0, (item.extraCompanies - 1)) * 6500 * item.qty
              ).toLocaleString("en-IN")}
            </div>
          </div>
        ))}

        <div className="mt-3 pt-3 space-y-2">

          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>

          {totalExtraUsers > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Users ({totalExtraUsers})</span>
              <span>₹{extraUserCost.toLocaleString("en-IN")}</span>
            </div>
          )}

          {totalExtraCompanies > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Companies ({totalExtraCompanies})</span>
              <span>₹{extraCompanyCost.toLocaleString("en-IN")}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{gst.toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total Amount</span>
            <span>₹{grandTotal.toLocaleString("en-IN")}</span>
          </div>

        </div>
      </Modal>
    </>
  );

}

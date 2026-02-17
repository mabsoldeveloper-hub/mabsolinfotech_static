"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Trash2 } from "lucide-react";
import PaymentGetway from "../payment-getway/PaymentGetway";
import { useRouter } from "next/navigation";

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
  price: 9999,
  tag: "Basic",
  bullets: [
    "Perfect for beginners & small setups.",
    "Included Users: 1 Full-Rights User",
    `Extra User Cost: ₹${EXTRA_USER_PRICE} per user (Max 2 Users)`,
    `Extra Company Cost: ₹${EXTRA_COMPANY_PRICE} per company (Max 2 Companies)`,
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
const LIMITS = { user: 2, company: 2 };

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
  const [extraUsers, setExtraUsers] = useState(0);
  const [extraCompanies, setExtraCompanies] = useState(0);

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
              <p className="text-gray-500">{product.tag} Edition</p>
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
            <InputField
              label="Quantity"
              value={qty}
              min={1}
              onChange={setQty}
            />

            <InputField
              label={`Add Users (Max: ${limits.user})`}
              value={extraUsers}
              min={0}
              max={limits.user}
              onChange={setExtraUsers}
            />

            <InputField
              label={`Add Companies (Max: ${limits.company})`}
              value={extraCompanies}
              min={0}
              max={limits.company}
              onChange={setExtraCompanies}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleAdd}
              className="flex-1 bg-[#185e9a]! text-white! py-4!"
            >
              Add to Cart
            </Button>

            <Button className="px-6 py-4! rounded-xl border font-semibold">
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
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.total, 0);

  const onDelete = (index: number) => {
    setCart?.(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className=" max-w-[1400px] mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#0b3a74] mb-5">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-10">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-3">
              <div>
                <div className="font-semibold text-lg">
                  {item.product.title}
                </div>
                <div className="text-sm text-gray-500">
                  Qty: {item.qty} • Extra Users: {item.extraUsers} • Extra
                  Companies: {item.extraCompanies}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="font-bold">
                  ₹{item.total.toLocaleString("en-IN")}
                </div>
                <Trash2
                  className="text-red-500 cursor-pointer"
                  onClick={() => onDelete(index)}
                />
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="mt-4 flex justify-between pt-4">
            <div className="text-2xl font-bold">
              Total: ₹{total.toLocaleString("en-IN")}
            </div>
          </div>
        )}

        {cart.length > 0 && (
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
        )}
      </div>

      {/* Checkout Modal */}
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
            totalPrice={total}
            user={{
              name: "User",
              email: "user@example.com",
              company: "My Company",
            }}
          />,
        ]}
      >
        <div className="text-lg font-bold mb-4">
          Total Amount: ₹{total.toLocaleString("en-IN")}
        </div>

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <div>
              <div className="font-medium">{item.product.title}</div>
              <div className="text-xs text-gray-500">Qty: {item.qty}</div>
            </div>
            <div className="font-semibold">
              ₹{item.total.toLocaleString("en-IN")}
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
}

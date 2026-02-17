"use client";
import { Check, X } from "lucide-react";

const data = [
  { no: 1, feature: "Inventory Management", basic: true, silver: true, gold: true },
  { no: 2, feature: "Multi Store Management (Godown Management)", basic: false, silver: true, gold: true },
  { no: 3, feature: "Sales / Purchase Invoice", basic: true, silver: true, gold: true },
  { no: 4, feature: "Sales Order / Purchase Order & Challan Entry Management", basic: true, silver: true, gold: true },
  { no: 5, feature: "Counter Sale Entry & Temporary Purchase Entry", basic: true, silver: true, gold: true },
  { no: 6, feature: "Sale / Purchase Brk/Exp Return & Replacement Issue", basic: true, silver: true, gold: true },
  { no: 7, feature: "Price Difference Sale / Purchase Management", basic: true, silver: true, gold: true },
  { no: 8, feature: "Conversion Entry Management", basic: false, silver: true, gold: true },
];
const stats = [
  {
    icon: "/icons/computer-icon.png",
    value: "20 Billion+",
    label: "Invoices Processed Per Year",
  },
  {
    icon: "/icons/transaction.png",
    value: "100 Billion$",
    label: "Transactions Processed Per Year",
  },
  {
    icon: "/icons/pharma.png",
    value: "50% Pharma & FMCG",
    label: "Runs On Marg ERP Software",
  },
  {
    icon: "/icons/world.png",
    value: "1 Million+",
    label: "Businesses Served Worldwide",
  },
  {
    icon: "/icons/support.png",
    value: "850+",
    label: "Sales & Support Centers",
  },
  {
    icon: "/icons/sales.png",
    value: "8500+",
    label: "Sales & Service Professionals",
  },
];

const icon = (value: boolean) =>
 value ? (
  <div className="flex justify-center items-center">
    <Check className="text-green-500 w-5 h-5" />
  </div>
) : (
  <div className="flex justify-center items-center">
    <X className="text-red-500 w-5 h-5" />
  </div>
);

export default function FeaturesComparison() {
  return (
    <div>
    <section className="w-full py-16 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4">

       <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b3a74] leading-tight text-center mb-12">
            Marg ERP 9+ — <span className="text-orange-600">Features Comparison Chart</span>
          </h2>

        <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-300">
          <table className="w-full min-w-[1000px] text-left text-sm border-collapse">

            {/* HEADER */}
            <thead>
              <tr>
                <th className="p-4 font-semibold text-gray-700 bg-gray-300  border-r border-gray-300 text-center">
                  S. No.
                </th>

                <th className="p-4 font-semibold text-gray-700 bg-gray-300 border-r border-gray-300">
                  Features
                </th>

                {/* Basic Column – FULL LIGHT BLUE METALLIC */}
                <th className="p-4 text-center font-semibold text-white 
                  bg-gradient-to-b from-[#A8C8FF] to-[#4A88D0]
                  border-r border-gray-300">
                  Basic
                </th>

                {/* Silver Column – FULL LIGHT SILVER METALLIC */}
                <th className="p-4 text-center font-semibold text-gray-800
                  bg-gradient-to-b from-[#eeeeee] to-[#c4c4c4]
                  border-r border-gray-300">
                  Silver
                </th>

                {/* Gold Column – FULL LIGHT GOLD METALLIC */}
                <th className="p-4 text-center font-semibold text-gray-900
                  bg-gradient-to-b from-[#ffe9a8] to-[#e2b64d]">
                  Gold
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`transition border-b border-gray-300 
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-gray-100`}
                >
                  <td className="p-4 font-medium text-gray-700 border-r border-gray-300 max-w-[100px] text-center ">
                    {row.no}
                  </td>

                  <td className="p-4 text-gray-700 border-r border-gray-300 max-w-[300px] whitespace-normal break-words">
                    {row.feature}
                  </td>

                  <td className="p-4 text-center bg-gradient-to-b from-[#e8f1ff] to-[#d4e2fb] border-r border-gray-300">
                    {icon(row.basic)}
                  </td>

                  <td className="p-4 text-center bg-gradient-to-b from-[#f7f7f7] to-[#e5e5e5] border-r border-gray-300">
                    {icon(row.silver)}
                  </td>

                  <td className="p-4 text-center bg-gradient-to-b from-[#fff4d4] to-[#f7dd8a]">
                    {icon(row.gold)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>

      <section className="py-16 bg-white text-gray-800 shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b3a74] mb-12">
        Empowering Businesses, Enabling Better India Through IT
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.icon}
              alt={item.label}
              className="mx-auto w-16 mb-5"
            />
            <h3 className="text-lg text-[#0b3a74] font-bold">{item.value}</h3>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
    
   </div>
  );
}

import { Button, Card } from "antd";
import React from "react";

const productData = [
  {
    title: "M R Reporting",
    price: "₹1,500.00",
    img: "product1.webp",
  },
  {
    title: "Tally",
    price: "₹22,500.00 – ₹64,000.00",
    img: "images/Tally.webp",
  },
  {
    title: "MARG ERP 9+",
    price: "₹1,000.00 – ₹25,200.00",
    img: "Bannner.webp",
  },
];

const OurProduct = () => {
  return (
    <div className="py-10 lg:py-20 lg:px-20 px-6 bg-white">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-center text-4xl font-bold text-[#185e9a] underline"
      >
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto py-6">
        {productData.map((product, index) => (
          <Card
            key={index}
            styles={{ body: { padding: "0" } }}
            className="shadow-2xl w-full max-w-[400px] overflow-hidden flex flex-col justify-between"
          >
            <div className="flex flex-col h-full">
              {/* Image section */}
              <div className="h-[250px] w-full overflow-hidden relative group rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Text & Button section */}
              <div className="flex flex-col items-center text-center flex-grow px-4 pt-4 pb-6">
                <a className="!text-[#185e9a] text-xl font-bold font-serif">
                  {product.title}
                </a>
                <h1 className="py-1">{product.title}</h1>
                <p className="text-green-700">{product.price}</p>
                <div className="mt-auto">
                  <Button
                    type="primary"
                    className="!rounded-none !bg-[#185e9a] !px-10 !py-5 mt-4"
                  >
                    Select options
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;

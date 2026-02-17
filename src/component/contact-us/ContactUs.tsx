import { HomeOutlined, PhoneFilled, ShopOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20 py-6 lg:py-10 bg-white"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col justify-center space-y-8"
      >
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#185e9a] underline">
            Contact Us
          </h1>
          <p className="text-base md:text-lg italic pt-4 text-black">
            At Mabsol Infotech, we’re here to assist you with your technology
            needs. Whether you have questions, need support, or are interested
            in our services, we’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <PhoneFilled className="text-3xl !text-green-600" />
            <p className="text-lg font-bold py-2 font-serif text-black">
              Telephone
            </p>

            <div className="flex flex-col md:flex-row  gap-10 text-sm text-black">
              <div className="flex flex-col gap-1">
                <a href="tel:9888914287" className="block hover:text-blue-600 underline">
                  9888914287
                </a>
                <a href="tel:9888914283" className="block hover:text-blue-600 underline">
                  9888914283
                </a>
                <a href="tel:9356042496" className="block hover:text-blue-600 underline">
                  9356042496
                </a>
                <a href="tel:9357815181" className="block hover:text-blue-600 underline">
                  9357815181
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <a href="tel:9855605181" className="block hover:text-blue-600 underline">
                  9855605181
                </a>
                <a href="tel:9023415181" className="block hover:text-blue-600 underline">
                  9023415181
                </a>
                <a href="tel:9855145181" className="block hover:text-blue-600 underline">
                  9855145181
                </a>
              </div>
            </div>
          </div>

          <div>
            <AiOutlineMail className="text-3xl !text-red-600" />
            <p className="text-lg font-bold py-2 font-serif text-black">
              Email
            </p>
            <p className="text-sm break-words text-black">
              <a href="mailto:mabsolinfotech@gmail.com">
                mabsolinfotech@gmail.com
              </a>
              <br />
              <a href="mailto:contact@mabsolinfotech.com">
                contact@mabsolinfotech.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <a href="tel:+01722575181" className="block">
              <PhoneFilled className="text-3xl !text-green-600 mx-auto" />
              <p className="text-lg font-bold py-2 font-serif text-black">
                Office Phone Number
              </p>
              <p className="italic underline text-black hover:text-blue-600">
                +01722 575181
              </p>
            </a>
          </div>

          <div>
            <IoLocationSharp className="text-3xl !text-[#185e9a]" />
            <p className="text-lg font-bold py-2 font-serif text-black">
              Address
            </p>
            <Link
              href="https://www.google.com/maps/place/Mabsol+Infotech+Pvt.Ltd./@30.668727,76.834759,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="italic text-sm text-black">
                SCO-76, 2ND Floor, near railway Crossing, Shree Ram Atta Chakki,
                Ekta Vihar, Sector 19, Panchkula, Haryana 134113, India
              </p>
            </Link>
          </div>

          <div>
            <HomeOutlined className="text-3xl !text-[#185e9a]" />
            <p className="text-lg font-bold py-2 font-serif text-black">
              Working Hours
            </p>
            <p className="italic text-sm text-black">
              Monday to Saturday
              <br />
              10:00 am to 6:30 pm (Except Holidays)
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
      >
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.7655040841573!2d76.83218437613026!3d30.668731088722033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f937aaaaaaaab%3A0x90dbfaf2e8ded010!2sMabsol%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1752842731021!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export default function WebsiteDevelopment() {
  const imagesOpning = [
    "/mabsol-images/mabsol-img1.webp",
    "/mabsol-images/mabsol-img2.webp",
    "/mabsol-images/mabsol-img3.webp",
    "/mabsol-images/mabsol-img4.webp",
    "/mabsol-images/mabsol-img1.webp",
    "/mabsol-images/mabsol-img2.webp",
    "/mabsol-images/mabsol-img3.webp",
  ];

  const imagesActivities = [
    "/mabsol-images/mabsol-img5.webp",
    "/mabsol-images/mabsol-img6.webp",
    "/mabsol-images/mabsol-img7.webp",
    "/mabsol-images/mabsol-img8.webp",
    "/mabsol-images/mabsol-img5.webp",
    "/mabsol-images/mabsol-img6.webp",
  ];

  const mediaImages = [
    "/mabsol-images/mabsol-media1.webp",
    "/mabsol-images/mabsol-media2.webp",
    "/mabsol-images/mabsol-media3.webp",
    "/mabsol-images/mabsol-media4.webp",
    "/mabsol-images/mabsol-media5.webp",
    "/mabsol-images/mabsol-media6.webp",
    "/mabsol-images/mabsol-media7.webp",
  ];

  const socialImages = [
    "/mabsol-images/social1.webp",
    "/mabsol-images/social2.webp",
    "/mabsol-images/social3.webp",
    "/mabsol-images/social1.webp",
  ];

  const meetingPunchkulaImages = [
    "/mabsol-images/mab-meeting1.webp",
    "/mabsol-images/mab-meeting2.webp",
    "/mabsol-images/mab-meeting3.webp",
    "/mabsol-images/mab-meeting4.webp",
    "/mabsol-images/mab-meeting5.webp",
    "/mabsol-images/mab-meeting6.webp",
    "/mabsol-images/mab-meeting7.webp",
    "/mabsol-images/mab-meeting8.webp",
    "/mabsol-images/mab-meeting9.webp",
    "/mabsol-images/mab-meeting10.webp",
    "/mabsol-images/mab-meeting11.webp",
    "/mabsol-images/mab-meeting12.webp",
    "/mabsol-images/mab-meeting13.webp",
    "/mabsol-images/mab-meeting14.webp",
  ];
  const chandigarhMeetingImages = [
    "/mabsol-images/chandigarh-meeting1.webp",
    "/mabsol-images/chandigarh-meeting2.webp",
    "/mabsol-images/chandigarh-meeting3.webp",
    "/mabsol-images/chandigarh-meeting4.webp",
    "/mabsol-images/chandigarh-meeting5.webp",
    "/mabsol-images/chandigarh-meeting6.webp",
    "/mabsol-images/chandigarh-meeting7.webp",
    "/mabsol-images/chandigarh-meeting8.webp",
    "/mabsol-images/chandigarh-meeting9.webp",
    "/mabsol-images/chandigarh-meeting10.webp",
    "/mabsol-images/chandigarh-meeting11.webp",
    "/mabsol-images/chandigarh-meeting12.webp",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [galleryType, setGalleryType] = useState("");

  // 🔥 Select Correct Images For Lightbox
  const getSlides = () => {
    switch (galleryType) {
      case "opening":
        return imagesOpning.map((x) => ({ src: x }));
      case "activities":
        return imagesActivities.map((x) => ({ src: x }));
      case "media":
        return mediaImages.map((x) => ({ src: x }));
      case "social":
        return socialImages.map((x) => ({ src: x }));
      case "meetingPunchkula":
        return meetingPunchkulaImages.map((x) => ({ src: x }));
      case "meetingChandigarh":
        return chandigarhMeetingImages.map((x) => ({ src: x }));
      default:
        return [];
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="bg-white text-gray-800">
        <div
          className="h-[60vh] flex flex-col justify-center items-center bg-fixed bg-cover bg-center relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url('/mabsol-images/gallery-bg.avif')",
            filter: "brightness(0.9)",
          }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-md mt-4">
            Gallery
          </h1>

          <div className="mt-6">
            <Link
              href="/"
              className="text-white bg-transparent text-xl font-normal"
            >
              <div className="font-semiboldbold!">
                <RightOutlined /> Home
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== CONTENT SECTION 1===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold max-w-[550px]">
          Mabsol Infotech{" "}
          <span className="!text-orange-500">Office Openning</span>
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {imagesOpning.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    setGalleryType("opening");
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== CONTENT SECTION 2===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold max-w-[550px]">
          Mabsol Infotech <span className="!text-orange-500">Activities</span>
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            // centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
          >
            {imagesActivities.map((src, i) => (
              <SwiperSlide>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i), setOpen(true);
                    setGalleryType("activities");
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Lightbox Popup */}
        </div>
      </section>

      {/* ===== CONTENT SECTION 3===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold max-w-[550px]">
          Mabsol Infotech <span className="!text-orange-500">In Media</span>
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            // centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
          >
            {mediaImages.map((src, i) => (
              <SwiperSlide>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    setGalleryType("media");
                  }}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== CONTENT SECTION 4===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold max-w-[550px]">
          Mabsol Infotech{" "}
          <span className="!text-orange-500">Social Activities</span>
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            // centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
          >
            {socialImages.map((src, i) => (
              <SwiperSlide>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    setGalleryType("social");
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== CONTENT SECTION 5===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold max-w-[550px]">
          Mabsol Infotech{" "}
          <span className="!text-orange-500">Meeting Management</span>
        </h1>
        <p className="text-[#185e9a] text-2xl font-bold text-center">
          Panchkula
        </p>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            // centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
          >
            {meetingPunchkulaImages.map((src, i) => (
              <SwiperSlide>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    setGalleryType("meetingPunchkula");
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting2.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting3.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting4.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting5.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting6.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting7.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting8.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting9.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting10.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting11.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting12.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting13.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mabsol-images/mab-meeting14.webp"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ===== CONTENT SECTION 6===== */}
      <section className="flex flex-col gap-10 py-16 px-6 max-w-6xl mx-auto">
        <p className="text-[#185e9a] text-2xl font-bold text-center">
          Chandigarh
        </p>
        <div style={{ width: "80%", margin: "auto" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            // centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            // navigation={true}
          >
            {chandigarhMeetingImages.map((src, i) => (
              <SwiperSlide>
                <img
                  src={src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                    setGalleryType("meetingChandigarh");
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* bottum */}

      <div className="w-full max-w-6xl mx-auto py-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Image */}
        <div>
          <img
            src="/mabsol-images/contact-us-img.webp"
            className="w-full h-[380px] object-cover rounded-xl transition duration-300 ease-in-out hover:scale-105"
            alt="Card Image"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-4xl font-bold text-[#185e9a]">
            Join Us in <br />
            <span className="text-orange-500">Spreading Kindness</span>
          </h2>

          <h3 className="text-lg font-semibold text-[#185e9a] mt-3">
            Be Part of the <span className="text-[#185e9a]">Solution</span>
          </h3>

          <p className="text-gray-700 mt-4 leading-relaxed italic">
            We invite you to be a part of our journey to spread kindness and
            uplift those in need. Your support makes all the difference. Explore
            our gallery to see how your contributions are making an impact, and
            find out how you can get involved in our ongoing efforts.
          </p>

          <Button className="mt-6 w-32 !py-5 !bg-[#185e9a] !text-white rounded-lg shadow-md hover:!bg-[#185e9a] !transition">
            Contact
          </Button>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={getSlides()}
        plugins={[Thumbnails]}
      />
    </div>
  );
}

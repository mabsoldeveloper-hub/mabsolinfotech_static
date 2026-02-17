
"use client"

import { Carousel} from 'antd'
import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';
import AOS from "aos";
import "aos/dist/aos.css";



const teamMembers = [
    {
        name: "K.S Chauhan",
        role: "  BIOMAX BIOTECHNICS PVT. LTD. ",
        image: "images/company-profile-1.webp",
        description: " Mabsol Infotech has truly exceeded our expectations. Their support with Busy and Marg software has not only enhanced our productivity but also simplified complex tasks. The professional approach and in-depth knowledge of their products have made a significant impact on our operations. We couldn’t be more pleased with their service. ",
    },
    {
        name: " Shanky Mittal ",
        role: " ALCOLABS PVT. LTD.",
        image: "images/alco.webp",
        description: " Mabsol Infotech’s software solutions, including Marg, have significantly enhanced our financial management capabilities. Their professionalism and expertise have provided us with a distinct competitive edge. We appreciate their ongoing support and the positive impact their solutions have had on our business.  ",

    },
    {
        name: " Ashwani Mehta ",
        role: " ASTERISK LABORATORIES INDIA PVT. LTD.",
        image: "images/crousel1.png",
        description: " The software solutions from Mabsol Infotech, have been a game-changer for us. Their technical expertise and customer-centric approach have been instrumental in optimizing our financial operations. We value their proactive support and their ability to tailor solutions to meet our specific needs. ",

    },
    {
        name: " Deepak Pathak ",
        role: " Satyam Enterprises Zirakpur ",
        // image: "images/maxresdefault.webp",
        image: "images/satyam.jpg",
        description: " Partnering with Mabsol Infotech has revolutionized our approach to managing business operations. Their expertise with software solutions like Tally and Marg has streamlined our financial processes, leading to greater efficiency and accuracy. The team’s commitment to our success and their responsive support make them a  partner. ",

    },
]



const OurTestimonial = () => {



    const carouselRef = useRef<CarouselRef>(null);
    const prevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const nextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
            easing: "ease-in-out",
        });
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='py-20 lg:px-20 px-6 bg-white'>
            <div className='text-center'>
                <h1 className='text-[#185e9a] text-2xl font-bold underline'>
                    # Our Testimonial
                </h1>

                <p className='text-5xl font-bold font-serif py-6 text-black'>
                    <span className='text-5xl text-[#185e9a]'>What our</span> clients says?
                </p>

                <div className="pt-4 w-full flex justify-center items-center">
                    <hr className="w-[15%] border-t-4 border-blue-800" />
                </div>
            </div>

            <div data-aos="zoom-in-up" className="relative mt-16 w-full ">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 p-0 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
                >
                    <LeftOutlined className="text-2xl text-gray-700" />
                </button>

                <Carousel
                    ref={carouselRef}
                    slidesToShow={4}
                    slidesToScroll={1}
                    infinite
                    autoplay
                    dots={false}
                    arrows={false}
                    className="w-full"
                    responsive={[
                        { breakpoint: 3300, settings: { slidesToShow: 6 } },
                        { breakpoint: 2560, settings: { slidesToShow: 5 } },
                        { breakpoint: 1920, settings: { slidesToShow: 4 } },
                        { breakpoint: 1440, settings: { slidesToShow: 3 } },
                        { breakpoint: 1280, settings: { slidesToShow: 3 } },
                        { breakpoint: 1024, settings: { slidesToShow: 2 } },
                        { breakpoint: 768, settings: { slidesToShow: 1 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } },
                        { breakpoint: 330, settings: { slidesToShow: 1 } }
                    ]}
                >
                    {teamMembers.map((item, index) => (
                        <div key={index} className="px-1 md:px-4 py-8">
                            <div className="flex flex-col  hover:border-orange-400 items-center text-center shadow-lg rounded-2xl bg-white transition-transform duration-300 hover:scale-105 group">
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-40 rounded-full object-cover mt-10 shadow-[0_0_0_4px_#d1d5db] transition-all duration-300 hover:scale-110 group-hover:shadow-orange-500"
                                    />
                                </div>
                                <h1 className="pt-10 text-2xl font-semibold text-gray-800">{item.name}</h1>

                                <p
                                    className="py-4 px-4 text-gray-600 overflow-hidden text-ellipsis max-w-[400px]"
                                    // style={{
                                    //     display: "-webkit-box",
                                    //     WebkitBoxOrient: "vertical",
                                    //     WebkitLineClamp: 4,
                                    //     // overflow: "hidden",
                                    //     textOverflow: "ellipsis",
                                    //     maxHeight: "4em",
                                    //     lineHeight: "1.5em",
                                    // }}
                                >
                                    {item.description}
                                </p>

                                <h2 className="text-lg font-semibold text-gray-700 py-6 group-hover:text-orange-500">{item.role}</h2>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:right-8 top-1/2 transform -translate-y-1/2 bg-white  md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
                >
                    <RightOutlined className="text-2xl text-gray-700" />
                </button>
            </div>
        </div>
    )
}

export default OurTestimonial
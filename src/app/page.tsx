// import AboutUs from "@/component/about-us/AboutUs";
// import CaseStudy from "@/component/case-study/CaseStudy";
// import CompanyProformance from "@/component/company-Proformance/CompanyProformance";
// import ContactUs from "@/component/contact-us/ContactUs";
// import ExecutiveTeam from "@/component/executive-team/ExecutiveTeam";
// import Footer from "@/component/footer/Footer";
// import GoogleReview from "@/component/google-review/GoogleReview";
// import Header from "@/component/header/Header";
// import HomePage from "@/component/homepage/HomePage";
// import UserLocation from "@/component/location/UserLocation";
// import OurCustomer from "@/component/our-customer/OurCustomer";
// import OurProduct from "@/component/our-product/OurProduct";
// import OurService from "@/component/our-service/OurService";
// import OurTestimonial from "@/component/ourtes-timonial/OurTestimonial";
// import Service from "@/component/services/Service";
// import Technoogy from "@/component/technology/Technoogy";

import AboutUs from "../component/about-us/AboutUs";
import CompanyProformance from "../component/company-Proformance/CompanyProformance";
import ContactUs from "../component/contact-us/ContactUs";
import ExecutiveTeam from "../component/executive-team/ExecutiveTeam";
import Footer from "../component/footer/Footer";
import GoogleReview from "../component/google-review/GoogleReview";
import Header from "../component/header/Header";
import HomePage from "../component/homepage/HomePage";
import OurProduct from "../component/our-product/OurProduct";
import OurService from "../component/our-service/OurService";
import OurTestimonial from "../component/ourtes-timonial/OurTestimonial";
import Technoogy from "../component/technology/Technoogy";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HomePage />
      {/* <Service /> */}
      <AboutUs />
      <OurProduct />
      <CompanyProformance />
      <OurService />
      <Technoogy />
      {/* <CaseStudy /> */}
      {/* <OurUsp/> */}
      <ExecutiveTeam />
      {/* <OurCustomer /> */}
      <OurTestimonial/>
      <ContactUs/>
      <GoogleReview/>
      {/* <UserLocation/> */}
      {/* <Footer/> */}
    </>
  );
}

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
import CertificateSection from "../component/certificate/certificate";  
import Technoogy from "../component/technology/Technoogy";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HomePage />
      {/* <Service /> */}
      <AboutUs />
      <OurProduct />
      {/* <CompanyProformance /> */}
      <OurService />
      {/* <Technoogy /> */}
      {/* <ExecutiveTeam /> */}
      <CertificateSection />
      {/* <OurCustomer /> */}
      <OurTestimonial/>
      <ContactUs/>
      <GoogleReview/>
      {/* <UserLocation/> */}
      {/* <Footer/> */}
    </>
  );
}

import { DownOutlined, MailFilled } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import { FcEditImage, FcElectronics, FcGlobe, FcPlanner } from "react-icons/fc";

const Service = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 lg:px-20 px-6 lg:pt-24 pt-10 bg-white">
      <Card
        data-aos="fade-right"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* <MailFilled /> */}
        <FcEditImage className="text-6xl text-[#185e9a]" />
        <h1 className="text-3xl font-serif font-bold text-[#185e9a]">
          Accounting Software
        </h1>
        <p className="text-lg italic">
          Simplify financial management with tools like Tally, Marg, and Busy
          for invoicing, GST, and reporting.
        </p>
        <Button className="!bg-[#185e9a] !py-5 !px-8 !rounded-none !text-white">
          View
        </Button>
      </Card>
      <Card
        data-aos="fade-right"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* <MailFilled/> */}
        <FcGlobe  className="text-6xl text-[#185e9a]" />
        <h1 className="text-3xl font-serif font-bold text-[#185e9a]">Web Development</h1>
        <p className="text-lg italic">
          We design responsive, user-friendly websites to enhance your online
          presence and drive engagement.
        </p>
         <Button className="!bg-[#185e9a] !py-5 !rounded-none !px-8 !text-white">
          View 
        </Button>
      </Card>
      <Card
        data-aos="fade-left"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* <MailFilled/> */}
         <FcPlanner  className="text-6xl text-[#185e9a]" />
        <h1 className="text-3xl font-serif font-bold text-[#185e9a]">ERP Software</h1>
        <p className="text-lg italic">
          Optimize business operations with ERP solutions that integrate
          inventory, resource planning, and more.
        </p>
         <Button className="!bg-[#185e9a] !py-5 !px-8 !rounded-none !text-white">
          View
        </Button>
      </Card>
      <Card
        data-aos="fade-left"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* <MailFilled /> */}
        <FcElectronics  className="text-6xl text-[#185e9a]"/>
        <h1 className="text-3xl font-bold text-[#185e9a] font-serif">Payroll Software</h1>
        <p className="text-lg italic">
          Automate payroll and compliance with reliable tools like greytHR,
          saving time and ensuring accuracy.
        </p>
          <Button className="!bg-[#185e9a] !rounded-none !py-5 !px-8 !text-white">
          View 
        </Button>
      </Card>
    </div>
  );
};

export default Service;

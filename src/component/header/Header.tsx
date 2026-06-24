"use client";

import {
  CloseOutlined,
  DollarCircleFilled,
  DownOutlined,
  ExperimentOutlined,
  MenuFoldOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Button, Drawer, Popover } from "antd";
import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import Image from 'next/image'
import React, { useEffect, useState } from "react";
import {
  AiFillSafetyCertificate,
  AiOutlineSolution,
  AiOutlineSync,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import {
  SiLinuxprofessionalinstitute,
  SiSimplelogin,
} from "react-icons/si";
import {
  MdCrisisAlert,
  MdOutlineAdminPanelSettings,
  MdSchool,
} from "react-icons/md";
import { FcBusinessman, FcComboChart, FcCustomerSupport } from "react-icons/fc";
import { HiOutlineChartBar } from "react-icons/hi";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { LiaCalendarDaySolid } from "react-icons/lia";

const Header = () => {
  const [open, setOpen] = useState(false);
  const img = "/images/logo.webp";

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const Content = () => (
    <div className="bg-[#0b1d5b] text-white flex flex-col gap-4 p-8 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <a
          href="/tallys"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          Tally
        </a>
        <a
          href="/margErp"
          className="!text-blue-300 hover:!text-[#fff]  select-none"
        >
          Marg ERP 9+
        </a>
        <a
          href="/reporting"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          MR Reporting
        </a>
        <a
          href="https://mabsolinfotech.in/hr-demo.php"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          HR Payroll Portal
        </a>
        <a
          href="https://mabsolinfotech.in/crmtest-demo.php"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          DCR Portal
        </a>
        <a
          href="https://mabsolinfotech.in/institute-demo.php"
          className="!text-blue-300 hover:!text-[#fff]  select-none"
        >
          Institute Portal
        </a>
        <a
          href="https://mabsolinfotech.in/school-demo.php"
          className="!text-blue-300 hover:!text-[#fff]  select-none"
        >
          School Portal
        </a>
        <a href="https://hotel.mabsolinfotech.cloud/" className="!text-blue-300 hover:!text-[#fff] select-none">
          Hotel Portal
        </a>
      </div>
    </div>
  );

  const Mega = () => (
    <div className="bg-[#0b1d5b] text-white flex flex-col gap-0 p-8 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <a
          href="/website-development"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          Website Development
        </a>
        <a
          href="/accounting-software"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          Accounting Software
        </a>
        <a
          href="/payroll-software"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          PayRoll Software
        </a>
        <a
          href="/erp-software"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          ERP Software
        </a>
        <a
          href="/sfa-software"
          className="!text-blue-300 hover:!text-[#fff] select-none"
        >
          SFA Software
        </a>
      </div>
    </div>
  );

  const MegaMenu = () => (
    <div className="bg-[#0b1d5b] text-white grid grid-cols-2 gap-0 p-14 ">
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <span className="">Gallery</span>
        <a href="/gallery" className="!text-blue-300 hover:!text-[#fff]">
          Gallery
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-4 font-serif">
        <span>Additional Partners</span>
        <a href="/marg" className="!text-blue-300 hover:!text-[#fff]">
          Marg
        </a>
        <a href="/tally" className="!text-blue-300 hover:!text-[#fff]">
          Tally
        </a>
        <a
          href="/mr-reporting"
          className="!text-blue-300 hover:!text-[#fff]"
        >
          MR Reporting
        </a>
        <a
          href="/greytHR"
          className="!text-blue-300 hover:!text-[#fff]"
        >
          Greythr
        </a>
        <a
          href="/clinic-management"
          className="!text-blue-300 hover:!text-[#fff]"
        >
          Clinic Managment
        </a>
      </div>
    </div>
  );

  const MegaMenuContent = () => (
    <div
      className="bg-[#0b1d5b] text-white grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 2xl:gap-10 p-14"

    >
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span className="">Employee</span>
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300  select-none"
        >
          Employee Attendance
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          Employee Login
        </a>
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span className="">HR Payroll</span>
        <a
          href="https://humanresources.mabsolinfotech.com/admin/index.php"
          className="!text-blue-300 select-none"
        >
          Admin Login
        </a>
        <a
          href="https://humanresources.mabsolinfotech.com/employee/"
          className="!text-blue-300 select-none"
        >
          Employee Login
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>HR Payroll Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/hr/admin/index"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/hr/employee/"
          className="!text-blue-300 select-none"
        >
          Employee Portal
        </a>
        <a
          href="https://mabsolinfotech.in/hr-demo.php"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>DCR</span>
        <a
          href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          Employee Login
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Report
        </a>
        {/* <a href="#">Blog</a> */}
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>DCR Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/crmtest/employee/employee_register.php"
          className="!text-blue-300 select-none"
        >
          Employee Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/crmtest/"
          className="!text-blue-300 select-none"
        >
          Users Portal
        </a>
        <a
          href="https://mabsolinfotech.in/crmtest-demo.php"
          className="!text-blue-300 select-none"
        >
          Get DCR Demo
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
          className="!text-blue-300 select-none"
        >
          Get Demo Or Pricing Detail
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Customer Portal</span>
        <a
          href="https://mabsolinfotech.com/crmtest/index.php"
          className="!text-blue-300 select-none"
        >
          Raise A Ticket
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Report
        </a>
        {/* <a href="#">Get Demo</a> */}
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Testing Portal</span>
        <a
          href="https://mabsolinfotech.in/crmtest-demo.php"
          className="!text-blue-300 select-none"
        >
          DCR Portal
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
          className="!text-blue-300 select-none"
        >
          Customer Portal
        </a>
        {/* <a href="#">Blog</a> */}
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Download Merg ERP Setup</span>
        <a href="#" className="!text-blue-300 select-none">
          Download Merg ERP Setup
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Institute Portal Demo</span>
        <a
          href="https://demo.mabsolinfotech.com/institute/admin/"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/institute/staff/"
          className="!text-blue-300 select-none"
        >
          Staff Portal
        </a>
        <a
          href="https://demo.mabsolinfotech.com/institute/student/"
          className="!text-blue-300 select-none"
        >
          Student Portal
        </a>
        <a
          href="https://mabsolinfotech.com/crmtest/demo_contact.php"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>School Portal</span>
        <a
          href="https://sms.mabsolinfotech.com/school/admin"
          className="!text-blue-300 select-none"
        >
          Admin Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/school/students"
          className="!text-blue-300 select-none"
        >
          Student Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/school/teachers"
          className="!text-blue-300 select-none"
        >
          Teacher Portal
        </a>
        <a
          href="https://sms.mabsolinfotech.com/school/reception"
          className="!text-blue-300 select-none"
        >
          Reception Portal
        </a>
        <a
          href="https://mabsolinfotech.in/school-demo.php"
          className="!text-blue-300 select-none"
        >
          Get Demo
        </a>
      </div>

      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>Wallet Recharge</span>
        <a
          href="https://mabsolinfotech.com/crmtest/wallet_recharge.php"
          className="!text-blue-300 select-none"
        >
          Wallet Recharge
        </a>
      </div>
      <div className="text-sm font-bold flex flex-col gap-3 font-serif">
        <span>All Products Demo</span>
        <a
          href="https://demo.mabsolinfotech.com"
          className="!text-blue-300 select-none"
        >
          All Products Demo
        </a>
      </div>
    </div>
  );

  const router = useRouter();
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isMainSubOpen, setIsMainSubOpen] = useState(false);
  const [isDcrSubOpen, setIsDcrSubOpen] = useState(false);
  const [isHRSubOpen, setIsHRSubOpen] = useState(false);
  const [isHrPayrollSubOpen, setIsHrPayrollSubOpen] = useState(false);
  const [isDCRSubOpen, setIsDCRSubOpen] = useState(false);
  const [isDCRPortalSubOpen, setIsDCRPortalSubOpen] = useState(false);
  const [isCustomerPortalSubOpen, setIsCustomerPortalSubOpen] = useState(false);
  const [isInstituteSubOpen, setIsInstituteSubOpen] = useState(false);
  const [isSchoolSubOpen, setIsSchoolSubOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutGellaryOpen, setIsAboutGellaryOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);



  const toggleMAinSubDropdown = () => setIsMainSubOpen(!isMainSubOpen);
  const toggleMainDropdown = () => setIsMainOpen(!isMainOpen);
  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
  const toggleServiceDropdown = () => setIsServiceOpen(!isServiceOpen);
  const toggleDcrDemoSubmenu = () => setIsDcrSubOpen(!isDcrSubOpen);
  const toggleHRSubmenu = () => setIsHRSubOpen(!isHRSubOpen);
  const togglePayrollSubmenu = () => setIsHrPayrollSubOpen(!isHrPayrollSubOpen);

  const toggleDCRSubmenu = () => setIsDCRSubOpen(!isDCRSubOpen);
  const toggleAdditionalDropdown = () => setIsAdditionalOpen(!isAdditionalOpen);
  const toggleAboutGellaryDropdown = () =>
    setIsAboutGellaryOpen(!isAboutGellaryOpen);
  const toggleDCRPortalSubmenu = () =>
    setIsDCRPortalSubOpen(!isDCRPortalSubOpen);
  const toggleCustomerSubmenu = () =>
    setIsCustomerPortalSubOpen(!isCustomerPortalSubOpen);
  const toggleInstituteSubmenu = () =>
    setIsInstituteSubOpen(!isInstituteSubOpen);
  const toggleSchoolSubmenu = () => setIsSchoolSubOpen(!isSchoolSubOpen);

  const handleSupportClick = () => {
    router.push("https://mabsolinfotech.com/crmtest/index.php");
  };

  const handlecrmtestClick = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-[#0b1d5b] sticky top-0 w-full z-50 shadow-sm">
      <div className="flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 py-2">
        <div>
          <img
            src={img}
            alt="images"
            className="h-[40px] w-[110px] md:h-[50px] md:w-[130px] lg:h-[55px] lg:w-[150px]"

          />
        </div>
        <div className="flex justify-center items-center gap-8 xl:gap-16 min-w-0 overflow-hidden">
          <nav
            data-aos="fade-up"
            className="lg:flex flex-wrap hidden justify-center gap-4 xl:gap-6 items-center text-white text-sm font-semibold"
            style={{ fontFamily: "Roboto,sans-serif" }}
          >
            <div>
              <Link href="/">
                <Button
                  type="link"
                  className="!text-sm !font-extrabold !text-white"
                  style={{ fontFamily: "Roboto,sans-serif" }}
                >
                  Home
                </Button>
              </Link>

            </div>

            <Popover
              content={MegaMenu()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                onClick={() => router.push("/about_us")}
                className="!text-white !text-sm !font-extrabold"
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
              >
                About Us
                 <MdOutlineArrowDropDown />
              </Button>
            </Popover>

            <Popover
              content={Mega()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                onClick={() => router.push("/service-page")}
                className="!text-white !text-sm !font-extrabold"
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
              >
                Service
               <MdOutlineArrowDropDown />
              </Button>
            </Popover>

            {/* <a href="">Service  <MdOutlineArrowDropDown /></a> */}
            <Popover
              content={Content()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                onClick={() => router.push("/software_product")}
                className="!text-white !text-sm !font-extrabold"
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
              >
                Software Products
                 <MdOutlineArrowDropDown />
              </Button>
            </Popover>

            <Popover
              content={MegaMenuContent()}
              trigger="hover"
              placement="bottomLeft"
              styles={{ body: { padding: 0, borderRadius: 8 } }}
            >
              <Button
                type="text"
                className="!text-white !text-sm !font-extrabold"
                style={{
                  fontFamily: "Roboto,sans-serif",
                  padding: "0px",
                  gap: "5px",
                }}
              >
                Mabsol Portal
                 <MdOutlineArrowDropDown />
              </Button>
            </Popover>
          </nav>
          <div className="lg:flex hidden gap-4 items-center">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                onClick={handleSupportClick}
                className="!bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-semibold !px-8 !h-10 !rounded-none !shadow-md hover:!shadow-lg transition-all duration-300"

              >
                Raise a Support Ticket
              </Button>
            </div>

            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                onClick={handlecrmtestClick}
                className="!bg-[#34396e] hover:!bg-blue-600 !text-white !text-sm !font-semibold !px-8 !h-10 !rounded-none !shadow-md hover:!shadow-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:hidden text-white" onClick={handleClick}>
          <MenuFoldOutlined className="text-2xl" />
        </div>
      </div>

      <Drawer
        title={
          <div className="flex justify-center gap-2">
            <img src="/images/logo.webp" alt="Logo" className="h-14 w-auto" />
            {/* <span className="text-lg font-semibold text-black">Menu</span> */}
          </div>
        }
        placement="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
        style={{ backgroundColor: "#0b1d5b", width: "100%" }}
      >
        <nav
          data-aos="fade-up"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="flex flex-col text-lg font-medium"
        >
          <a
            href="/"
            className="!text-white font-medium border-b border-gray-300 py-3 p-2"
          >
            Home
          </a>

          <div className="relative w-full">
            {/* Trigger */}

            <div
              onClick={toggleAboutDropdown}
              className="cursor-pointer font-medium text-lg !text-white  pt-4 p-2"
            >
              <div className="flex justify-between items-center">
                <Link href="/about_us">
                  <div className="cursor-pointer text-white">
                    About Us
                  </div>
                </Link>

                {isAboutOpen ? (
                  <UpOutlined className="text-sm" />
                ) : (
                  <DownOutlined className="text-sm" />
                )}
              </div>
            </div>

            {/* Inline Dropdown Menu */}
            <AnimatePresence initial={false}>
              {isAboutOpen && (
                <motion.div
                  layout
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-[#0b1d5b]  border-none rounded pb-4 text-sm"
                >
                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleAboutGellaryDropdown}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className=" pt-4 py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcComboChart />
                          Gallery
                        </div>

                        {isAboutGellaryOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {isAboutGellaryOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 700 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <Link
                            href="/gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineUser />
                              Gallery
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleAdditionalDropdown}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcBusinessman />
                          Additional Partners
                        </div>

                        {isAdditionalOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isAdditionalOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <Link
                            href="/marg"
                            target="_blank"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Marg
                            </div>
                          </Link>
                          <Link
                            href="/tally"
                            target="_blank"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Tally
                            </div>
                          </Link>
                          <Link
                            href="/mr-reporting"
                            target="_blank"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              MR Reporting
                            </div>
                          </Link>
                          <Link
                            href="/greytHR"
                            target="_blank"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              GreytHr
                            </div>
                          </Link>
                          <Link
                            href="clinic-management"
                            target="_blank"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Clinic Managment
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative w-full">
            {/* Inline Dropdown Menu */}
            <div
              onClick={toggleServiceDropdown}
              className="cursor-pointer font-medium text-lg !text-white  py-3 p-2! "
            >
              <div className="flex justify-between items-center">
                <Link href="/service-page">
                  <div className="cursor-pointer text-white">
                    Service
                  </div>
                </Link>

                {isServiceOpen ? (
                  <UpOutlined className="text-sm" />
                ) : (
                  <DownOutlined className="text-sm" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isServiceOpen && (
                <motion.div
                  layout
                  key="dropdown"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 700 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                >
                  <Link
                    href="/website-development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineUser />
                      Website Development
                    </div>
                  </Link>
                  <Link
                    href="/accounting-software"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineUser />
                      Accounting Software
                    </div>
                  </Link>

                  <Link
                    href="/payroll-software"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineTeam />
                      PayRoll Software
                    </div>
                  </Link>
                  <Link
                    href="/erp-software"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineSync />
                      ERP Software
                    </div>
                  </Link>
                  <Link
                    href="/sfa-software"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <ExperimentOutlined />
                      SFA Software
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative w-full">
            {/* Inline Dropdown Menu */}
            <div
              onClick={toggleMAinSubDropdown}
              className="cursor-pointer font-medium text-lg !text-white  py-3 p-2! "
            >
              <div className="flex justify-between items-center">
                <Link href="/software_product">
                  <div className="cursor-pointer text-white">
                    Software Product
                  </div>
                </Link>
                {isMainSubOpen ? (
                  <UpOutlined className="text-sm" />
                ) : (
                  <DownOutlined className="text-sm" />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isMainSubOpen && (
                <motion.div
                  layout
                  key="dropdown"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 700 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                >
                  <Link
                    href="/tallys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineUser />
                      Tally
                    </div>
                  </Link>
                  <Link
                    href="/margErp"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineUser />
                      Marg ERP 9+
                    </div>
                  </Link>

                  <Link
                    href="/reporting"
                    target="_blank"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineTeam />
                      MR Reporting
                    </div>
                  </Link>
                  <a
                    href="https://mabsolinfotech.in/hr-demo.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineSync />
                      HR Payroll Portal
                    </div>
                  </a>
                  <a
                    href="https://mabsolinfotech.in/crmtest-demo.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <ExperimentOutlined />
                      DCR Portal
                    </div>
                  </a>
                  <a
                    href="https://mabsolinfotech.in/institute-demo.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineTeam />
                      Institute Portal
                    </div>
                  </a>
                  <a
                    href="https://mabsolinfotech.in/school-demo.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineSync />
                      School Portal
                    </div>
                  </a>
                  <Link
                    href="https://hotel.mabsolinfotech.cloud/"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-[#D7E2F5] hover:!text-[#00C16E]"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <ExperimentOutlined />
                      Hotel Portal
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        

          <div className="relative w-full">
            {/* Trigger */}
            <div
              onClick={toggleMainDropdown}
              className="cursor-pointer font-medium text-lg !text-white  pt-4 p-2"
            >
              <div className="flex justify-between items-center">
                <div>Mabsol Portal</div>
                {isMainOpen ? (
                  <UpOutlined className="text-sm" />
                ) : (
                  <DownOutlined className="text-sm" />
                )}
              </div>
            </div>

            {/* Inline Dropdown Menu */}
            <AnimatePresence initial={false}>
              {isMainOpen && (
                <motion.div
                  layout
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-[#0b1d5b]  border-none rounded pb-4 text-sm"
                >
                  <a
                    href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
                    className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                  >
                    <div className="flex justify-start items-center gap-1">
                      <AiOutlineSolution />
                      Employee Attendance
                    </div>
                  </a>

                  {/* *******************************************sub menu******************************************** */}


                  <div className=" w-full">
                    {/* wallet recharge */}
                    <a
                      href="https://mabsolinfotech.com/crmtest/wallet_recharge.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-medium !text-white"
                    >
                      <div className="pt-4 py-2 text-[16px] font-medium flex justify-between items-center hover:text-white transition">

                        <div className="flex justify-start items-center gap-1">
                          <FcComboChart />
                         Wallet Recharge
                        </div>

                      </div>
                    </a>
                    {/* all product demo */}
                    <a
                      href="https://demo.mabsolinfotech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer font-medium !text-white"
                    >
                      <div className="pt-4 py-2 text-[16px] font-medium flex justify-between items-center hover:text-white transition">

                        <div className="flex justify-start items-center gap-1">
                          <FcComboChart />
                          All Products Demo
                        </div>

                      </div>
                    </a>

                    {/* Trigger */}
                    <div
                      onClick={toggleDcrDemoSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className=" pt-4 py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcComboChart />
                          DCR Demo
                        </div>

                        {isDcrSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {isDcrSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 700 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineUser />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineTeam />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <AiOutlineSync />
                              Users Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Get Demo OR Pricing details
                            </div>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={togglePayrollSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcBusinessman />
                          HR Payroll
                        </div>

                        {isHrPayrollSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isHrPayrollSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://humanresources.mabsolinfotech.com/admin/index.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Login
                            </div>
                          </a>
                          <a
                            href="https://humanresources.mabsolinfotech.com/employee/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Login
                            </div>
                          </a>

                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleDCRSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <DollarCircleFilled
                            style={{ fontSize: "14px", color: "#16A34A" }}
                          />
                          HR Payroll Demo
                        </div>

                        {isDCRSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isDCRSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/hr/admin/index"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/hr/employee/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.in/hr-demo.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <ExperimentOutlined />
                              Get Demo
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleHRSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <MdCrisisAlert className=" text-blue-200" />
                          DCR
                        </div>

                        {isHRSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isHRSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://mabsolinfotech.com/crmtest/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Employee Login
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Report
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleDCRPortalSubmenu}
                      className="cursor-pointer font-medium !text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        
                        <div className="flex justify-start items-center gap-1">
                          <AiFillSafetyCertificate />
                          DCR Portal Demo
                        </div>

                        {isDCRPortalSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isDCRPortalSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/employee/employee_register.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Employee Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/crmtest/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              User Portal
                            </div>
                          </a>

                          <a
                            href="https://mabsolinfotech.in/crmtest-demo.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo
                            </div>
                          </a>

                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo Or Pricing Details
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleCustomerSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <FcCustomerSupport />
                          Customer Portal
                        </div>

                        {isCustomerPortalSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isCustomerPortalSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://mabsolinfotech.com/crmtest/index.php"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Raise A Ticket
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/admin/admin_login.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Report
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleInstituteSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="py-2 text-[16px] font-medium flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <SiLinuxprofessionalinstitute />
                          Institute Portal
                        </div>

                        {isInstituteSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isInstituteSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://demo.mabsolinfotech.com/institute/admin/"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/institute/staff/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Staff Portal
                            </div>
                          </a>
                          <a
                            href="https://demo.mabsolinfotech.com/institute/student/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Student Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.in/institute-demo.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>

                  <div className=" w-full">
                    {/* Trigger */}
                    <div
                      onClick={toggleSchoolSubmenu}
                      className="cursor-pointer font-medium text-white"
                    >
                      <div className="pt-2 text-[16px] font-medium flex items-center justify-between">
                        {/* Left Part */}
                        <div className="flex items-center gap-1">
                          <MdSchool className="text-yellow-600" />
                          School Portal
                        </div>

                        {/* Right Part (Arrow) */}
                        {isSchoolSubOpen ? (
                          <UpOutlined className="text-sm" />
                        ) : (
                          <DownOutlined className="text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Inline Dropdown Menu */}
                    <AnimatePresence initial={false}>
                      {/* <motion.div> */}
                      {isSchoolSubOpen && (
                        <motion.div
                          layout
                          key="dropdown"
                          initial={{ opacity: 0, maxHeight: 0 }}
                          animate={{ opacity: 1, maxHeight: 500 }}
                          exit={{ opacity: 0, maxHeight: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0b1d5b] border-none rounded text-sm mt-2"
                        >
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/admin/"
                            className="block hover:border-b hover:border-gray-300 p-2 pt-0 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <MdOutlineAdminPanelSettings />
                              Admin Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/teachers/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Teacher Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/reception/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Reception Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/students/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Student Portal
                            </div>
                          </a>
                          <a
                            href="https://sms.mabsolinfotech.com/dashboard/driver/"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Driver Portal
                            </div>
                          </a>
                          <a
                            href="https://mabsolinfotech.com/crmtest/pricing_contacts.php"
                            className="block hover:border-b hover:border-gray-300 p-2 !text-white"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <SiSimplelogin />
                              Get Demo And Pricing Details
                            </div>
                          </a>
                        </motion.div>
                      )}
                      {/* </motion.div> */}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        <div className="flex justify-center items-center pt-10 gap-6 ">
          <Link href="https://mabsolinfotech.com/crmtest/index.php">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button className="!text-white !bg-orange-500 !hover:bg-orange-600  !font-semibold !text-sm !rounded-none !py-6 !px-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Raise a Support Ticket
              </Button>
            </div>
          </Link>

          <Link href="/contact">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <Button
                type="primary"
                className="!text-white !bg-[#0b1d5b] !py-6 !rounded-none border border-white hover:!bg-white hover:!text-[#0b1d5b] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;

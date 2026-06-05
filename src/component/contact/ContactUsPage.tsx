"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Link from "next/link";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
};
export default function ContactUsPage() {
  const [form] = Form.useForm();
  const [emailVerified, setEmailVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    const email = form.getFieldValue("email");
    if (!email) return toast.error("Please enter your email");

    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      toast.success("OTP sent to your email");
      setOtpSent(true);
    } else {
      toast.error("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    const email = form.getFieldValue("email");
    if (!email || !otp) return message.error("Enter email and OTP");

    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    if (res.ok) {
      toast.success("OTP Verified!");
      setEmailVerified(true);
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleFormSubmit = async (values: FormData) => {
    if (!emailVerified) {
      return message.warning("Please verify your email first");
    }
    console.log("🔍 Form values before submit:", values);
    const res = await fetch("/api/auth/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.subject,
      }),
    });
    console.log("📩 Response from backend:", res);
    if (res.ok) {
      toast.success("Form submitted successfully!");
      form.resetFields();
      setEmailVerified(false);
      setOtpSent(false);
    } else {
      toast.error("Form submission failed");
    }
  };
  return (
    <div className="w-full bg-gray-50 pb-32 px-6">
      <h1 className="py-20 text-center text-4xl text-[#185e9a]  font-bold">
        Contact <span className="text-orange-500!">Us</span>{" "}
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE CONTACT DETAILS */}
        <div>
          <h2 className="text-3xl text-[#185e9a]  font-bold mb-3">
            We'd love to <span className="text-orange-500!">hear from you</span>
           {/* {""} */}
          </h2>
          <p className="text-gray-600 mb-8">
            Contact Mabsol Infotech today for reliable IT and ERP support. Our
            experts help businesses streamline operations with solutions like
            Marg, Tally, Busy, and greytHR.
          </p>

          <h3 className="text-xl text-[#185e9a]  font-semibold mb-4">Reach us through</h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong>
              <br />
              Mabsol Infotech Pvt.Ltd
              SCO-76, 2ND Floor, near railway Crossing, Shree Ram Atta Chakki,
              Ekta Vihar, Sector 19, Panchkula, Haryana 134113, India
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              +919855605181
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              <Link
                className="text-blue-500"
                href="https://mabsolinfotech.com/"
              >
                mabsolinfotech@gmail.com
              </Link>
              <br />
              support@mabsolinfotech.com
            </p>

            <p>
              <strong>Timing:</strong>
              <br />
              Monday to Saturday
              <br />
              10:00 am to 6:30 pm (Except Holidays)
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – ANTD FORM */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h3 className="text-2xl text-[#185e9a]  font-semibold mb-6">Contact Us</h3>

          <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter full name" }]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Enter valid email" },
              ]}
              style={{ marginBottom: 8, paddingBottom: 10 }}
            >
              <Input
                size="large"
                placeholder="Enter your email"
                disabled={emailVerified}
              />
            </Form.Item>

            {/* Move OTP logic outside Form.Item */}
            <div className="">
              {!otpSent && (
                <Button
                  className="!bg-orange-400 !text-white "
                  onClick={handleSendOtp}
                >
                  Send OTP
                </Button>
              )}

              {otpSent && !emailVerified && (
                <div className="mt-4">
                  <Input
                    size="large"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    className="!bg-green-600 !mt-2 !text-white"
                    onClick={handleVerifyOtp}
                  >
                    Verify OTP
                  </Button>
                </div>
              )}

              {emailVerified && (
                <p className="text-green-600 mt-2 font-sans">
                  ✅ Email Verified
                </p>
              )}
            </div>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: "Please enter phone number" }]}
              style={{ paddingTop: 12 }}
            >
              <Input size="large" placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: "Please enter subject" }]}
            >
              {/* <Input size="large" placeholder="Enter subject" /> */}
              <TextArea rows={4} size="large" placeholder="Enter subject" />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
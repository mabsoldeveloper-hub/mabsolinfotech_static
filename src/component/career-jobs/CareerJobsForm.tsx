"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, } from "next/navigation";
import { Form, Input, Button, Upload, message, Checkbox, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Modal } from "antd";


interface Job {
    _id: string;
    title: string;
    company?: string;
    location?: string;
    experience?: string;
    positions?: number;
    qualification?: string;
    jobType?: string;
    timings?: string;
    aboutUs?: string;
    positionOverview?: string;
    responsibilities?: string[];
    requiredSkills?: string[];
    preferredSkills?: string[];
    whatWeOffer?: string[];
    howToApply?: string;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
    expireAt?: Date;
}

export default function CareerJobsForm() {
    const { id } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [openForm, setOpenForm] = useState(false);
    // const expireDate = job?.expireAt ? new Date(job.expireAt) : new Date();
    const expireDate = job?.expireAt
        ? new Date(job.expireAt)
        : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const router = useRouter();
    const [successModalOpen, setSuccessModalOpen] = useState(false);

    const [form] = Form.useForm();
    const [otpSent, setOtpSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;

        fetch(`/api/jobs/${id}`)
            .then((res) => res.json())
            .then((data) =>
                setJob({
                    ...data.job,
                    expireAt: data.job.expireAt ? new Date(data.job.expireAt) : null,
                })
            )
            .catch((err) => console.error(err));
    }, [id]);

    if (!job)
        return (
            <div className="h-screen!">
                {" "}
                <Spin />
            </div>
        );

    // AntD Form onFinish
    // const onFinish = async (values: any) => {
    //     const formData = new FormData();
    //     formData.append("fullName", values.fullName);
    //     formData.append("email", values.email);
    //     formData.append("phone", values.phone);
    //     formData.append("coverLetter", values.coverLetter || "");

    //     // Get file from AntD Upload
    //     if (values.resume && values.resume[0]) {
    //         const file = values.resume[0].originFileObj;
    //         formData.append("resume", file);
    //     }

    //     try {
    //         const res = await fetch("/api/apply", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         const data = await res.json();

    //         if (res.ok) {
    //             toast.success(
    //                 "Application submitted successfully! Email sent to admin."
    //             );
    //         } else {
    //             toast.error(data.message || "Failed to submit");
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         toast.error("Server error, try again later.");
    //     }
    // };
    const handleSendOtp = async () => {
        const email = form.getFieldValue("email");
        if (!email) return message.error("Please enter your email");

        try {
            setLoading(true);

            const res = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                message.success("OTP sent to your email");
                setOtpSent(true);
            } else {
                message.error("Failed to send OTP");
            }
        } catch (error) {
            message.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        const email = form.getFieldValue("email");

        if (!email || !otp)
            return message.error("Please enter email and OTP");

        try {
            setLoading(true);

            const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            if (res.ok) {
                message.success("Email Verified Successfully!");
                setEmailVerified(true);
            } else {
                message.error("Invalid OTP");
            }
        } catch (error) {
            message.error("Verification failed");
        } finally {
            setLoading(false);
        }
    };

    const onFinish = async (values: any) => {
        if (!emailVerified) {
            return message.warning("Please verify your email first");
        }

        if (!values.resume || !values.resume[0]) {
            return message.error("Please upload your resume");
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("fullName", values.fullName);
            formData.append("phone", values.phone);
            formData.append("email", values.email);
            formData.append("jobId", id as string);
            formData.append("resume", values.resume[0].originFileObj);

            const res = await fetch("/api/apply", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setSuccessModalOpen(true);

                form.resetFields();
                setOtpSent(false);
                setEmailVerified(false);
                setOtp("");
            } else {
                message.error("Submission failed");
            }
        } catch (error) {
            message.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleApply = (id: string) => {
        router.push(`/jobsApply/${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto p-8">
            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Left — Job Info */}
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold text-[#185e9a] mb-4">
                        {job.title}
                    </h1>
                    <p className="text-gray-700 mb-2">
                        <strong>Company:</strong> {job.company || "N/A"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Location:</strong> {job.location || "N/A"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {job.experience || "N/A"}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Positions:</strong> {job.positions ?? "N/A"}
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Qualification:</strong> {job.qualification || "N/A"}
                    </p>
                </div>

                {/* Right — Date Card */}
                <div className="md:col-span-1">
                    <div className="shadow-lg border rounded-xl p-5 text-center bg-white">
                        <p className="text-sm font-semibold text-white bg-[#d61b69] py-1 rounded">
                            {expireDate.toLocaleString("en-US", { month: "short" })}.
                        </p>
                        <h1 className="text-5xl font-bold text-gray-800 mt-2">
                            {expireDate.getDate()}
                        </h1>
                        <p className="text-gray-600 mt-1">
                            {expireDate.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                    </div>
                    <p className="text-center mt-3 font-medium text-gray-700">
                        Application closes in
                        <span className="font-bold text-[#185e9a] ml-1">
                            {Math.ceil(
                                (expireDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
                            )}{" "}
                            days
                        </span>
                    </p>
                </div>
            </div>

            {/* Job Overview Sections */}
            <div>
                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    Position Overview
                </h2>
                <p className="text-gray-700 mb-4">
                    {job.positionOverview || "No overview provided."}
                </p>

                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    Responsibilities
                </h2>
                <ul className="list-disc list-inside mb-4">
                    {job.responsibilities?.length ? (
                        job.responsibilities.map((res, idx) => <li key={idx}>{res}</li>)
                    ) : (
                        <li>No responsibilities listed.</li>
                    )}
                </ul>

                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    Required Skills
                </h2>
                <ul className="list-disc list-inside mb-4">
                    {job.requiredSkills?.length ? (
                        job.requiredSkills.map((skill, idx) => <li key={idx}>{skill}</li>)
                    ) : (
                        <li>No required skills listed.</li>
                    )}
                </ul>

                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    Preferred Skills
                </h2>
                <ul className="list-disc list-inside mb-4">
                    {job.preferredSkills?.length ? (
                        job.preferredSkills.map((skill, idx) => <li key={idx}>{skill}</li>)
                    ) : (
                        <li>No preferred skills listed.</li>
                    )}
                </ul>

                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    What We Offer
                </h2>
                <ul className="list-disc list-inside mb-4">
                    {job.whatWeOffer?.length ? (
                        job.whatWeOffer.map((offer, idx) => <li key={idx}>{offer}</li>)
                    ) : (
                        <li>No offerings listed.</li>
                    )}
                </ul>

                <h2 className="text-2xl font-semibold text-[#185e9a] mb-2">
                    How to Apply
                </h2>
                <p>{job.howToApply || "Instructions not provided."}</p>
            </div>

            {/* Apply Form */}
            <div className="mt-12">
                {!openForm && (
                    <button
                        onClick={() => setOpenForm(true)}
                        className="bg-[#185e9a] text-white px-8 py-3 hover:bg-blue-400 transition"
                    >
                        Apply Now
                    </button>
                )}

                {openForm && (
                    <div className="mt-8 bg-white p-6 md:p-10 rounded-xl shadow-lg border animate__animated animate__fadeIn">

                        <h2 className="text-2xl font-semibold text-[#185e9a] mb-6">
                            Apply for this Job
                        </h2>

                        <Form
                            form={form}
                            layout="vertical"
                            className="grid grid-cols-1 gap-6"
                            onFinish={onFinish}
                        >

                            {/* Full Name */}
                            <Form.Item
                                label="Full Name"
                                name="fullName"
                                rules={[{ required: true, message: "Please enter your full name" }]}
                            >
                                <Input placeholder="Enter your full name" size="large" />
                            </Form.Item>

                            {/* Phone */}
                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                rules={[
                                    { required: true, message: "Please enter your phone number" },
                                    { min: 10, message: "Enter a valid phone number" },
                                ]}
                            >
                                <Input placeholder="Enter phone number" size="large" />
                            </Form.Item>

                            {/* Email + Send OTP */}
                            <Form.Item label="Email Address" required>
                                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

                                    {/* Email Input */}
                                    <Form.Item
                                        name="email"
                                        noStyle
                                        rules={[
                                            { required: true, message: "Please enter your email" },
                                            { type: "email", message: "Enter a valid email!" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter email address"
                                            size="large"
                                            disabled={emailVerified}
                                            className="flex-1"
                                            onChange={() => {
                                                setEmailVerified(false);
                                                setOtpSent(false);
                                                setOtp("");
                                            }}
                                        />
                                    </Form.Item>

                                    {/* Verified Badge */}
                                    {emailVerified && (
                                        <span className="flex items-center gap-1 text-green-600 font-medium">
                                            ✅ Verified
                                        </span>
                                    )}

                                    {/* Send OTP Button */}
                                    {!emailVerified && (
                                        <Button
                                            size="large"
                                            className="!bg-orange-400 !text-gray-700"
                                            loading={loading}
                                            onClick={handleSendOtp}
                                        >
                                            Send OTP
                                        </Button>
                                    )}
                                </div>
                            </Form.Item>

                            {/* OTP Section */}
                            {otpSent && !emailVerified && (
                                <div className="mt-3 flex flex-col gap-2">

                                    <Input
                                        size="large"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />

                                    <Button
                                        size="large"
                                        type="primary"
                                        className="!bg-green-600 !text-white"
                                        loading={loading}
                                        onClick={handleVerifyOtp}
                                    >
                                        Verify OTP
                                    </Button>

                                </div>
                            )}

                            {/* Upload Resume */}
                            <Form.Item
                                label="Upload Resume / Documents"
                                name="resume"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => e.fileList}
                                rules={[{ required: true, message: "Please upload your resume" }]}
                            >
                                <Upload beforeUpload={() => false}>
                                    <Button size="large">
                                        Choose File
                                    </Button>
                                </Upload>
                            </Form.Item>

                            {/* Agree Checkbox */}
                            <Form.Item
                                name="agree"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject("You must agree before submitting."),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    <span className="text-sm text-gray-600">
                                        I agree with the storage and handling of my data by this website. *
                                    </span>
                                </Checkbox>
                            </Form.Item>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={loading}
                                    disabled={!emailVerified}
                                    className="bg-[#185e9a] hover:bg-blue-500 px-8 py-5 rounded-full"
                                >
                                    Submit Application
                                </Button>

                                <Button
                                    size="large"
                                    className="px-8 py-5 rounded-full border"
                                    onClick={() => setOpenForm(false)}
                                >
                                    Cancel
                                </Button>

                            </div>

                        </Form>
                    </div>
                )}
            </div>

            {/* success modal*/}
            <Modal
                open={successModalOpen}
                footer={null}
                closable={false}
                centered
            >
                <div className="text-center py-6">
                    <div className="text-green-500 text-5xl mb-4">✔</div>

                    <h2 className="text-xl font-semibold mb-2">
                        Email Sent Successfully
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Your application has been submitted successfully.
                    </p>

                    <Button
                        type="primary"
                        size="large"
                        onClick={() => window.location.reload()} // ✅ PAGE REFRESH
                        className="bg-blue-600 px-10"
                    >
                        OK
                    </Button>
                </div>
            </Modal>

        </div>
    );
}

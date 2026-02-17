"use client";

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Table,
  DatePicker,
  Popconfirm,
  message,
} from "antd";
import { toast } from "react-toastify";

export interface JobType {
  _id: string;
  title: string;
  company: string;
  location: string;
  positions: number;
  qualification: string;
  jobType: string;
  timings: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  category: string;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
}

const { Title } = Typography;
const { TextArea } = Input;

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobType | null>(null);
  const [form] = Form.useForm();

  const fetchJobs = async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    console.log("API Response:", data);

    setJobs(data.jobs || []);  // only this line changed
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const onFinish = async (values: any) => {
    const payload = {
      ...values,
      responsibilities: values.responsibilities.split(","),
      requiredSkills: values.requiredSkills.split(","),
      preferredSkills: values.preferredSkills
        ? values.preferredSkills.split(",")
        : [],
      positions: Number(values.positions),
      expireAt: values.expireAt ? values.expireAt.toISOString() : null,

    };
    console.log(values.expireAt);

    try {
      let res;
      if (editingJob) {
        res = await fetch(`/api/jobs/${editingJob._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();

    if (!res.ok || !data.success) throw new Error(data?.message || "Something went wrong");

    toast.success(editingJob ? "Job updated successfully!" : "Job created successfully!");

    form.resetFields();
    setShowForm(false);
    setEditingJob(null);
    fetchJobs(); // refresh the list
  } catch (error: any) {
    toast.error(error.message || "Something went wrong!");
  }

  };

  // DELETE JOB
  const deleteJob = async (id: string) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();

      toast.success("Job deleted!");
      fetchJobs();
    } catch {
      toast.error("Delete failed");
    }
  };

  // EDIT JOB
  const editJob = (job: any) => {
    setEditingJob(job);
    setShowForm(true);

    form.setFieldsValue({
      ...job,
      responsibilities: job.responsibilities.join(","),
      requiredSkills: job.requiredSkills.join(","),
      preferredSkills: job.preferredSkills?.join(","),
      expireAt: job.expireAt ? dayjs(job.expireAt) : null, //convert to dayjs
    });
  };

  const columns = [
    { title: "Job Title", dataIndex: "title", key: "title" },
    { title: "Positions", dataIndex: "positions", key: "positions" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Expiry Date",
      dataIndex: "expireAt",
      render: (val: string) => new Date(val).toLocaleDateString(),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button type="link" onClick={() => editJob(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Are you sure?"
            onConfirm={() => deleteJob(record._id)}
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col gap-10">

        {/* HEADER & FORM CARD */}
        <Card className="!max-w-7xl mx-auto mb-6 rounded-xl shadow-lg p-6">
          {/* Header: left-aligned */}
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
            <Title
              level={3}
              className="text-[#185e9a] !text-3xl font-semibold"
            >
              Create Job
            </Title>

            {!showForm && (
              <Button
                type="primary"
                size="large"
                className="bg-[#185e9a] hover:bg-[#144d7e] w-full md:w-auto"
                onClick={() => setShowForm(true)}
              >
                + Create Job
              </Button>
            )}
          </div>

          {/* FORM SECTION */}
          {showForm && (
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="mt-6 text-gray-700 text-base"
            >
              <Row gutter={[20, 10]}>
                {/* Job Title */}
                <Col xs={24} md={12}>
                  <Form.Item label="Job Title" name="title" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Enter job title" />
                  </Form.Item>
                </Col>

                {/* Company */}
                <Col xs={24} md={12}>
                  <Form.Item label="Company" name="company" initialValue="Mabsol Infotech">
                    <Input size="large" placeholder="Company" />
                  </Form.Item>
                </Col>

                {/* Location */}
                <Col xs={24} md={12}>
                  <Form.Item label="Location" name="location" initialValue="Panchkula">
                    <Input size="large" placeholder="Location" />
                  </Form.Item>
                </Col>

                {/* Experience */}
                <Col xs={24} md={12}>
                  <Form.Item label="Experience" name="experience">
                    <Input size="large" placeholder="Experience" />
                  </Form.Item>
                </Col>

                {/* Positions */}
                <Col xs={24} md={12}>
                  <Form.Item label="Positions" name="positions" rules={[{ required: true }]}>
                    <Input size="large" type="number" min={0} placeholder="No. of positions" />
                  </Form.Item>
                </Col>

                {/* Qualification */}
                <Col xs={24} md={12}>
                  <Form.Item label="Qualification" name="qualification" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Qualification" />
                  </Form.Item>
                </Col>

                {/* Job Type */}
                <Col xs={24} md={12}>
                  <Form.Item label="Job Type" name="jobType" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Full-time / Internship" />
                  </Form.Item>
                </Col>

                {/* Timings */}
                <Col xs={24} md={12}>
                  <Form.Item label="Office Timings" name="timings" rules={[{ required: true }]}>
                    <Input size="large" placeholder="10 AM - 6 PM" />
                  </Form.Item>
                </Col>

                {/* About Us */}
                <Col xs={24}>
                  <Form.Item label="About Us" name="aboutUs" rules={[{ required: true }]}>
                    <TextArea rows={3} placeholder="About your company..." />
                  </Form.Item>
                </Col>

                {/* Position Overview */}
                <Col xs={24}>
                  <Form.Item label="Position Overview" name="positionOverview" rules={[{ required: true }]}>
                    <TextArea rows={3} placeholder="Describe the position..." />
                  </Form.Item>
                </Col>

                {/* Responsibilities */}
                <Col xs={24}>
                  <Form.Item label="Key Responsibilities" name="responsibilities" rules={[{ required: true }]}>
                    <Input size="large" placeholder="e.g. Manage team, Write reports" />
                  </Form.Item>
                </Col>

                {/* Skills */}
                <Col xs={24}>
                  <Form.Item label="Required Skills" name="requiredSkills" rules={[{ required: true }]}>
                    <Input size="large" placeholder="e.g. HTML, CSS, React" />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item label="Preferred Skills" name="preferredSkills">
                    <Input size="large" placeholder="e.g. Next.js, UI/UX" />
                  </Form.Item>
                </Col>

                {/* What we offer */}
                <Col xs={24} md={12}>
                  <Form.Item label="What You Offer" name="whatWeOffer" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Write your offer" />
                  </Form.Item>
                </Col>

                {/* How to apply */}
                <Col xs={24} md={12}>
                  <Form.Item label="How to Apply" name="howToApply" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Email / Website / Phone" />
                  </Form.Item>
                </Col>

                {/* Category */}
                <Col xs={24} md={12}>
                  <Form.Item label="Job Category" name="category" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Developer / Designer" />
                  </Form.Item>
                </Col>

                {/* Expire Date */}
                <Col xs={24} md={12}>
                  <Form.Item label="Expire Date" name="expireAt" rules={[{ required: true }]}>
                    <DatePicker className="w-full" size="large" />
                  </Form.Item>
                </Col>

                {/* Action Buttons */}
                <Col xs={24} className="flex justify-end mt-4">
                  <div className="flex space-x-8">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {editingJob ? "Update Job" : "Create Job"}
                    </Button>

                    <Button
                      size="large"
                      className="bg-red-500 text-white hover:bg-red-600"
                      onClick={() => {
                        setShowForm(false);
                        setEditingJob(null);
                        form.resetFields();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </Col>

              </Row>
            </Form>
          )}
        </Card>

        {/* JOBS LIST */}
        <Card className="max-w-7xl mx-auto rounded-2xl shadow-lg p-6">
          <Title level={4} className="!mb-6 text-[#185e9a]">
            Jobs List
          </Title>

          <Table
            columns={columns}
            dataSource={jobs}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            className="rounded-xl overflow-hidden"
          />
        </Card>

      </div>
    </div>

  );
}
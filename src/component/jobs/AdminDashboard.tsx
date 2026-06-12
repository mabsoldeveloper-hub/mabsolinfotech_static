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
  Tag,
} from "antd";

import { Briefcase, MessageSquareText, Plus } from "lucide-react";
import { Select } from "antd";
import { toast } from "react-toastify";

const skillOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
].map((skill) => ({
  label: skill,
  value: skill,
}));

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

// interface ReviewType {
//   _id: string;
//   name: string;
//   company: string;
//   review: string;
//   rating: number;
//   status: string;
// }

interface ApplicationType {
  _id: string;
  fullName: string;
  status: string;
  email: string;
  phone: string;
  rating: number;
  coverLetter: string;
  resumeFileName: string;
  resumeFilePath: string;
  resumeFileType: string;
}

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobType | null>(null);

  const [activeTab, setActiveTab] = useState("jobs");

  const [applications, setApplications] = useState<ApplicationType[]>([]);

  const [form] = Form.useForm();

  const fetchApplications = async () => {
    const res = await fetch("/api/apply");
    const data = await res.json();
    // console.log("respons application", data);

    setApplications(data.applications);
  };

  // FETCH JOBS
  const fetchJobs = async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    console.log("jobs api", data);
    setJobs(data.jobs);
  };

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  // CREATE / UPDATE JOB
  const onFinish = async (values: any) => {
    const payload = {
      ...values,
      responsibilities: values.responsibilities.split(","),
      requiredSkills: values.requiredSkills || [],
      preferredSkills: values.preferredSkills || [],
      positions: Number(values.positions),
      expireAt: values.expireAt ? values.expireAt.toISOString() : null,
    };

    try {
      let res;

      if (editingJob) {
        res = await fetch(`/api/jobs/${editingJob._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Something went wrong");
      }

      toast.success(
        editingJob ? "Job updated successfully!" : "Job created successfully!",
      );

      form.resetFields();

      setShowForm(false);
      setEditingJob(null);

      fetchJobs();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  // DELETE JOB
  const deleteJob = async (id: string) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      });

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
      expireAt: job.expireAt ? dayjs(job.expireAt) : null,
    });
  };

  // REVIEW ACTIONS
  const approveReview = (id: string) => {
    const updated = applications.map((item) =>
      item._id === id ? { ...item, status: "approved" } : item,
    );

    setApplications(updated);

    toast.success("Review Approved");
  };

  const rejectReview = (id: string) => {
    const updated = applications.map((item) =>
      item._id === id ? { ...item, status: "rejected" } : item,
    );

    setApplications(updated);

    toast.error("Review Rejected");
  };

  // JOB TABLE
  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },

    {
      title: "Positions",
      dataIndex: "positions",
    },

    {
      title: "Category",
      dataIndex: "category",
    },

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

  // REVIEW TABLE
  const reviewColumns = [
    {
      title: "Customer",
      dataIndex: "fullName",
    },

    {
      title: "Company",
      dataIndex: "company",
    },

    {
      title: "Review",
      dataIndex: "review",

      render: (text: string) => <div className="max-w-[350px]">{text}</div>,
    },

    {
      title: "Rating",
      dataIndex: "rating",

      render: (rating: number) => <span>{rating} ⭐</span>,
    },

    {
      title: "Status",
      dataIndex: "status",

      render: (status?: string) => (
        <Tag
          color={
            status === "approved"
              ? "green"
              : status === "rejected"
                ? "red"
                : "orange"
          }
        >
          {(status || "pending").toUpperCase()}
        </Tag>
      ),
    },

    {
      title: "Action",

      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            className="bg-green-600"
            onClick={() => approveReview(record._id)}
          >
            Accept
          </Button>

          <Button danger onClick={() => rejectReview(record._id)}>
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f5f7fb] px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* TOP BAR */}
        <Card className="rounded-3xl border-0 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <Title level={2} className="!mb-1 !text-[#185e9a]">
                Admin Dashboard
              </Title>

              <Text className="text-gray-500">
                Manage jobs and customer reviews
              </Text>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="large"
                type={activeTab === "jobs" ? "primary" : "default"}
                className={`h-12 px-6 rounded-xl ${
                  activeTab === "jobs" ? "bg-[#185e9a]" : ""
                }`}
                onClick={() => setActiveTab("jobs")}
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  Jobs
                </div>
              </Button>

              <Button
                size="large"
                type={activeTab === "reviews" ? "primary" : "default"}
                className={`h-12 px-6 rounded-xl ${
                  activeTab === "reviews" ? "bg-[#185e9a]" : ""
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                <div className="flex items-center gap-2">
                  <MessageSquareText size={18} />
                  Reviews
                </div>
              </Button>
            </div>
          </div>
        </Card>

        {/* JOBS SECTION */}
        {activeTab === "jobs" && (
          <>
            {/* FORM CARD */}
            <Card className="rounded-3xl border-0 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <Title level={3} className="!mb-1 !text-[#185e9a]">
                    Create Job
                  </Title>

                  <Text className="text-gray-500">
                    Add and manage job openings
                  </Text>
                </div>

                {!showForm && (
                  <Button
                    type="primary"
                    size="large"
                    className="bg-[#185e9a] h-12 px-6 rounded-xl"
                    onClick={() => setShowForm(true)}
                  >
                    <div className="flex items-center gap-2">
                      <Plus size={18} />
                      Create Job
                    </div>
                  </Button>
                )}
              </div>

              {showForm && (
                <Form form={form} layout="vertical" onFinish={onFinish}>
                  <Row gutter={[20, 10]}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Job Title"
                        name="title"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Enter job title"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Company"
                        name="company"
                        initialValue="Mabsol Infotech"
                        rules={[
                          {
                            required: true,
                            message: "Please Fill Company Name",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Company"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Location"
                        name="location"
                        initialValue="Panchkula"
                      >
                        <Input
                          size="large"
                          placeholder="Location"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item label="Experience" name="experience">
                        <Input
                          size="large"
                          placeholder="Experience"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Positions"
                        name="positions"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="number"
                          placeholder="No. of positions"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Qualification"
                        name="qualification"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Qualification"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Job Type"
                        name="jobType"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Full-time / Internship"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Office Timings"
                        name="timings"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="10 AM - 6 PM"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="About Us"
                        name="aboutUs"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <TextArea
                          rows={3}
                          placeholder="About company..."
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="Position Overview"
                        name="positionOverview"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <TextArea
                          rows={3}
                          placeholder="Describe position..."
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        label="Responsibilities"
                        name="responsibilities"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <TextArea
                          rows={3}
                          placeholder="React, API, Team"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Required Skills"
                        name="requiredSkills"
                        rules={[{ required: true }]}
                      >
                        <Select
                          mode="tags"
                          size="large"
                          placeholder="Select or type skills"
                          options={skillOptions}
                          showSearch
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Preferred Skills"
                        name="preferredSkills"
                      >
                        <Select
                          mode="tags"
                          size="large"
                          placeholder="Select or type preferred skills"
                          options={skillOptions}
                          showSearch
                        />
                      </Form.Item>
                    </Col>

                    {/* What we offer */}
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="What You Offer"
                        name="whatWeOffer"
                        rules={[{ required: true }]}
                      >
                        <Input size="large" placeholder="Write your offer" />
                      </Form.Item>
                    </Col>

                    {/* How to apply */}
                    {/* <Col xs={24} md={12}>
                      <Form.Item
                        label="How to Apply"
                        name="howToApply"
                        rules={[{ required: true }]}
                      >
                        <Input
                          size="large"
                          placeholder="Email / Website / Phone"
                        />
                      </Form.Item>
                    </Col> */}

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Developer"
                          className="rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Expire Date"
                        name="expireAt"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <DatePicker
                          size="large"
                          className="w-full rounded-xl"
                        />
                      </Form.Item>
                    </Col>

                    {/* BUTTONS */}
                    <Col xs={24}>
                      <div className="flex justify-end gap-4 mt-4">
                        <Button
                          htmlType="submit"
                          type="primary"
                          size="large"
                          className="bg-green-600 h-11 px-8 rounded-xl"
                        >
                          {editingJob ? "Update Job" : "Create Job"}
                        </Button>

                        <Button
                          size="large"
                          danger
                          className="h-11 px-8 rounded-xl"
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

            {/* JOB LIST */}
            <Card className="rounded-3xl border-0 shadow-md">
              <div className="flex items-center justify-between mb-5">
                <Title level={4} className="!mb-0 !text-[#185e9a]">
                  Jobs List
                </Title>

                <Tag color="blue">Total Jobs: {jobs.length}</Tag>
              </div>

              <Table
                columns={columns}
                dataSource={jobs}
                rowKey="_id"
                pagination={{
                  pageSize: 10,
                }}
              />
            </Card>
          </>
        )}

        {/* REVIEWS SECTION */}
        {activeTab === "reviews" && (
          <Card className="rounded-3xl border-0 shadow-md">
            <div className="flex items-center justify-between mb-5">
              <Title level={4} className="!mb-0 !text-[#185e9a]">
                Customer Reviews
              </Title>

              <Tag color="orange">
                Pending Reviews:{" "}
                {applications.filter((r) => r.status === "pending").length}
              </Tag>
            </div>

            <Table
              columns={reviewColumns}
              dataSource={
                Array.isArray(applications) ? applications : [applications]
              }
              rowKey="_id"
              pagination={{
                pageSize: 10,
              }}
            />
          </Card>
        )}
      </div>
    </div>
  );
}

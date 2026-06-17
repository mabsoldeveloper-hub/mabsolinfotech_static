"use client";
import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Table,
  Rate,
  Row,
  Col,
  Popconfirm,
  Typography,
  Avatar,
  Space,
} from "antd";

import { toast } from "react-toastify";

const { Title } = Typography;
const { TextArea } = Input;

interface ReviewType {
  _id: string;
  name: string;
  company: string;
  image: string;
  rating: number;
  review: string;
}

export default function TestForm() {
  const [form] = Form.useForm();

  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const handleSubmit = async (values: any) => {
    const newReview: ReviewType = {
      _id: Date.now().toString(),
      name: values.name,
      company: values.company,
      image: values.image,
      rating: values.rating,
      review: values.review,
    };

    setReviews((prev) => [newReview, ...prev]);

    form.resetFields();

    toast.success("Testimonial Added Successfully");
  };

  const deleteReview = (id: string) => {
    setReviews((prev) =>
      prev.filter((item) => item._id !== id)
    );

    toast.success("Review Deleted");
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",

      render: (image: string) => (
        <Avatar
          src={image}
          size={50}
        />
      ),
    },

    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },

    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",

      render: (rating: number) => (
        <Rate disabled value={rating} />
      ),
    },

    {
      title: "Review",
      dataIndex: "review",
      key: "review",
    },

    {
      title: "Action",
      key: "action",

      render: (_: any, record: ReviewType) => (
        <Space>
          <Popconfirm
            title="Delete Review?"
            onConfirm={() =>
              deleteReview(record._id)
            }
          >
            <Button danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Card className="rounded-3xl shadow-md">

        <Title
          level={3}
          className="!text-[#185e9a]"
        >
          Customer Testimonial Form
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Customer Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message:
                      "Please enter customer name",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter customer name"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Company Name"
                name="company"
                rules={[
                  {
                    required: true,
                    message:
                      "Please enter company name",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter company name"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Image URL"
                name="image"
                rules={[
                  {
                    message:
                      "Please enter image URL",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="https://example.com/image.jpg"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Rating"
                name="rating"
                initialValue={5}
                rules={[
                  {
                    message:
                      "Please select rating",
                  },
                ]}
              >
                <Rate />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Review"
                name="review"
                rules={[
                  {
                    required: true,
                    message:
                      "Please enter review",
                  },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Write review here..."
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="bg-[#185e9a]"
              >
                Add Testimonial
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="mt-10">
          <Table
            columns={columns}
            dataSource={reviews}
            rowKey="_id"
            pagination={{
              pageSize: 5,
            }}
          />
        </div>
      </Card>
    </div>
  );
}
"use client";

import React from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  notification,
  Card,
  message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export default function CreateLogin() {
  const router = useRouter();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Invalid username or password");
        return;
      }
      // SUCCESS TOAST
      toast.success("Login Successful");
      router.push("/admin-jobs-dashboard");
    } catch (error: any) {
      toast.error(error.message || "Error while connecting to server")
      // message.error("Error while connecting to server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-6">
        <Title level={3} className="text-center mb-6 font-semibold">
          Admin Login
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="User Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Enter user email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please Enter Your Password" }]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </Form.Item>


          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="rounded-xl"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

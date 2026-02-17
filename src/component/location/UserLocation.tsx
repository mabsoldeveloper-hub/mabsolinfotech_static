"use client";
import { useEffect, useState } from "react";
import { Table, Tag, Spin } from "antd";

export default function VisitsPage() {
  const [visits, setVisits] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (pos) => {
              await fetch("/api/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  lat: pos.coords.latitude,
                  lon: pos.coords.longitude,
                }),
              });
              fetchVisits();
            },
            async () => {
              await fetch("/api/track", { method: "POST" });
              fetchVisits();
            }
          );
        } else {
          await fetch("/api/track", { method: "POST" });
          fetchVisits();
        }
      } catch (err) {
        console.error("Tracking failed:", err);
        fetchVisits();
      }
    };

    const fetchVisits = async () => {
      try {
        const res = await fetch("/api/visits");
        const data = await res.json();
        setVisits(data);
      } catch (err) {
        console.error("Error fetching visits:", err);
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
  }, []);

  const columns = [
    { title: "IP", dataIndex: "ip", key: "ip" },
    { title: "City", dataIndex: "city", key: "city", render: (v: any) => v || "-" },
    { title: "Region", dataIndex: "region", key: "region", render: (v: any) => v || "-" },
    { title: "Country", dataIndex: "country", key: "country", render: (v: any) => v || "-" },
    { title: "Lat", dataIndex: "lat", key: "lat", render: (v: any) => v || "-" },
    { title: "Lon", dataIndex: "lon", key: "lon", render: (v: any) => v || "-" },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
      render: (v: string) => (
        <Tag color={v === "geolocation" ? "green" : "blue"}>{v.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Time",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (t: string) => new Date(t).toLocaleString(),
    },
  ];

  return (
    <div style={{ padding: 20 }} className="px-40! pt-20! h-[700px]">
      <h1 style={{ marginBottom: 20 }}>🌍 All Visitors</h1>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={visits.map((v, i) => ({ ...v, key: i }))}
          bordered
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
        />
      )}
    </div>
  );
}

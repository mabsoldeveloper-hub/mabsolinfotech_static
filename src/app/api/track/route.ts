import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Visit from "@/models/visit";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI);
}

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  return xff ? xff.split(",")[0].trim() : "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const ip = getClientIp(req);

    // ✅ Geo lookup API
    let geoData: any = {};
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      if (res.ok) geoData = await res.json();
    } catch (e) {
      console.warn("Geo lookup failed", e);
    }

    const visit = await Visit.create({
      ip,
      method: "ipapi",
      city: geoData.city || null,
      region: geoData.region || null,
      country: geoData.country || null,
      lat: geoData.latitude || null, // ✅ latitude
      lon: geoData.longitude || null, // ✅ longitude
      userAgent: req.headers.get("user-agent"),
      url: body.url || req.headers.get("referer") || "direct",
      timestamp: new Date(),
    });

    return NextResponse.json({ ok: true, data: visit });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

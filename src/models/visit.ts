// models/Visit.ts
import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
  ip: String,
  method: String,
  city: String,
  region: String,
  country: String,
  lat: Number,
  lon: Number,
  userAgent: String,
  url: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);

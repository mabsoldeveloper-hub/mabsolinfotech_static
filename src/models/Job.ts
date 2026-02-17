import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for Job Document
export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  experience: string;
  positions: number;
  qualification: string;
  jobType: string;
  timings: string;
  aboutUs: string;
  positionOverview: string;
  // description: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  whatWeOffer: string[];
  howToApply: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  expireAt: Date;
  
}

// Schema
const JobSchema: Schema<IJob> = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, default: "Mabsol Infotech" }, 
    location: { type: String, default: "Panchkula" },      
    positions: { type: Number, required: true },
    qualification: { type: String, required: true },
    jobType: { type: String, required: true },
    timings: { type: String, required: true },
    aboutUs: { type: String, required: true },
    positionOverview: { type: String, required: true },
    // description: { type: String, required: true },
    responsibilities: { type: [String], required: true },
    requiredSkills: { type: [String], required: true },
    preferredSkills: { type: [String], default: [] },
    whatWeOffer: { type: [String], default: [] },
    howToApply: { type: String, required: true },
    category: { type: String, required: true },
    expireAt: { type: Date, required: true }, // required so that always set ho
  },
  {
    timestamps: true, // automatically add createdAt & updatedAt
  }
);
JobSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

// Model
const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;

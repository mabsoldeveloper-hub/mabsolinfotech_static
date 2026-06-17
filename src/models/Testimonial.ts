import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: String,
    company: String,
    review: String,
    image: String,
    rating: {
      type: Number,
      default: 5,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);
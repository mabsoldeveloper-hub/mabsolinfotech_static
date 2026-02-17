import mongoose from "mongoose";

const userFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

export default mongoose.models.UserForm || mongoose.model("UserForm", userFormSchema);

import mongoose, { Schema } from "mongoose";

const categorySchema = Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);

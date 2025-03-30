import mongoose, { Schema } from "mongoose";

const blogSchema = Schema(
  {
    photo: { type: String, default: null },
    date: { type: Date },
    category: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    shortcontent: { type: String, required: true },
    longcontent: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("blog", blogSchema);

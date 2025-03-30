import mongoose, { Schema } from "mongoose";

const commentSchema = Schema(
  {
    blog_id: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: "blog",
      required: true,
    },
    username: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comments", commentSchema);

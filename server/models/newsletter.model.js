import { Schema, model } from "mongoose";

const newsLetter = Schema(
  {
    email: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model("Newsletter", newsLetter);

import { Schema, model } from "mongoose";

const messageSchema = Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model("Message", messageSchema);

// email: { type: String, required: true, unique: true, index: true },
// phone: { type: String, required: true, unique: true, index: true },

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_NAME}blog-site`;
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

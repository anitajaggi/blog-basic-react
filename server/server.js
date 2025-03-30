import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import categoryRoute from "./routes/category.routes.js";
import blogRoute from "./routes/blog.routes.js";
import commentRoute from "./routes/comments.routes.js";
import messageRouter from "./routes/messages.routes.js";
import newsLetterRoute from "./routes/newsletter.routes.js";
import loginRoute from "./routes/login.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());

// Middleware to handle URL-encoded form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello I'm coming from backend!s",
    success: true,
  });
});

app.use("/bloguploads", express.static("bloguploads"));

app.use("/api/categories", categoryRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/comments", commentRoute);
app.use("/api/messages", messageRouter);
app.use("/api/subscriber", newsLetterRoute);
app.use("/api/login", loginRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

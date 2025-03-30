import express from "express";
import {
  createComment,
  getCommentsByBlog,
} from "../controllers/comments.controller.js";

const router = express.Router();

router.post("/", createComment);
router.get("/:blog_id", getCommentsByBlog);

export default router;

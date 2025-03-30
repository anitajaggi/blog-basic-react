import express from "express";

import {
  createMessage,
  deleteMessage,
  getMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", getMessage);
router.delete("/:msgDelId", deleteMessage);

export default router;

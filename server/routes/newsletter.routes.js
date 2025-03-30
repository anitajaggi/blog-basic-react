import express from "express";

import {
  createSubs,
  getSubs,
  deleteSubs,
} from "../controllers/newsletter.controller.js";

const router = express.Router();

router.post("/", createSubs);
router.get("/", getSubs);
router.delete("/:subDelId", deleteSubs);

export default router;

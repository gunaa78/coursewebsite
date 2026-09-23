import express from "express";
import upload from "../middleware/upload.js";

import {
  createCollegeInternship,
  getCollegeInternships,
} from "../controllers/collegeInternshipController.js";

const router = express.Router();

router.post(
  "/",
  upload.single("resume"),
  createCollegeInternship
);

router.get(
  "/",
  getCollegeInternships
);

export default router;
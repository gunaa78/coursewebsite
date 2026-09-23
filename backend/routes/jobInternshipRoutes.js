import express from "express";
import multer from "multer";

import {
  createJobInternship,
  getJobInternships,
} from "../controllers/jobInternshipController.js";

const router = express.Router();

// =========================================================
// MULTER MEMORY STORAGE
// =========================================================

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// =========================================================
// POST JOB INTERNSHIP
// =========================================================

router.post(
  "/",
  upload.single("resume"),
  createJobInternship
);

// =========================================================
// GET JOB INTERNSHIP
// =========================================================

router.get(
  "/",
  getJobInternships
);

// =========================================================
// EXPORT
// =========================================================

export default router;
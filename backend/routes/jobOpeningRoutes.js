const express = require("express");

const {
  createJobOpening,
  getJobOpenings,
} = require("../controllers/jobOpeningController");

const upload = require("../middleware/upload");

const router = express.Router();

// ==============================
// POST JOB APPLICATION
// ==============================

router.post(
  "/",
  upload.single("resume"),
  createJobOpening
);

// ==============================
// GET JOB APPLICATIONS
// ==============================

router.get(
  "/",
  getJobOpenings
);

module.exports = router;
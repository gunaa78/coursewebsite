const express = require("express");
const multer = require("multer");

const {
  createJobInternship,
  getJobInternships,
} = require("../controllers/jobInternshipController");

const router = express.Router();

// ==============================
// MULTER MEMORY STORAGE
// ==============================

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
});

// ==============================
// POST JOB INTERNSHIP
// ==============================

router.post(
  "/",
  upload.single("resume"),
  createJobInternship
);

// ==============================
// GET JOB INTERNSHIP
// ==============================

router.get(
  "/",
  getJobInternships
);

// ==============================
// EXPORT
// ==============================

module.exports = router;
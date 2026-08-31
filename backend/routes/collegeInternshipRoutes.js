const express = require("express");

const router = express.Router();

const {
  createCollegeInternship,
  getCollegeInternships,
} = require("../controllers/collegeInternshipController");

// POST - College Internship Application
const upload = require("../middleware/upload");

router.post(
  "/",
  upload.single("resume"),
  createCollegeInternship
);

// GET - All College Internship Applications
router.get("/", getCollegeInternships);

module.exports = router;
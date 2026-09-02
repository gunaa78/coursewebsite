const express = require("express");
const router = express.Router();

const {
  createCollegeInternship,
  getCollegeInternships,
} = require("../controllers/collegeInternshipController");

const upload = require("../middleware/upload");

router.post(
  "/",
  upload.single("resume"),
  createCollegeInternship
);

router.get("/", getCollegeInternships);

module.exports = router;
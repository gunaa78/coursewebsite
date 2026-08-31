

const express = require("express");
const multer = require("multer");

const {
 createJobOpening ,
  getJobOpenings
} = require("../controllers/jobOpeningController");

const router = express.Router();


// ==============================
// MULTER STORAGE
// ==============================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const fileName =
      Date.now() +
      "-" +
      file.originalname.replace(/\s+/g, "-");

    cb(null, fileName);
  },
});


const upload = multer({
  storage,
});


// ==============================
// POST JOB INTERNSHIP
// ==============================

router.post(
  "/",
  upload.single("resume"),
  createJobOpening
);


// ==============================
// GET JOB INTERNSHIP
// ==============================

router.get(
  "/",
  getJobOpenings
 
);


module.exports = router;
module.exports = router;
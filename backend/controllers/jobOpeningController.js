const JobApplication = require("../models/JobOpening");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

// =====================================================
// CREATE JOB OPENING / APPLICATION
// =====================================================

const createJobOpening = async (req, res) => {
  try {
    console.log("📥 JOB OPENING DATA:", req.body);
    console.log("📄 RESUME:", req.file);

    const {
      jobName,
      name,
      email,
      phone,
      college,
      experience,
      location,
      message,
    } = req.body;

    // REQUIRED FIELD VALIDATION
    if (
      !jobName ||
      !name ||
      !email ||
      !phone ||
      !experience ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // RESUME VALIDATION
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume",
      });
    }

    // UPLOAD RESUME TO CLOUDINARY
    const cloudinaryResult = await uploadToCloudinary(
      req.file.buffer,
      req.file.originalname,
      "hikoo/job-applications/resumes"
    );

    // CREATE APPLICATION
    const application = new JobApplication({
      jobName,
      name,
      email,
      phone,
      college,
      experience,
      location,
      resume: cloudinaryResult.secure_url,
      message,
      status: "Pending",
    });

    // SAVE TO MONGODB
    await application.save();

    res.status(201).json({
      success: true,
      message: "Job application submitted successfully",
      application,
    });
  } catch (error) {
    console.error("❌ CREATE JOB OPENING ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// =====================================================
// GET ALL APPLICATIONS
// =====================================================

const getJobOpenings = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("❌ GET JOB OPENINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// =====================================================
// GET SINGLE APPLICATION
// =====================================================

const getJobOpening = async (req, res) => {
  try {
    const application = await JobApplication.findById(
      req.params.id
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Job application not found",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("❌ GET JOB OPENING ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// =====================================================
// EXPORT
// =====================================================

module.exports = {
  createJobOpening,
  getJobOpenings,
  getJobOpening,
};
const JobInternship = require("../models/JobInternship");
const uploadToCloudinary = require("../utils/uploadToCloudinary");


// CREATE JOB INTERNSHIP APPLICATION
const createJobInternship = async (req, res) => {
  try {
    console.log("📥 JOB INTERNSHIP DATA:", req.body);
    console.log("📄 RESUME:", req.file);

    const {
      name,
      email,
      phone,
      location,
      college,
      course,
      graduationYear,
      educationLevel,
      experience,
      skills,
      internship,
      mode,
      duration,
      startDate,
      noticePeriod,
      message,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume",
      });
    }

    // Upload resume to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(
      req.file.buffer,
      req.file.originalname,
      "hikoo/job-internships/resumes"
    );

    
    
    

    const application = new JobInternship({
      name,
      email,
      phone,
      location,
      college,
      course,
      graduationYear,
      educationLevel,
      experience,
      skills,
      internship,
      mode,
      duration,
      startDate,
      noticePeriod,
      resume: cloudinaryResult.secure_url,
      message,
    });

    const savedApplication = await application.save();

    console.log(
      "✅ JOB INTERNSHIP SAVED:",
      savedApplication
    );

    res.status(201).json({
      success: true,
      message:
        "Job Internship application submitted successfully",
      data: savedApplication,
    });
  } catch (error) {
    console.error(
      "❌ JOB INTERNSHIP ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to submit Job Internship application",
      error: error.message,
    });
  }
};


// GET ALL JOB INTERNSHIP APPLICATIONS
const getJobInternships = async (req, res) => {
  try {
    const applications = await JobInternship.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error(
      "❌ FETCH JOB INTERNSHIP ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch Job Internship applications",
      error: error.message,
    });
  }
};


module.exports = {
  createJobInternship,
  getJobInternships,
};
const CollegeInternship = require("../models/CollegeInternship");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

const createCollegeInternship = async (req, res) => {
  try {
    console.log("========== COLLEGE INTERNSHIP ==========");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

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
  "hikoo/college-internships/resumes"
);

    console.log("CLOUDINARY URL:", cloudinaryResult.secure_url);

    // Save application + Cloudinary URL to MongoDB
    const application = new CollegeInternship({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      college: req.body.college,
      course: req.body.course,
      year: req.body.year,
      internship: req.body.internship,
      mode: req.body.mode,
      duration: req.body.duration,
      startDate: req.body.startDate || "",
      message: req.body.message || "",

      resume: cloudinaryResult.secure_url,
    });

    const savedApplication = await application.save();

    console.log("MongoDB Saved:", savedApplication._id);

    return res.status(201).json({
      success: true,
      message: "College Internship Application Submitted Successfully",
      data: savedApplication,
    });

  } catch (error) {
    console.error("========== COLLEGE INTERNSHIP ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getCollegeInternships = async (req, res) => {
  try {
    const applications = await CollegeInternship.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createCollegeInternship,
  getCollegeInternships,
};
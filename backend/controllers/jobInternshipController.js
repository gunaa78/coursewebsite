import JobInternship from "../models/JobInternship.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";


// =========================================================
// CREATE JOB INTERNSHIP APPLICATION
// =========================================================

export const createJobInternship = async (req, res) => {
  try {
    console.log("========== JOB INTERNSHIP ==========");

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


    // =====================================================
    // CHECK RESUME
    // =====================================================

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume",
      });
    }


    // =====================================================
    // UPLOAD RESUME TO CLOUDINARY
    // =====================================================

    const cloudinaryResult = await uploadToCloudinary(
      req.file.buffer,
      req.file.originalname,
      "hikoo/job-internships/resumes"
    );


    console.log(
      "☁️ CLOUDINARY URL:",
      cloudinaryResult.secure_url
    );


    // =====================================================
    // SAVE TO MONGODB
    // =====================================================

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
      savedApplication._id
    );


    // =====================================================
    // SUCCESS RESPONSE
    // =====================================================

    return res.status(201).json({
      success: true,
      message:
        "Job Internship application submitted successfully",
      data: savedApplication,
    });

  } catch (error) {

    console.error(
      "========== JOB INTERNSHIP ERROR =========="
    );

    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to submit Job Internship application",
      error: error.message,
    });
  }
};


// =========================================================
// GET ALL JOB INTERNSHIP APPLICATIONS
// =========================================================

export const getJobInternships = async (req, res) => {
  try {

    const applications = await JobInternship.find()
      .sort({ createdAt: -1 });


    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });

  } catch (error) {

    console.error(
      "❌ FETCH JOB INTERNSHIP ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch Job Internship applications",
      error: error.message,
    });
  }
};
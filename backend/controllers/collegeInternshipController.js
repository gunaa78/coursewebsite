const CollegeInternship = require("../models/CollegeInternship");

const createCollegeInternship = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      college,
      course,
      year,
      internship,
      mode,
      duration,
      startDate,
      message,
    } = req.body;
     console.log("RESUME:", req.file);

    const application = new CollegeInternship({
      name,
      email,
      phone,
      college,
      course,
      year,
      internship,
      mode,
      duration,
      startDate,
      message,
       resume: req.file?.filename,
    });

    const savedApplication = await application.save();

    res.status(201).json({
      success: true,
      message: "College Internship Application Submitted Successfully",
      data: savedApplication,
    });
  } catch (error) {
    console.error("College Internship Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCollegeInternships = async (req, res) => {
  try {
    const applications = await CollegeInternship.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
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
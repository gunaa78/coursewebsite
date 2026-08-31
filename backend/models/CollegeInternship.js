const mongoose = require("mongoose");

const collegeInternshipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    college: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: String,
      required: true,
    },

    internship: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      required: true,
      enum: ["Online", "Offline", "Hybrid"],
    },

    duration: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
      default: "",
    },

    resume: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const CollegeInternship = mongoose.model(
  "CollegeInternship",
  collegeInternshipSchema
);

module.exports = CollegeInternship;
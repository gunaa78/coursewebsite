const mongoose = require("mongoose");

const jobOpeningSchema = new mongoose.Schema(
  {
    linkedinJobId: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      default: "Engineering",
    },

    description: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "Full Time",
    },

    experience: {
      type: String,
      default: "",
    },

    linkedinUrl: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    source: {
      type: String,
      default: "linkedin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "JobOpening",
  jobOpeningSchema
);n
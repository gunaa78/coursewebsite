const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {

    console.log("📥 CONTACT DATA:", req.body);

    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !subject ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      company,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      contact,
    });

  } catch (error) {

    console.error(
      "❌ CONTACT ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};
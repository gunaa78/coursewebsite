const express = require("express");

const router = express.Router();

const {
  createContact,
} = require("../controllers/openingController");

router.post("/", createContact);

module.exports = router;
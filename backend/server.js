const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


// ==============================
// ROUTES
// ==============================

const collegeInternshipRoutes =
  require("./routes/collegeInternshipRoutes");

const jobInternshipRoutes =
  require("./routes/jobInternshipRoutes");
  const jobOpeningRoutes = require("./routes/jobOpeningRoutes");

  const Contactroutes = require("./routes/ContactRoute");


// ==============================
// APP
// ==============================

const app = express();


// ==============================
// MIDDLEWARE
// ==============================

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ==============================
// UPLOADS
// ==============================

app.use(
  "/uploads",
  express.static("uploads")
);


// ==============================
// HOME
// ==============================

app.get("/", (req, res) => {
  res.json({
    message:
      "College & Job Internship Backend API Running",
  });
});


// ==============================
// COLLEGE INTERNSHIP
// ==============================

app.use(
  "/api/college-internships",
  collegeInternshipRoutes
);


// ==============================
// JOB INTERNSHIP
// ==============================

app.use(
  "/api/job-internships",
  jobInternshipRoutes
);




app.use(
  "/api/job-openings/applications",
  jobOpeningRoutes
);




app.use(
  "/api/contact",
   Contactroutes
)


// ==============================
// PORT
// ==============================

const PORT = process.env.PORT || 5000;


// ==============================
// MONGODB
// ==============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(
        `🚀 Server Running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "❌ MongoDB Error:",
      error.message
    );
  });
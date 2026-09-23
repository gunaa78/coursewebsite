import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

/* =========================================================
   ROUTES
========================================================= */

// import authRoutes from "./routes/authRoutes.js";

import collegeInternshipRoutes from "./routes/collegeInternshipRoutes.js";

import jobInternshipRoutes from "./routes/jobInternshipRoutes.js";

import jobOpeningRoutes from "./routes/jobOpeningRoutes.js";

import Contactroutes from "./routes/ContactRoute.js";

import jobOpeningRoutesss from "./routes/jobOpeningRoutess.js";

// import customJobCardRoutes from "./routes/customJobCardRoutes.js";


/* =========================================================
   DOTENV
========================================================= */

dotenv.config();


/* =========================================================
   APP
========================================================= */

const app = express();


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


/* =========================================================
   AUTH
========================================================= */

// app.use(
//   "/api/auth",
//   authRoutes
// );


/* =========================================================
   COLLEGE INTERNSHIP
========================================================= */

app.use(
  "/api/college-internships",
  collegeInternshipRoutes
);


/* =========================================================
   JOB INTERNSHIP
========================================================= */

app.use(
  "/api/job-internships",
  jobInternshipRoutes
);


/* =========================================================
   JOB APPLICATIONS
========================================================= */

app.use(
  "/api/job-openings/applications",
  jobOpeningRoutes
);


/* =========================================================
   CONTACT
========================================================= */

app.use(
  "/api/contact",
  Contactroutes
);


/* =========================================================
   JOB OPENINGS
========================================================= */

app.use(
  "/api/job-openings",
  jobOpeningRoutesss
);


/* =========================================================
   CUSTOM JOB CARDS
========================================================= */

// app.use(
//   "/api/custom-job-cards",
//   customJobCardRoutes
// );


/* =========================================================
   HOME / TEST
========================================================= */

app.get(
  "/",
  (req, res) => {
    res.status(200).json({
      success: true,
      message:
        "Hikoo Backend API Running",
    });
  }
);


/* =========================================================
   DATABASE + SERVER
========================================================= */

const PORT =
  process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log(
      "✅ MongoDB Connected"
    );

    app.listen(
      PORT,
      () => {
        console.log(
          `🚀 Server Running on http://localhost:${PORT}`
        );
      }
    );
  })
  .catch((error) => {
    console.error(
      "❌ MongoDB Error:",
      error.message
    );
  });
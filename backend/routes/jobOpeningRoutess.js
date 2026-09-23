const express = require("express");

const router = express.Router();

const JobOpening =
  require("../models/JobOpeningg");


// ============================================
// GET ACTIVE JOBS
// ============================================

router.get("/", async (req, res) => {

  try {

    const jobs =
      await JobOpening.find({
        isActive: true,
      })
      .sort({
        createdAt: -1,
      });

    res.status(200).json(jobs);

  } catch (error) {

    console.error(
      "Get Jobs Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to fetch jobs",
    });
  }
});


// ============================================
// SYNC ONE LINKEDIN JOB
// ============================================

router.post(
  "/sync",
  async (req, res) => {

    try {

      const {
        linkedinJobId,
        title,
        department,
        description,
        location,
        type,
        experience,
        linkedinUrl,
        isActive,
      } = req.body;


      if (
        !linkedinJobId ||
        !title
      ) {

        return res.status(400).json({
          message:
            "linkedinJobId and title are required",
        });
      }


      const job =
        await JobOpening.findOneAndUpdate(

          {
            linkedinJobId,
          },

          {
            linkedinJobId,

            title,

            department:
              department ||
              "Engineering",

            description:
              description || "",

            location:
              location || "",

            type:
              type ||
              "Full Time",

            experience:
              experience || "",

            linkedinUrl:
              linkedinUrl || "",

            isActive:
              isActive !== false,

            source:
              "linkedin",
          },

          {
            new: true,

            upsert: true,
          }
        );


      res.status(200).json({

        message:
          "LinkedIn job synced",

        job,

      });

    } catch (error) {

      console.error(
        "Sync Job Error:",
        error
      );

      res.status(500).json({

        message:
          "Failed to sync LinkedIn job",

      });
    }
  }
);


// ============================================
// CLOSE JOB
// ============================================

router.put(
  "/:linkedinJobId/close",
  async (req, res) => {

    try {

      const job =
        await JobOpening.findOneAndUpdate(

          {
            linkedinJobId:
              req.params.linkedinJobId,
          },

          {
            isActive: false,
          },

          {
            new: true,
          }
        );


      if (!job) {

        return res.status(404).json({

          message:
            "Job not found",

        });
      }


      res.status(200).json({

        message:
          "Job closed",

        job,

      });

    } catch (error) {

      console.error(
        "Close Job Error:",
        error
      );

      res.status(500).json({

        message:
          "Failed to close job",

      });
    }
  }
);



router.delete("/:id", async (req, res) => {
  try {
    const deletedJob = await JobOpening.findByIdAndDelete(
      req.params.id
    );

    if (!deletedJob) {
      return res.status(404).json({
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      message: "Job opening deleted successfully",
    });
  } catch (error) {
    console.error("Delete Job Opening Error:", error);

    res.status(500).json({
      message: "Failed to delete job opening",
      error: error.message,
    });
  }
});



router.post("/identify-image", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    return res.status(200).json({
      positionName: "MERN Stack Developer",
    });

  } catch (error) {
    console.error("Identify Image Error:", error);

    res.status(500).json({
      message: "Failed to identify position",
      error: error.message,
    });
  }
});



module.exports = router;
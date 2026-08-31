import { motion } from "framer-motion";
import { useState } from "react";

import InternshipApplication from "./InternshipApplication";
import Collageinternship from "./Collageinternship";

function Internship() {
  const [type, setType] = useState("job");

  const titleWords = [
    "Build",
    "Your",
    "Career",
    "With",
    "Real-World",
    "Experience",
  ];

  return (
    <section
      id="internship"
      className="
        relative
        bg-[#f7f9fc]
        overflow-hidden
        pt-28
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-100
          rounded-full
          blur-3xl
          opacity-60
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[700px]
          left-0
          w-[400px]
          h-[400px]
          bg-indigo-100
          rounded-full
          blur-3xl
          opacity-50
          pointer-events-none
        "
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1400px]
          mx-auto
          px-6
          lg:px-12
          w-full
          py-20
        "
      >
        <div className="max-w-5xl">

          {/* Label */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-blue-600
              font-semibold
              tracking-[0.3em]
              uppercase
              mb-6
            "
          >
            Internship Program
          </motion.p>

          {/* Heading */}

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              text-[#111827]
              leading-[1.08]
              flex
              flex-wrap
              gap-x-4
            "
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  word === "Real-World" || word === "Experience"
                    ? "text-blue-600"
                    : ""
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="
              mt-8
              text-lg
              md:text-xl
              text-gray-600
              leading-8
              max-w-2xl
            "
          >
            Gain hands-on experience, work on real projects,
            and develop the technical skills you need to build
            a successful career in the technology industry.
          </motion.p>

          {/* =====================================================
              TYPE BUTTONS
          ===================================================== */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            {/* JOB INTERNSHIP */}

            <button
              type="button"
              onClick={() => {
                setType("job");

                setTimeout(() => {
                  document
                    .getElementById("internship-content")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
              className={`
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                ${
                  type === "job"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }
              `}
            >
              Job Internship

              <span className="ml-3">
                →
              </span>
            </button>

            {/* COLLEGE INTERNSHIP */}

            <button
              type="button"
              onClick={() => {
                setType("college");

                setTimeout(() => {
                  document
                    .getElementById("internship-content")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
              className={`
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                ${
                  type === "college"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }
              `}
            >
              College Internship

              <span className="ml-3">
                →
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* =====================================================
          DYNAMIC INTERNSHIP CONTENT
      ===================================================== */}

      <div
        id="internship-content"
        className="relative z-10"
      >

        {type === "job" ? (
          <InternshipApplication />
        ) : (
          <Collageinternship />
        )}

      </div>

    </section>
  );
}

export default Internship;
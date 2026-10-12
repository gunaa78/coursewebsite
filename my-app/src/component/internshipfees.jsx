import React from "react";
import {
  Code2,
  Smartphone,
  Brain,
  Cloud,
  ShieldCheck,
  Bug,
  Palette,
  Network,
  CheckCircle2,
  ArrowRight,
  Clock,
  GraduationCap,
  IndianRupee,
  Sparkles,
} from "lucide-react";

const internshipGroups = [
  {
    icon: Code2,
    courses: [
      "Java Full Stack Development",
      "Python Full Stack Development",
      "MERN Stack",
      "MEAN Stack",
      ".NET Full Stack Development",
      "PHP / Laravel",
      "Web Development",
    ],
  },
  {
    icon: Smartphone,
    courses: [
      "Android Development",
      "iOS Development",
      "Flutter Development",
      "React Native",
    ],
  },
  {
    icon: Brain,
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Data Science",
      "Data Analytics",
      "Power BI",
    ],
  },
  {
    icon: Cloud,
    courses: ["AWS", "Microsoft Azure", "Cloud Computing", "DevOps"],
  },
  {
    icon: ShieldCheck,
    courses: ["Cyber Security", "Ethical Hacking", "Network Security"],
  },
  {
    icon: Bug,
    courses: ["Manual Testing", "Automation Testing", "API Testing"],
  },
  {
    icon: Palette,
    courses: ["UI/UX Design", "Figma"],
  },
  {
    icon: Network,
    courses: ["CCNA", "Linux Administration"],
  },
];

const durations = ["15 Days", "30 Days", "60 Days"];

export default function TechnicalInternships({ onApply }) {
  const courses = internshipGroups.flatMap((group) =>
    group.courses.map((course) => ({
      course,
      icon: group.icon,
    }))
  );

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm">
              <Sparkles size={14} />
              Technical Internships
            </span>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Programs
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Choose from our technical internship programs with flexible
              15, 30 and 60 day durations.
            </p>
          </div>

          {/* Program Count and Fee */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-black text-white">
              {String(courses.length).padStart(2, "0")}
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Technical Programs
              </p>
              <p className="mt-1 whitespace-nowrap text-xs font-semibold text-blue-700">
                Registration Fee: ₹1,000
              </p>
            </div>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courses.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.course}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-6"
              >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

                {/* Icon and Number */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                 <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">
                    #{String(index + 1).padStart(2, "0")}
                  </span> 
                </div>

                {/* Course Title */}
                <div className="mb-5">
                  <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <GraduationCap size={13} />
                    For College Students
                  </span>

                  <h3 className="flex min-h-[56px] items-center text-lg font-extrabold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {item.course}
                  </h3>
                </div>

                {/* Registration Fee */}
                <div className="mb-5 flex items-center justify-between gap-2 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-3.5">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Registration Fee
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-xl font-black text-slate-900">
                      <IndianRupee size={19} />
                      1,000
                    </p>
                  </div>

                  <span className="shrink-0 rounded-xl bg-white px-2.5 py-2 text-xs font-bold text-blue-700 shadow-sm">
                    One-time fee
                  </span>
                </div>

                {/* Internship Duration */}
                <div className="mb-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
                    <Clock size={16} className="text-blue-600" />
                    Internship Duration
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {durations.map((duration) => (
                      <div
                        key={duration}
                        className="rounded-xl border border-slate-200 bg-white px-1 py-2.5 text-center text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {duration}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6 space-y-3 border-t border-slate-100 pt-4">
                  <p className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    No fee for mentor guidance & classes
                  </p>

                  <p className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    GST not applicable
                  </p>
                </div>

                {/* Apply Now */}
                <button
                  type="button"
                  onClick={() => {
                    if (onApply) {
                      onApply(item.course);
                    } else {
                      document
                        .getElementById("internship-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600"
                >
                  Apply Now
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

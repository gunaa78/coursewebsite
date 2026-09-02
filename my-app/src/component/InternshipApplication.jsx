import { useState } from "react";
import api from "./axios";


import {
  GraduationCap,
  Check,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

function InternshipApplication() {
  const [submit, setSubmit] = useState("");
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  location: "",
  college: "",
  course: "",
  graduationYear: "",
  educationLevel: "",
  experience: "",
  skills: "",
  internship: "",
  mode: "",
  duration: "",
  startDate: "",
  noticePeriod: "",
  resume: null,
  message: "",
});

  // ...

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

   data.append("name", formData.name);
data.append("email", formData.email);
data.append("phone", formData.phone);
data.append("location", formData.location);
data.append("college", formData.college);
data.append("course", formData.course);
data.append("graduationYear", formData.graduationYear);
data.append("educationLevel", formData.educationLevel);
data.append("experience", formData.experience);
data.append("skills", formData.skills);
data.append("internship", formData.internship);
data.append("mode", formData.mode);
data.append("duration", formData.duration);
data.append("startDate", formData.startDate);
data.append("noticePeriod", formData.noticePeriod);
data.append("message", formData.message);


    // Resume file
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    const response = await api.post(
      "/job-internships",
      data
    );

    console.log("API RESPONSE:", response.data);

    setSubmit(
      "Job Internship Application Submitted Successfully!"
    );

    setFormData({
       name: "",
      email: "",
    phone: "",
  location: "",
  college: "",
  course: "",
  graduationYear: "",
  educationLevel: "",
  experience: "",
  skills: "",
  internship: "",
  mode: "",
  duration: "",
  startDate: "",
  noticePeriod: "",
  resume: null,
  message: "",
    });

  } catch (error) {
    console.error("Submit Error:", error);

    console.log(
      "ERROR RESPONSE:",
      error.response?.data
    );

    alert(
      error.response?.data?.message ||
      "Unable to connect to server"
    );
  }
};

 

  const benefits = [
    "Real project experience",
    "Professional mentorship",
    "Industry workflow exposure",
    "Portfolio development",
    "Resume improvement",
    "Interview preparation",
    "Team collaboration",
    "Technical skill development",
    "Career guidance",
    "Internship certificate",
  ];

  const process = [
    {
      number: "01",
      title: "Submit Application",
      text: "Share your professional details, skills and preferred internship domain.",
    },
    {
      number: "02",
      title: "Profile Review",
      text: "Our team reviews your profile, skills and career interests.",
    },
    {
      number: "03",
      title: "Interview",
      text: "Shortlisted candidates may be contacted for a discussion or interview.",
    },
    {
      number: "04",
      title: "Selection",
      text: "Selected candidates receive internship confirmation and onboarding details.",
    },
    {
      number: "05",
      title: "Work & Learn",
      text: "Work on practical projects with professional guidance and mentorship.",
    },
    {
      number: "06",
      title: "Completion",
      text: "Complete the internship successfully and receive your certificate.",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for a job internship?",
      answer:
        "Graduates, freshers, career beginners and candidates looking to gain practical industry experience can apply.",
    },
    {
      question: "Do I need previous work experience?",
      answer:
        "Previous experience is not mandatory for fresher-oriented internship opportunities. Basic knowledge of the selected domain is helpful.",
    },
    {
      question: "Is the internship project-based?",
      answer:
        "Yes. Interns work on practical projects and industry-oriented tasks.",
    },
    {
      question: "Will there be mentorship?",
      answer:
        "Yes. Interns receive professional guidance throughout the internship.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. Successful completion of the internship is followed by an internship certificate.",
    },
  ];


  return (
    <section className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <div className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl">

            <p className="text-blue-400 font-semibold uppercase tracking-[0.2em] text-sm">
              HIKOO JOB INTERNSHIP
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
              Gain Experience.
              <br />
              Build Your Career.
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-8 max-w-2xl">
              Get practical industry experience, work on real projects
              and develop the professional skills required to start
              your career.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#apply"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold transition rounded-lg "
              >
                Apply for Internship
              </a>

              {/* <a
                href="#domains"
                className="border border-slate-700 hover:border-white px-8 py-4 font-semibold transition"
              >
                Explore Opportunities
              </a> */}

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-800">

            <div>
              <h3 className="text-3xl font-bold">1–6</h3>
              <p className="text-slate-500 mt-2">Months</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">6+</h3>
              <p className="text-slate-500 mt-2">Domains</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-slate-500 mt-2">Practical</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1:1</h3>
              <p className="text-slate-500 mt-2">Mentorship</p>
            </div>

          </div>

        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              ABOUT THE PROGRAM
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Start Your Professional Journey
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              The HIKOO Job Internship Program is designed for graduates,
              freshers and career beginners who want to gain practical
              experience before entering the professional world.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              Interns work on real-world projects, learn professional
              workflows and receive guidance from experienced mentors.
            </p>

          </div>

          <div className="bg-white border border-slate-200 p-8">

            <h3 className="text-2xl font-bold">
              What You Get
            </h3>

            <div className="mt-7 space-y-4">

              {benefits.slice(0, 5).map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4"
                >
                  <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    ✓
                  </span>

                  <span className="text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* DOMAINS */}
      {/* <div id="domains" className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              INTERNSHIP OPPORTUNITIES
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Choose Your Professional Domain
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl leading-7">
              Choose a domain that matches your skills and career goals.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {domains.map((domain) => (

              <div
                key={domain.title}
                className="
                  group
                  bg-slate-50
                  border
                  border-slate-200
                  p-7
                  hover:-translate-y-2
                  hover:border-blue-400
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <div className="text-4xl">
                  {domain.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {domain.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-7">
                  {domain.description}
                </p>

                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-6"
                >
                  Apply for this
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>

              </div>

            ))}

          </div>

        </div>

      </div> */}

      {/* BENEFITS */}
      <div className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">

            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                CAREER BENEFITS
              </p>

              <h2 className="text-4xl font-bold mt-3">
                More Than Just Experience
              </h2>

              <p className="text-slate-600 mt-5 leading-8">
                Build the skills, confidence and professional exposure
                required to take your next career step.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="bg-white border border-slate-200 p-4 flex gap-3"
                >
                  <span className="text-blue-600 font-bold">
                    ✓
                  </span>

                  <span className="text-slate-700">
                    {benefit}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* PROCESS */}
      <div className="bg-slate-950 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              APPLICATION PROCESS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              How It Works
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {process.map((item) => (

              <div
                key={item.number}
                className="border border-slate-800 p-7 hover:border-blue-500 transition"
              >

                <span className="text-blue-400 text-2xl font-bold">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FAQ */}
      <div className="py-20 px-6 bg-slate-100">

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              FAQ
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="bg-white border border-slate-200 p-6"
              >

                <summary className="font-semibold cursor-pointer text-lg">
                  {faq.question}
                </summary>

                <p className="text-slate-600 mt-4 leading-7">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </div>

      {/* APPLICATION */}
     {/* =====================================================
    ADVANCED INTERNSHIP APPLICATION
===================================================== */}

<section
  id="apply"
  className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
>
  {/* Background decoration */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">

    {/* ================= HEADER ================= */}

    <div className="max-w-3xl mb-14">

      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
          Join Hikoo
        </span>
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mt-6 leading-tight">
        Start your
        <span className="text-blue-600"> internship journey.</span>
      </h2>

      <p className="text-slate-500 text-lg leading-8 mt-6 max-w-2xl">
        Take the first step towards building your career with real-world
        projects, industry exposure, mentorship and practical experience.
      </p>

    </div>


    {/* ================= MAIN CARD ================= */}

    <div className="grid lg:grid-cols-[360px_1fr] rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white">

      {/* =================================================
          LEFT INFORMATION PANEL
      ================================================= */}

      <div className="relative bg-slate-950 text-white p-8 md:p-10 lg:p-12 overflow-hidden">

        {/* Decorative circles */}

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-2xl" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />


        <div className="relative z-10">

          {/* Icon */}

          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">

            <GraduationCap size={28} />

          </div>


          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mt-10">
            Internship Program
          </p>


          <h3 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            Build skills.
            <br />
            <span className="text-blue-500">
              Build your future.
            </span>
          </h3>


          <p className="text-slate-400 text-sm leading-7 mt-6">
            Join Hikoo Technology and gain practical experience by
            working on real-world projects with experienced professionals.
          </p>


          {/* ================= BENEFITS ================= */}

          <div className="mt-10 space-y-4">

            {[
              "Real-world project experience",
              "Industry expert mentorship",
              "Practical technical training",
              "Career development",
              "Collaborative environment",
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="w-8 h-8 shrink-0 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center">

                  <Check
                    size={15}
                    className="text-blue-400"
                  />

                </div>

                <span className="text-sm text-slate-300">
                  {item}
                </span>

              </div>

            ))}

          </div>


          {/* ================= PROCESS ================= */}

          <div className="mt-12 pt-8 border-t border-slate-800">

            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Application Process
            </p>

            <div className="mt-6 space-y-5">

              {[
                "Submit Application",
                "Application Review",
                "Interview / Discussion",
                "Internship Confirmation",
              ].map((step, index) => (

                <div
                  key={step}
                  className="flex items-center gap-4"
                >

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      index === 0
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span className="text-sm text-slate-400">
                    {step}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* Bottom */}

          <div className="mt-12 p-4 rounded-2xl bg-slate-900 border border-slate-800">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

              </div>

              <div>

                <p className="text-sm font-semibold">
                  Your information is secure
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  We respect your privacy.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT APPLICATION FORM
      ================================================= */}

      <div className="bg-white p-6 sm:p-10 lg:p-14">

        <form
          onSubmit={handleSubmit}
          className="space-y-12"
        >

          {/* ================= PERSONAL ================= */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                01
              </div>

              <div>

                <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
                  Personal Information
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Tell us about yourself
                </h3>

              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {/* NAME */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>


              {/* PHONE */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>


              {/* LOCATION */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  City / Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / Location"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>

            </div>

          </div>


          {/* ================= EDUCATION ================= */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                02
              </div>

              <div>

                <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
                  Education
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Your academic background
                </h3>

              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {/* COLLEGE */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  College / University
                </label>

                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="College / University"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>


              {/* COURSE */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Course / Degree
                </label>

                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Course / Degree"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                />

              </div>


              {/* GRADUATION */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Graduation Year
                </label>

                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                >

                  <option value="">
                    Select Year
                  </option>

                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>

                </select>

              </div>


              {/* LEVEL */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Education Level
                </label>

                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                >

                  <option value="">
                    Select Education Level
                  </option>

                  <option value="Diploma">
                    Diploma
                  </option>

                  <option value="Undergraduate">
                    Undergraduate
                  </option>

                  <option value="Postgraduate">
                    Postgraduate
                  </option>

                  <option value="Graduate">
                    Graduate
                  </option>

                </select>

              </div>

            </div>

          </div>


          {/* ================= INTERNSHIP ================= */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                03
              </div>

              <div>

                <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
                  Internship Preference
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Choose your career path
                </h3>

              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-5">

              {/* DOMAIN */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Internship Domain
                </label>

                <select
                  name="internship"
                  value={formData.internship}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                >

                  <option value="">
                    Select a Domain
                  </option>

                  <option value="PHP Full Stack Developer">
                    PHP Full Stack Developer
                  </option>

                  <option value="Java Full Stack Developer">
                    Java Full Stack Developer
                  </option>

                  <option value="Python Full Stack Developer">
                    Python Full Stack Developer
                  </option>

                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>

                  <option value="Mobile App Developer">
                    Mobile App Developer
                  </option>

                  <option value="Android Developer">
                    Android Developer
                  </option>

                  <option value="iOS Developer">
                    iOS Developer
                  </option>

                  <option value="Digital Marketing Executive">
                    Digital Marketing Executive
                  </option>

                  <option value="UI/UX Designer">
                    UI/UX Designer
                  </option>

                  <option value="Cloud Engineer">
                    Cloud Engineer
                  </option>

                  <option value="AI Engineer">
                    AI Engineer
                  </option>

                  <option value="Cyber Security Engineer">
                    Cyber Security Engineer
                  </option>

                  <option value="Data Scientist">
                    Data Scientist
                  </option>

                  <option value="Data Analyst">
                    Data Analyst
                  </option>

                  <option value="Software Tester">
                    Software Tester
                  </option>

                  <option value="Game Developer">
                    Game Developer
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* NOTICE PERIOD */}

              <div>

                <label className="text-sm font-semibold text-slate-700">
                  Notice Period
                </label>

                <select
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                >

                  <option value="">
                    Select Notice period
                  </option> 

                  <option value="Immediate">
                    Immediate
                  </option>

                  <option value="15 Days">
                    15 Days
                  </option>

                  <option value="30 Days">
                    30 Days
                  </option>

                  <option value="60 Days">
                    60 Days
                  </option>

                  <option value="90 Days">
                    90 Days
                  </option>

                </select>

              </div>

            </div>

          </div>


          {/* ================= ABOUT ================= */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                04
              </div>

              <div>

                <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
                  About You
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Tell us about your goals
                </h3>

              </div>

            </div>


            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about yourself, your skills, interests and what you expect from this internship..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none resize-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
            />

          </div>


          {/* ================= RESUME ================= */}

          <div>
  <div className="flex items-center gap-4 mb-8">
    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
      05
    </div>

    <div>
      <p className="text-xs uppercase tracking-widest font-bold text-blue-600">
        Resume
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mt-1">
        Upload your resume
      </h3>
    </div>
  </div>

  <label className="group block border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition">

    <input
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx"
      onChange={(e) => {
        const file = e.target.files[0];

        if (file) {
          // 5MB validation
          if (file.size > 5 * 1024 * 1024) {
            alert("File size must be less than 5MB");
            e.target.value = "";

            setFormData({
              ...formData,
              resume: null,
            });

            return;
          }

          setFormData({
            ...formData,
            resume: file,
          });
        }
      }}
      required
      className="hidden"
    />

    <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
      <ArrowUpRight size={24} />
    </div>

    <p className="font-bold text-slate-800 mt-4">
      {formData.resume
        ? formData.resume.name
        : "Click to upload your resume"}
    </p>

    <p className="text-sm text-slate-400 mt-2">
      {formData.resume
        ? `${(formData.resume.size / 1024 / 1024).toFixed(2)} MB`
        : "PDF, DOC or DOCX • Maximum 5MB"}
    </p>

    {formData.resume && (
      <p className="text-sm text-blue-600 font-semibold mt-3">
        ✓ Resume selected successfully
      </p>
    )}
  </label>
</div>


          {/* ================= SUBMIT ================= */}

          <div className="pt-8 border-t border-slate-100">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              <div>

                <div className="flex items-center gap-2">

                  <ShieldCheck
                    size={18}
                    className="text-green-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    Your information is protected
                  </span>

                </div>

                <p className="text-xs text-slate-400 mt-2">
                  Our recruitment team will review your application.
                </p>

              </div>


              <button
                type="submit"
                className="group w-full md:w-auto min-w-[260px] flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                Submit Internship Application

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition"
                />

              </button>
              


            </div>
             {submit && (
  <p className="text-green-600 font-semibold text-center mt-4">
    ✓ {submit}
  </p>
)}

          </div>
          
        </form>

      </div>
     

    </div>

  </div>

</section>
    </section>
  );
}

export default InternshipApplication;
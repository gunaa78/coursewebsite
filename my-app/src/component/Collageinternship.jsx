import { useState } from "react";
import api from "./axios";

function Collageinternship() {
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    internship: "",
    mode: "",
    duration: "",
    startDate: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData);

  //   alert("College Internship Application Submitted Successfully!");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     college: "",
  //     course: "",
  //     year: "",
  //     internship: "",
  //     mode: "",
  //     duration: "",
  //     startDate: "",
  //     resume: "",
  //     message: "",
  //   });
  // };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("college", formData.college);
    data.append("course", formData.course);
    data.append("year", formData.year);
    data.append("internship", formData.internship);
    data.append("mode", formData.mode);
    data.append("duration", formData.duration);
    data.append("startDate", formData.startDate);
    data.append("message", formData.message);

    // // Resume
    if (!formData.resume) {
      alert("Please upload your resume");
      return;
    }

    data.append("resume", formData.resume);

    console.log("SUBMIT STARTED");
    // console.log(
    //   "API URL:",
    //   "https://coursewebsite-xw4b.onrender.com/api/college-internships"
    // );


    
    

    // Check FormData
    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    const response = await api.post(
      "/college-internships",
      data
    );

    console.log("API RESPONSE:", response.data);

    setSubmitSuccess(
      "College Internship Application Submitted Successfully!"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      year: "",
      internship: "",
      mode: "",
      duration: "",
      startDate: "",
      resume: null,
      message: "",
    });
  } catch (error) {
    console.log("========== SUBMIT ERROR ==========");

    console.log("FULL ERROR:", error);
    console.log("ERROR MESSAGE:", error.message);
    console.log("ERROR STATUS:", error.response?.status);
    console.log("ERROR DATA:", error.response?.data);
    console.log("ERROR URL:", error.config?.url);

    alert(
      error.response?.data?.message ||
      error.message ||
      "Unknown error"
    );
  }
};

  
  

  // const domains = [
  //   {
  //     title: "Web Development",
  //     description:
  //       "Learn HTML, CSS, JavaScript and modern web development by building practical projects.",
  //     icon: "🌐",
  //   },
  //   {
  //     title: "React.js Development",
  //     description:
  //       "Learn React components, hooks, routing and API integration through real projects.",
  //     icon: "⚛️",
  //   },
  //   {
  //     title: "Node.js Development",
  //     description:
  //       "Understand backend development, REST APIs, Express.js and database integration.",
  //     icon: "🟢",
  //   },
  //   {
  //     title: "Python Development",
  //     description:
  //       "Build Python applications and strengthen your programming and problem-solving skills.",
  //     icon: "🐍",
  //   },
  //   {
  //     title: "UI / UX Design",
  //     description:
  //       "Learn user interface design, wireframes, prototypes and modern design principles.",
  //     icon: "🎨",
  //   },
  //   {
  //     title: "Digital Marketing",
  //     description:
  //       "Learn SEO, social media, content marketing and digital branding fundamentals.",
  //     icon: "📈",
  //   },
  // ];

  const benefits = [
    "Hands-on project experience",
    "Industry-oriented learning",
    "Professional mentor guidance",
    "Practical technical training",
    "Internship certificate",
    "Project completion certificate",
    "Portfolio development",
    "Resume guidance",
    "Career guidance",
    "Interview preparation",
  ];

  const learning = [
    {
      number: "01",
      title: "Practical Skills",
      text: "Apply your classroom knowledge to practical projects and tasks.",
    },
    {
      number: "02",
      title: "Real Projects",
      text: "Work on projects that help you understand real development workflows.",
    },
    {
      number: "03",
      title: "Technical Knowledge",
      text: "Improve your knowledge of modern tools, technologies and frameworks.",
    },
    {
      number: "04",
      title: "Team Work",
      text: "Learn communication, teamwork, Git and professional collaboration.",
    },
    {
      number: "05",
      title: "Problem Solving",
      text: "Improve your logical thinking and ability to solve technical problems.",
    },
    {
      number: "06",
      title: "Career Preparation",
      text: "Build your portfolio and prepare yourself for future job opportunities.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Submit Application",
      text: "Fill out the college internship application form.",
    },
    {
      number: "02",
      title: "Application Review",
      text: "Our team reviews your details and selected internship domain.",
    },
    {
      number: "03",
      title: "Confirmation",
      text: "Selected students receive internship confirmation and instructions.",
    },
    {
      number: "04",
      title: "Training Begins",
      text: "Start your internship with technical training and mentor guidance.",
    },
    {
      number: "05",
      title: "Project Development",
      text: "Work on practical projects and complete assigned tasks.",
    },
    {
      number: "06",
      title: "Certificate",
      text: "Receive your internship certificate after successful completion.",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for the college internship?",
      answer:
        "College and university students from different academic years can apply based on the internship requirements.",
    },
    {
      question: "Can first-year students apply?",
      answer:
        "Yes. Students with basic interest and knowledge can apply for suitable internship domains.",
    },
    {
      question: "What is the internship duration?",
      answer:
        "Students can choose from available internship durations such as 1, 2, 3 or 6 months.",
    },
    {
      question: "Will I receive an internship certificate?",
      answer:
        "Yes. Students who successfully complete the internship program will receive an internship certificate.",
    },
    {
      question: "Is the internship project-based?",
      answer:
        "Yes. Students will gain practical experience through projects and industry-oriented tasks.",
    },
    {
      question: "Will students receive mentor support?",
      answer:
        "Yes. Students will receive guidance from mentors throughout the internship program.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">

      {/* HERO */}

      <div className="bg-gray-950 text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            HIKOO COLLEGE INTERNSHIP
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Learn. Build.
            <br />
            Grow Your Skills.
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
            Gain practical experience through real-world projects,
            professional mentorship and industry-oriented learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="#apply"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Apply for Internship
            </a>

            {/* <a
              href="#domains"
              className="border border-gray-600 hover:border-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Explore Domains
            </a> */}

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            <div>
              <h3 className="text-3xl font-bold">1–6</h3>
              <p className="text-gray-400 mt-2">
                Months
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">6+</h3>
              <p className="text-gray-400 mt-2">
                Domains
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Practical
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                1:1
              </h3>
              <p className="text-gray-400 mt-2">
                Mentorship
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ABOUT */}

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-600 font-semibold">
              ABOUT THE PROGRAM
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Turn Classroom Learning Into Practical Skills
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              The HIKOO College Internship Program helps students
              gain practical experience while continuing their
              academic journey.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Students get the opportunity to work on practical
              projects, learn modern technologies and understand
              professional development workflows.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold mb-6">
              Why Join?
            </h3>

            <div className="space-y-4">

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">
                  ✓
                </span>
                <p>
                  Practical industry-oriented training
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">
                  ✓
                </span>
                <p>
                  Real-world project experience
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">
                  ✓
                </span>
                <p>
                  Professional mentor guidance
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">
                  ✓
                </span>
                <p>
                  Portfolio development
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">
                  ✓
                </span>
                <p>
                  Internship certificate
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* DOMAINS */}

      {/* <div
        id="domains"
        className="bg-white py-20 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              INTERNSHIP DOMAINS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Choose Your Learning Path
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Choose a domain based on your course,
              interests and career goals.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {domains.map((domain) => (

              <div
                key={domain.title}
                className="
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-7
                  hover:border-blue-400
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-3xl
                    group-hover:bg-blue-600
                    transition
                  "
                >
                  {domain.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {domain.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {domain.description}
                </p>

                <a
                  href="#apply"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-blue-600
                    font-semibold
                    mt-6
                    hover:text-blue-800
                  "
                >
                  Apply for this →
                </a>

              </div>

            ))}

          </div>

        </div>

      </div> */}


      {/* ELIGIBILITY */}

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 text-white rounded-2xl p-8">

            <p className="text-blue-400 font-semibold">
              ELIGIBILITY
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Who Can Apply?
            </h2>

            <ul className="mt-7 space-y-4 text-gray-300">

              <li>✓ College students</li>
              <li>✓ University students</li>
              <li>✓ First-year students</li>
              <li>✓ Second-year students</li>
              <li>✓ Third-year students</li>
              <li>✓ Final-year students</li>

            </ul>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <p className="text-blue-600 font-semibold">
              PROGRAM DETAILS
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Internship Information
            </h2>

            <div className="mt-7 space-y-5">

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">
                  Duration
                </span>

                <strong>
                  1 – 6 Months
                </strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">
                  Learning
                </span>

                <strong>
                  Project Based
                </strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">
                  Mentorship
                </span>

                <strong>
                  Available
                </strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">
                  Certificate
                </span>

                <strong>
                  Yes
                </strong>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Mode
                </span>

                <strong>
                  Online / Offline
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* LEARNING */}

      <div className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Skills You Will Develop
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {learning.map((item) => (

              <div
                key={item.number}
                className="
                  bg-white
                  rounded-2xl
                  p-7
                  border
                  border-gray-100
                  hover:shadow-lg
                  transition
                "
              >

                <span className="text-blue-600 font-bold text-lg">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* BENEFITS */}

      <div className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">

            <div>

              <p className="text-blue-600 font-semibold">
                INTERNSHIP BENEFITS
              </p>

              <h2 className="text-4xl font-bold mt-3">
                More Than Classroom Learning
              </h2>

              <p className="text-gray-600 mt-5 leading-8">
                Build practical skills, gain confidence and
                prepare yourself for your future career.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="
                    flex
                    items-start
                    gap-3
                    bg-gray-50
                    p-4
                    rounded-lg
                  "
                >

                  <span className="text-blue-600 font-bold">
                    ✓
                  </span>

                  <p className="text-gray-700">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* PROCESS */}

      <div className="bg-gray-950 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-400 font-semibold">
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
                className="
                  border
                  border-gray-800
                  rounded-2xl
                  p-7
                  hover:border-blue-500
                  transition
                "
              >

                <span className="text-blue-400 font-bold text-2xl">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* FAQ */}

      <div className="bg-gray-100 py-20 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
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
                className="
                  bg-white
                  rounded-xl
                  p-6
                  border
                  border-gray-200
                "
              >

                <summary
                  className="
                    font-semibold
                    cursor-pointer
                    text-lg
                  "
                >
                  {faq.question}
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </div>


      {/* APPLICATION FORM */}

     <div
  id="apply"
  className="py-24 px-6 bg-white"
>
  <div className="max-w-4xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">

      <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
        COLLEGE INTERNSHIP
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
        Apply for Internship
      </h2>

      <p className="text-gray-600 mt-4">
        Start building your practical skills and gain valuable
        industry experience.
      </p>

    </div>


    {/* FORM */}
    <form
  onSubmit={handleSubmit}
  className="
    relative
    bg-white
    rounded-[2rem]
    border border-slate-200
    shadow-[0_25px_80px_-20px_rgba(15,23,42,0.15)]
    overflow-hidden
  "
>
  {/* =====================================================
      FORM HEADER
  ===================================================== */}

  <div className="relative bg-slate-950 px-6 md:px-10 py-8 overflow-hidden">

    <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />

    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

      <div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
            Internship Application
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
          Build Your Career With Us
        </h3>

        <p className="text-slate-400 text-sm mt-2 max-w-xl">
          Complete your details below and take the next step toward
          gaining real-world industry experience.
        </p>

      </div>


      <div className="hidden md:flex w-14 h-14 rounded-2xl bg-blue-600 items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-600/30">
        →
      </div>

    </div>

  </div>


  {/* =====================================================
      FORM BODY
  ===================================================== */}

  <div className="p-6 md:p-10 lg:p-12">

    {/* =====================================================
        01 STUDENT INFORMATION
    ===================================================== */}

    <div>

      <div className="flex items-center gap-4 mb-8">

        <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/20">
          01
        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600">
            Personal Details
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Student Information
          </h3>

        </div>

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        {/* NAME */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          />

        </div>


        {/* EMAIL */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          />

        </div>


        {/* PHONE */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          />

        </div>


        {/* COLLEGE */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            College / University
          </label>

          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college / university"
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          />

        </div>


        {/* COURSE */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Course / Degree
          </label>

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="B.E / B.Tech / B.Sc / MCA..."
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-900
              placeholder:text-slate-400
              outline-none
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          />

        </div>


        {/* CURRENT YEAR */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Current Year
          </label>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-700
              outline-none
              cursor-pointer
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          >

            <option value="">
              Select Current Year
            </option>

            <option value="1st Year">
              1st Year
            </option>

            <option value="2nd Year">
              2nd Year
            </option>

            <option value="3rd Year">
              3rd Year
            </option>

            <option value="Final Year">
              Final Year
            </option>

          </select>

        </div>

      </div>
      

    </div>


    {/* =====================================================
        DIVIDER
    ===================================================== */}

    <div className="my-12 h-px bg-slate-100" />


    {/* =====================================================
        02 INTERNSHIP PREFERENCES
    ===================================================== */}

    <div>

      <div className="flex items-center gap-4 mb-8">

        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold border border-blue-100">
          02
        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600">
            Career Path
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Internship Preferences
          </h3>

        </div>

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        {/* DOMAIN */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Internship Domain
          </label>

          <select
            name="internship"
            value={formData.internship}
            onChange={handleChange}
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-700
              outline-none
              cursor-pointer
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
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


        {/* MODE */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Internship Mode
          </label>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-700
              outline-none
              cursor-pointer
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          >

            <option value="">
              Select Internship Mode
            </option>

            <option value="Online">
              Online
            </option>

            <option value="Offline">
              Offline
            </option>

            <option value="Hybrid">
              Hybrid
            </option>

          </select>

        </div>


        {/* DURATION */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Internship Duration
          </label>

          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="
              w-full
              border border-slate-200
              rounded-xl
              px-5 py-4
              bg-slate-50
              text-slate-700
              outline-none
              cursor-pointer
              focus:bg-white
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-500/10
              transition-all
              duration-300
            "
          >

            <option value="">
              Select Duration
            </option>

            <option value="1 Month">
              1 Month
            </option>

            <option value="2 Months">
              2 Months
            </option>

            <option value="3 Months">
              3 Months
            </option>

            <option value="6 Months">
              6 Months
            </option>

          </select>

        </div>

      </div>

    </div>


    {/* =====================================================
        DIVIDER
    ===================================================== */}

    <div className="my-12 h-px bg-slate-100" />


    {/* =====================================================
        03 RESUME & ABOUT
    ===================================================== */}

    <div>

      <div className="flex items-center gap-4 mb-8">

        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold border border-blue-100">
          03
        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600">
            Application
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Additional Information
          </h3>

        </div>

      </div>


      {/* RESUME UPLOAD */}

      
  <label
  className="
    group
    block
    border-2
    border-dashed
    border-slate-200
    rounded-2xl
    p-8
    text-center
    cursor-pointer
    hover:border-blue-500
    hover:bg-blue-50/30
    transition-all
    duration-300
  "
>
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

  {/* Upload Icon */}
  <div
    className="
      w-16
      h-16
      mx-auto
      rounded-2xl
      bg-blue-50
      text-blue-600
      flex
      items-center
      justify-center
      text-2xl
      group-hover:bg-blue-600
      group-hover:text-white
      transition-all
      duration-300
    "
  >
    ↑
  </div>

  {/* Title */}
  <p className="font-bold text-slate-800 mt-5">
    Upload your resume
  </p>

  {/* Selected File Name */}
  {formData.resume ? (
    <p className="text-sm text-green-600 font-semibold mt-3">
      ✓ {formData.resume.name}
    </p>
  ) : (
    <p className="text-sm text-slate-400 mt-2">
      Click here to browse your files
    </p>
  )}

  {/* File Types */}
  <div className="flex justify-center gap-2 mt-4">
    <span
      className="
        px-3
        py-1
        rounded-full
        bg-slate-100
        text-xs
        text-slate-500
      "
    >
      PDF
    </span>

    <span
      className="
        px-3
        py-1
        rounded-full
        bg-slate-100
        text-xs
        text-slate-500
      "
    >
      DOC
    </span>

    <span
      className="
        px-3
        py-1
        rounded-full
        bg-slate-100
        text-xs
        text-slate-500
      "
    >
      DOCX
    </span>
  </div>

  {/* File Size */}
  <p className="text-xs text-slate-400 mt-4">
    Maximum file size: 5MB
  </p>
 </label> 

      {/* MESSAGE */}

      <div className="mt-6">

        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Tell us about yourself
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Tell us about your technical skills, projects, interests and what you expect from this internship..."
          className="
            w-full
            border border-slate-200
            rounded-2xl
            px-5 py-4
            bg-slate-50
            text-slate-900
            placeholder:text-slate-400
            outline-none
            resize-none
            focus:bg-white
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/10
            transition-all
            duration-300
          "
        />

      </div>

    </div>


    {/* =====================================================
        INFORMATION BOX
    ===================================================== */}

    <div className="
      mt-8
      flex
      gap-4
      p-5
      rounded-2xl
      bg-blue-50
      border
      border-blue-100
    ">

      <div className="
        w-10
        h-10
        shrink-0
        rounded-xl
        bg-white
        text-blue-600
        flex
        items-center
        justify-center
        font-bold
        shadow-sm
      ">
        i
      </div>

      <div>

        <p className="font-semibold text-slate-800">
          Before you submit
        </p>

        <p className="text-sm text-slate-500 leading-6 mt-1">
          Please make sure all the information provided is accurate.
          Our recruitment team will review your application and
          contact you regarding the next steps.
        </p>

      </div>

    </div>


    {/* =====================================================
        SUBMIT AREA
    ===================================================== */}

    <div className="mt-10 pt-8 border-t border-slate-100">

      <div className="
        flex
        flex-col
        md:flex-row
        md:items-center
        justify-between
        gap-6
      ">

        {/* SECURITY */}

        <div className="flex items-center gap-3">

          <div className="
            w-10
            h-10
            rounded-xl
            bg-green-50
            text-green-600
            flex
            items-center
            justify-center
          ">
            ✓
          </div>

          <div>

            <p className="text-sm font-semibold text-slate-700">
              Your information is secure
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Your application details are kept confidential.
            </p>

          </div>

        </div>


        {/* BUTTON */}

        <button

          type="submit"
          className="
            group
            w-full
            md:w-auto
            min-w-[280px]
            flex
            items-center
            justify-center
            gap-3
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            shadow-lg
            shadow-blue-600/20
            hover:shadow-xl
            hover:shadow-blue-600/30
            hover:-translate-y-1
            active:translate-y-0
            transition-all
            duration-300
          "
        >

          Submit Internship Application

          <span className="
            text-xl
            group-hover:translate-x-1
            transition-transform
          ">
            →
          </span>

        </button>

      </div>

    </div>

  </div>
  

</form>
{submitSuccess && (
  <p className="text-green-600 font-semibold text-center mt-4">
    ✓ {submitSuccess}
  </p>
)}
 

  </div>
 

</div>


      {/* FINAL CTA */}

      <div className="bg-gray-950 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-400 font-semibold">
            START YOUR LEARNING JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Build Skills Before You Graduate
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Gain practical experience, build your portfolio
            and prepare yourself for your future career with HIKOO.
          </p>

          <a
            href="#apply"
            className="
              inline-block
              mt-8
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-lg
              font-semibold
              transition
            "
          >
            Apply Now
          </a>

        </div>

      </div>

    </section>

    
  );
}

export default Collageinternship;
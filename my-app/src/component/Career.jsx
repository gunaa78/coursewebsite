import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "./axios";

import CareerJobCards from "./CareerJobCards";

import {
  Briefcase,
  MapPin,
  Upload,
  ArrowRight,
  Users,
  Rocket,
  Lightbulb,
  Target,
  HeartHandshake,
  Award,
  Building2,
  Coffee,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   CAREER COMPONENT
========================================================= */

function Career() {
  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =======================================================
     STATES
  ======================================================= */

  const [submitSuccess, setSubmitSuccess] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [openings, setOpenings] = useState([]);
  const [loadingOpenings, setLoadingOpenings] = useState(true);

  /*
    ADMIN TEST MODE

    true = Admin controls visible
    false = Admin controls hidden

    NOTE:
    This is only frontend testing.
    Production-la proper JWT/admin authentication use pannunga.
  */
  const [isAdmin] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =======================================================
     FORM DATA
  ======================================================= */

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    college: "",
    experience: "",
    location: "",
    resume: null,
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  /* =======================================================
     FETCH JOB OPENINGS
  ======================================================= */

  useEffect(() => {
    const fetchOpenings = async () => {
      try {
        setLoadingOpenings(true);

        const response = await api.get("/job-openings");

        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.openings || [];

        setOpenings(data);
      } catch (error) {
        console.error("Failed to fetch job openings:", error);

        setOpenings([]);
      } finally {
        setLoadingOpenings(false);
      }
    };

    fetchOpenings();
  }, []);

  /* =======================================================
     HANDLE FORM CHANGE
  ======================================================= */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    /* =====================================================
       RESUME UPLOAD
    ===================================================== */

    if (name === "resume") {
      const file = files?.[0];

      if (!file) return;

      /* FILE SIZE CHECK */

      if (file.size > 5 * 1024 * 1024) {
        alert("Resume size should be less than 5MB.");

        e.target.value = "";

        return;
      }

      /* FILE TYPE CHECK */

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload PDF, DOC or DOCX file.");

        e.target.value = "";

        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));

      return;
    }

    /* =====================================================
       NORMAL INPUT
    ===================================================== */

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =======================================================
     CLOSE APPLICATION FORM
  ======================================================= */

  const closeForm = () => {
    setShowForm(false);

    setSelectedRole(null);

    setSubmitSuccess("");

    setIsSubmitting(false);

    setFormData(initialFormData);
  };

  /* =======================================================
     HANDLE APPLICATION SUBMIT
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ROLE CHECK */

    if (!selectedRole) {
      alert("Please select a job role.");
      return;
    }

    /* RESUME CHECK */

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitSuccess("");

      const data = new FormData();

      /* JOB NAME */

      data.append("jobName", selectedRole);

      /* NAME */

      data.append("name", formData.name);

      /* EMAIL */

      data.append("email", formData.email);

      /* PHONE */

      data.append("phone", formData.phone);

      /* COLLEGE */

      data.append("college", formData.college);

      /* EXPERIENCE */

      data.append("experience", formData.experience);

      /* LOCATION */

      data.append("location", formData.location);

      /* MESSAGE */

      data.append("message", formData.message);

      /* RESUME */

      data.append("resume", formData.resume);

      /* API */

      await api.post("/job-openings/applications", data);

      /* SUCCESS */

      setSubmitSuccess(
        "Job Application Submitted Successfully!"
      );

      /* RESET FORM DATA */

      setFormData(initialFormData);
    } catch (error) {
      console.error("SUBMIT ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Unable to connect to server"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     BENEFITS
  ======================================================= */

  const benefits = [
    {
      icon: Rocket,
      title: "Real-World Projects",
      text: "Work on practical projects that create meaningful business impact.",
    },
    {
      icon: Users,
      title: "Supportive Team",
      text: "Work with experienced professionals in a collaborative environment.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      text: "Improve your technical and professional skills every day.",
    },
    {
      icon: Target,
      title: "Career Growth",
      text: "Take ownership of your work and grow with the organization.",
    },
    {
      icon: HeartHandshake,
      title: "Healthy Culture",
      text: "Be part of a respectful and positive workplace.",
    },
    {
      icon: Award,
      title: "Recognition",
      text: "Your contribution and achievements are valued and recognized.",
    },
  ];

  /* =======================================================
     HIRING PROCESS
  ======================================================= */

  const hiringProcess = [
    {
      number: "01",
      title: "Apply",
      text: "Choose a suitable position and submit your application.",
    },
    {
      number: "02",
      title: "Review",
      text: "Our team reviews your profile and experience.",
    },
    {
      number: "03",
      title: "Interview",
      text: "Meet our team and demonstrate your skills.",
    },
    {
      number: "04",
      title: "Selection",
      text: "Selected candidates receive an opportunity to join us.",
    },
  ];

  /* =======================================================
     FAQ
  ======================================================= */

  const faqs = [
    {
      question: "Can freshers apply for these positions?",
      answer:
        "Yes. Selected positions are open to freshers depending on the role requirements. Candidates with good fundamentals and a willingness to learn are encouraged to apply.",
    },
    {
      question: "Do you offer internships?",
      answer:
        "Yes. We provide internship opportunities for students and fresh graduates who want practical experience and exposure to real-world projects.",
    },
    {
      question: "Where are the job opportunities located?",
      answer:
        "Our current opportunities listed on this page are based in Madurai, India.",
    },
    {
      question: "Can I apply for multiple positions?",
      answer:
        "Yes. You can apply for positions that match your skills and experience.",
    },
    {
      question: "What should I include in my resume?",
      answer:
        "Include your education, technical skills, projects, internships, certifications and relevant experience.",
    },
  ];

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="career"
        className="
          relative
          min-h-[720px]
          bg-slate-950
          text-white
          flex
          items-center
          overflow-hidden
        "
      >

        {/* BACKGROUND */}

        <div
          className="
            absolute
            top-0
            right-0
            w-[500px]
            h-[500px]
            bg-blue-600/20
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            w-[400px]
            h-[400px]
            bg-indigo-600/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-[1400px]
            mx-auto
            px-6
            lg:px-12
            w-full
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]
              gap-16
              items-center
            "
          >

            {/* HERO LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-slate-700
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  text-slate-300
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    bg-blue-500
                    rounded-full
                  "
                />

                We are hiring

              </div>

              <p
                className="
                  text-blue-400
                  uppercase
                  tracking-[0.25em]
                  text-sm
                  font-semibold
                  mt-8
                "
              >
                Careers at Hikoo Technology
              </p>

              <h1
                className="
                  text-5xl
                  sm:text-7xl
                  lg:text-8xl
                  font-bold
                  leading-[0.95]
                  mt-5
                "
              >
                Build your
                <br />

                <span className="text-blue-500">
                  future
                </span>{" "}
                with us.
              </h1>

              <p
                className="
                  text-lg
                  text-slate-400
                  max-w-2xl
                  mt-8
                  leading-8
                "
              >
                Join a team where ideas become products,
                skills become expertise and every challenge
                becomes an opportunity to grow.
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-4
                  mt-9
                "
              >

                <a
                  href="#roles"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-blue-600
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-blue-700
                    transition
                  "
                >
                  Explore Opportunities

                  <ArrowRight size={18} />
                </a>

                <a
                  href="#culture"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-slate-700
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    hover:border-blue-500
                    transition
                  "
                >
                  Our Culture
                </a>

              </div>

            </motion.div>

            {/* HERO RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="hidden lg:block"
            >

              <div className="relative">

                <div
                  className="
                    absolute
                    -inset-5
                    bg-blue-600/20
                    blur-2xl
                    rounded-3xl
                  "
                />

                <div
                  className="
                    relative
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-slate-500 text-sm">
                        Career Opportunity
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        Find your place.
                      </h3>

                    </div>

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Briefcase size={22} />
                    </div>

                  </div>

                  <div className="mt-10 space-y-4">

                    <div className="bg-slate-800 rounded-2xl p-5">

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-10
                            h-10
                            rounded-xl
                            bg-blue-600/20
                            text-blue-400
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Rocket size={20} />
                        </div>

                        <div>

                          <p className="font-semibold">
                            Grow your skills
                          </p>

                          <p className="text-xs text-slate-500 mt-1">
                            Learn through real projects
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="bg-slate-800 rounded-2xl p-5">

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-10
                            h-10
                            rounded-xl
                            bg-blue-600/20
                            text-blue-400
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Users size={20} />
                        </div>

                        <div>

                          <p className="font-semibold">
                            Work together
                          </p>

                          <p className="text-xs text-slate-500 mt-1">
                            Collaborate with talented people
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="bg-blue-600 rounded-2xl p-5">

                      <p className="text-blue-100 text-sm">
                        Your next opportunity could start here.
                      </p>

                      <a
                        href="#roles"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          mt-3
                          font-semibold
                        "
                      >
                        View openings

                        <ArrowRight size={16} />
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY JOIN US
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-end">

            <div>

              <p
                className="
                  text-blue-600
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                "
              >
                Why Hikoo
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  mt-4
                  leading-tight
                "
              >
                More than a job.
                <br />

                <span className="text-blue-600">
                  A place to grow.
                </span>
              </h2>

            </div>

            <p
              className="
                text-lg
                text-slate-500
                leading-8
                max-w-xl
              "
            >
              We believe great products are built by
              people who are curious, motivated and willing
              to learn. At Hikoo Technology, you get
              opportunities to work on meaningful projects
              while developing your career.
            </p>

          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
              mt-14
            "
          >

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    border
                    border-slate-200
                    rounded-2xl
                    p-7
                    hover:border-blue-300
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-blue-50
                      text-blue-600
                      flex
                      items-center
                      justify-center
                      group-hover:bg-blue-600
                      group-hover:text-white
                      transition
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-7 mt-3">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section
        id="culture"
        className="py-24 bg-slate-950 text-white"
      >

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p
                className="
                  text-blue-400
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                "
              >
                Our Culture
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  mt-4
                  leading-tight
                "
              >
                Learn.
                <br />
                Create.
                <br />

                <span className="text-blue-500">
                  Make an impact.
                </span>
              </h2>

              <p
                className="
                  text-slate-400
                  text-lg
                  leading-8
                  mt-7
                  max-w-xl
                "
              >
                We create an environment where people
                can share ideas, experiment with new
                technologies and take ownership of their work.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-7
                "
              >

                <Coffee
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  Friendly Environment
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Work with people who support learning
                  and collaboration.
                </p>

              </div>

              <div
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-7
                "
              >

                <Lightbulb
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  New Ideas
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Share ideas and turn creative thinking
                  into solutions.
                </p>

              </div>

              <div
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-7
                "
              >

                <Building2
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  Professional Growth
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Develop skills that help you move forward
                  in your career.
                </p>

              </div>

              <div className="bg-blue-600 rounded-2xl p-7">

                <Target size={28} />

                <h3 className="text-xl font-bold mt-6">
                  Meaningful Work
                </h3>

                <p className="text-blue-100 mt-3 leading-6">
                  Build solutions that solve real business
                  problems.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        id="roles"
        className="py-24 bg-slate-50"
      >

        <CareerJobCards
          openings={openings}
          loadingOpenings={loadingOpenings}
          setSelectedRole={setSelectedRole}
          setShowForm={setShowForm}
          setSubmitSuccess={setSubmitSuccess}
          isAdmin={isAdmin}
        />

      </section>

      {/* =====================================================
          HOW WE HIRE
      ===================================================== */}

      <section
        className="
          relative
          py-32
          bg-white
          overflow-hidden
        "
      >

        <div className="max-w-[1250px] mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-4
                py-2
                rounded-full
                bg-slate-50
                border
                border-slate-200
              "
            >

              <span className="relative flex h-2.5 w-2.5">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-blue-400
                    opacity-50
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-blue-600
                  "
                />

              </span>

              <span
                className="
                  text-blue-600
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                "
              >
                Recruitment Process
              </span>

            </div>

            <h2
              className="
                mt-7
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-bold
                leading-[0.95]
              "
            >
              How we

              <span className="block text-blue-600">
                hire.
              </span>
            </h2>

            <p
              className="
                mt-7
                text-base
                sm:text-lg
                text-slate-500
                leading-8
                max-w-2xl
                mx-auto
              "
            >
              A transparent and thoughtful hiring journey
              designed to understand your skills, mindset
              and potential at every step.
            </p>

          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              mt-20
            "
          >

            {hiringProcess.map((item, index) => (

              <div
                key={item.number}
                className="group"
              >

                <div
                  className="
                    w-[124px]
                    h-[124px]
                    mx-auto
                    rounded-full
                    bg-white
                    border
                    border-slate-200
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    group-hover:-translate-y-2
                    transition
                  "
                >

                  <div
                    className="
                      w-[78px]
                      h-[78px]
                      rounded-full
                      bg-slate-950
                      flex
                      items-center
                      justify-center
                      group-hover:bg-blue-600
                      transition
                    "
                  >

                    <span
                      className="
                        text-white
                        text-xl
                        font-bold
                      "
                    >
                      {item.number}
                    </span>

                  </div>

                </div>

                <div
                  className="
                    mt-8
                    min-h-[220px]
                    rounded-[2rem]
                    bg-white
                    border
                    border-slate-200
                    p-8
                    shadow-sm
                    group-hover:-translate-y-2
                    transition
                  "
                >

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-blue-600
                    "
                  >
                    Step {index + 1}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-500 leading-7">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-[1000px] mx-auto px-6">

          <div className="text-center">

            <p
              className="
                text-blue-600
                text-sm
                uppercase
                tracking-[0.2em]
                font-semibold
              "
            >
              FAQ
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                mt-4
              "
            >
              Frequently asked questions
            </h2>

          </div>

          <div className="mt-14 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={faq.question}
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    overflow-hidden
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-5
                      p-6
                      text-left
                    "
                  >

                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`
                        shrink-0
                        transition-transform
                        ${
                          isOpen
                            ? "rotate-180 text-blue-600"
                            : ""
                        }
                      `}
                    />

                  </button>

                  {isOpen && (

                    <div className="px-6 pb-6">

                      <p className="text-slate-500 leading-7">
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPLICATION FORM MODAL
      ===================================================== */}

      {showForm && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-slate-950/80
            backdrop-blur-md
          "
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeForm}
            className="
              fixed
              right-6
              top-6
              z-[10000]
              w-12
              h-12
              rounded-full
              bg-white
              text-slate-900
              flex
              items-center
              justify-center
              text-2xl
              shadow-xl
              hover:bg-blue-600
              hover:text-white
              transition
            "
          >
            ×
          </button>

          {/* SCROLL */}

          <div className="h-full overflow-y-auto">

            <div
              className="
                min-h-full
                flex
                items-center
                justify-center
                px-4
                py-10
              "
            >

              <div
                className="
                  w-full
                  max-w-6xl
                  bg-white
                  rounded-[2rem]
                  overflow-hidden
                  shadow-2xl
                  grid
                  lg:grid-cols-[380px_1fr]
                "
              >

                {/* =================================================
                    LEFT SIDE
                ================================================= */}

                <div
                  className="
                    bg-slate-950
                    text-white
                    p-8
                    md:p-10
                    lg:p-12
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-xl
                      "
                    >
                      H
                    </div>

                    <div>

                      <p className="font-bold text-lg">
                        Hikoo
                      </p>

                      <p className="text-xs text-slate-500">
                        Technology
                      </p>

                    </div>

                  </div>

                  <div className="mt-16">

                    <p
                      className="
                        text-blue-400
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        font-semibold
                      "
                    >
                      You're almost there
                    </p>

                    <h2
                      className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        leading-tight
                        mt-5
                      "
                    >
                      Start your
                      <br />

                      <span className="text-blue-500">
                        next chapter.
                      </span>
                    </h2>

                    <p
                      className="
                        text-slate-400
                        text-sm
                        leading-7
                        mt-6
                      "
                    >
                      Tell us about yourself and take
                      the first step towards joining our
                      growing team.
                    </p>

                  </div>

                  <div className="mt-12">

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-widest
                        text-slate-500
                      "
                    >
                      Applying for
                    </p>

                    <div
                      className="
                        mt-3
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900
                        p-5
                      "
                    >

                      <div className="flex items-start gap-4">

                        <div
                          className="
                            w-11
                            h-11
                            rounded-xl
                            bg-blue-600/20
                            text-blue-400
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Briefcase size={20} />
                        </div>

                        <div>

                          <p className="font-semibold">
                            {selectedRole || "Selected Position"}
                          </p>

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-slate-500
                              mt-2
                            "
                          >

                            <MapPin size={13} />

                            Madurai, India

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    RIGHT SIDE FORM
                ================================================= */}

                <div
                  className="
                    bg-white
                    p-7
                    sm:p-10
                    lg:p-14
                  "
                >

                  <div>

                    <div className="flex items-center gap-3">

                      <span
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-blue-600
                          text-white
                          text-sm
                          font-bold
                          flex
                          items-center
                          justify-center
                        "
                      >
                        1
                      </span>

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          font-semibold
                          text-blue-600
                        "
                      >
                        Personal Information
                      </span>

                    </div>

                    <h2
                      className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-slate-900
                        mt-5
                      "
                    >
                      Let's get to know you.
                    </h2>

                    <p
                      className="
                        text-slate-500
                        text-sm
                        mt-3
                        leading-6
                      "
                    >
                      Complete the form below and our
                      team will review your application.
                    </p>

                  </div>

                  {/* =================================================
                      FORM
                  ================================================= */}

                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="mt-10 space-y-8"
                  >

                    {/* PERSONAL INFORMATION */}

                    <div
                      className="
                        grid
                        md:grid-cols-2
                        gap-6
                      "
                    >

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
                          placeholder="John Doe"
                          required
                          className="
                            mt-2
                            w-full
                            border-0
                            border-b-2
                            border-slate-200
                            px-0
                            py-3
                            text-sm
                            outline-none
                            focus:border-blue-600
                          "
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
                          placeholder="john@example.com"
                          required
                          className="
                            mt-2
                            w-full
                            border-0
                            border-b-2
                            border-slate-200
                            px-0
                            py-3
                            text-sm
                            outline-none
                            focus:border-blue-600
                          "
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
                          className="
                            mt-2
                            w-full
                            border-0
                            border-b-2
                            border-slate-200
                            px-0
                            py-3
                            text-sm
                            outline-none
                            focus:border-blue-600
                          "
                        />

                      </div>

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
                          placeholder="Your college name"
                          className="
                            mt-2
                            w-full
                            border-0
                            border-b-2
                            border-slate-200
                            px-0
                            py-3
                            text-sm
                            outline-none
                            focus:border-blue-600
                          "
                        />

                      </div>

                    </div>

                    {/* PROFESSIONAL DETAILS */}

                    <div>

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-6
                        "
                      >

                        <span
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-slate-100
                            text-slate-700
                            text-sm
                            font-bold
                            flex
                            items-center
                            justify-center
                          "
                        >
                          2
                        </span>

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Professional Details
                        </p>

                      </div>

                      <div
                        className="
                          grid
                          md:grid-cols-2
                          gap-6
                        "
                      >

                        {/* EXPERIENCE */}

                        <div>

                          <label className="text-sm font-semibold text-slate-700">
                            Experience
                          </label>

                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            className="
                              mt-2
                              w-full
                              border-0
                              border-b-2
                              border-slate-200
                              px-0
                              py-3
                              text-sm
                              bg-white
                              outline-none
                              focus:border-blue-600
                            "
                          >

                            <option value="">
                              Select Experience
                            </option>

                            <option value="Fresher">
                              Fresher
                            </option>

                            <option value="0–1 Years">
                              0–1 Years
                            </option>

                            <option value="1–3 Years">
                              1–3 Years
                            </option>

                            <option value="3–5 Years">
                              3–5 Years
                            </option>

                            <option value="5+ Years">
                              5+ Years
                            </option>

                          </select>

                        </div>

                        {/* LOCATION */}

                        <div>

                          <label className="text-sm font-semibold text-slate-700">
                            Current Location
                          </label>

                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="City, State"
                            required
                            className="
                              mt-2
                              w-full
                              border-0
                              border-b-2
                              border-slate-200
                              px-0
                              py-3
                              text-sm
                              outline-none
                              focus:border-blue-600
                            "
                          />

                        </div>

                      </div>

                    </div>

                    {/* RESUME */}

                    <div>

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-6
                        "
                      >

                        <span
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-slate-100
                            text-slate-700
                            text-sm
                            font-bold
                            flex
                            items-center
                            justify-center
                          "
                        >
                          3
                        </span>

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-semibold
                            text-slate-500
                          "
                        >
                          Resume
                        </p>

                      </div>

                      <label
                        className="
                          block
                          border-2
                          border-dashed
                          border-slate-200
                          rounded-2xl
                          p-7
                          text-center
                          cursor-pointer
                          hover:border-blue-500
                          hover:bg-blue-50/30
                          transition
                        "
                      >

                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required={!formData.resume}
                          onChange={handleChange}
                          className="hidden"
                        />

                        <div
                          className="
                            w-12
                            h-12
                            rounded-xl
                            bg-blue-50
                            text-blue-600
                            flex
                            items-center
                            justify-center
                            mx-auto
                          "
                        >
                          <Upload size={22} />
                        </div>

                        <p
                          className="
                            font-semibold
                            text-slate-800
                            mt-4
                          "
                        >
                          {formData.resume
                            ? formData.resume.name
                            : "Upload your resume"}
                        </p>

                        <p
                          className="
                            text-xs
                            text-slate-400
                            mt-2
                          "
                        >
                          PDF, DOC or DOCX • Max 5MB
                        </p>

                      </label>

                    </div>

                    {/* ABOUT YOU */}

                    <div>

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-6
                        "
                      >

                        <span
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-slate-100
                            text-slate-700
                            text-sm
                            font-bold
                            flex
                            items-center
                            justify-center
                          "
                        >
                          4
                        </span>

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-semibold
                            text-slate-500
                          "
                        >
                          About You
                        </p>

                      </div>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us briefly about yourself, your skills and why you want to join us..."
                        className="
                          w-full
                          rounded-2xl
                          bg-slate-50
                          border
                          border-slate-200
                          p-5
                          text-sm
                          outline-none
                          resize-none
                          focus:bg-white
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />

                    </div>

                    {/* SUCCESS MESSAGE */}

                    {submitSuccess && (

                      <div
                        className="
                          rounded-xl
                          bg-green-50
                          border
                          border-green-200
                          px-5
                          py-4
                          text-sm
                          font-semibold
                          text-green-700
                        "
                      >
                        ✓ {submitSuccess}
                      </div>

                    )}

                    {/* SUBMIT */}

                    <div
                      className="
                        pt-4
                        border-t
                        border-slate-100
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        justify-between
                        gap-5
                      "
                    >

                      <p
                        className="
                          text-xs
                          text-slate-400
                          leading-5
                        "
                      >
                        By submitting this application,
                        you agree to our recruitment process.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          group
                          w-full
                          sm:w-auto
                          min-w-[210px]
                          flex
                          items-center
                          justify-center
                          gap-3
                          bg-blue-600
                          text-white
                          px-7
                          py-4
                          rounded-xl
                          font-semibold
                          hover:bg-blue-700
                          hover:-translate-y-0.5
                          hover:shadow-xl
                          transition-all
                          disabled:opacity-60
                          disabled:cursor-not-allowed
                          disabled:hover:translate-y-0
                        "
                      >

                        {isSubmitting
                          ? "Submitting..."
                          : "Submit Job Application"}

                        {!isSubmitting && (
                          <ArrowRight
                            size={18}
                            className="
                              group-hover:translate-x-1
                              transition
                            "
                          />
                        )}

                      </button>

                    </div>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Career;
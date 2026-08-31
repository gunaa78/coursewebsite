import { motion } from "framer-motion";
import { useState } from "react";
import api from "./axios";

import {
  Code2,
  Server,
  Layers,
  Palette,
  Smartphone,
  Megaphone,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Briefcase,
  Clock3,
  ArrowRight,
  GraduationCap,
  Check,
  ArrowUpRight,
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

function Career() {
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    college: "",
    experience: "",
    location: "",
    resume: null,
    message: "",
  });

  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // =====================================================
  // CLOSE FORM
  // =====================================================

  const closeForm = () => {
    setShowForm(false);
    setSelectedRole(null);
  };

  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select a job role.");
      return;
    }

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    try {
      setSubmitSuccess("");

      const data = new FormData();

      data.append("jobName", selectedRole);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("college", formData.college);
      data.append("experience", formData.experience);
      data.append("location", formData.location);
      data.append("message", formData.message);
      data.append("resume", formData.resume);

      console.log("📤 JOB APPLICATION DATA:");

      for (const [key, value] of data.entries()) {
        console.log(key, value);
      }

      const response = await api.post(
        "/job-openings/applications",
        data
      );

      console.log("✅ API RESPONSE:", response.data);

      setSubmitSuccess(
        "Job Application Submitted Successfully!"
      );

      // alert("Job Application Submitted Successfully! 🎉");

      // RESET FORM

      setFormData({
        jobName:"",
        name: "",
        email: "",
        phone: "",
        college: "",
        experience: "",
        location: "",
        resume: null,
        message: "",
      });

      closeForm();
    } catch (error) {
      console.error("❌ SUBMIT ERROR:", error);

      console.log(
        "❌ ERROR RESPONSE:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Unable to connect to server"
      );
    }
  };

  // =====================================================
  // JOB ROLES
  // =====================================================

  const roles = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      description:
        "Build modern and responsive web applications using React and modern frontend technologies.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0–2 Years",
      icon: Code2,
    },

    {
      title: "Backend Developer",
      department: "Engineering",
      description:
        "Develop scalable APIs, backend services and database solutions.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "1–3 Years",
      icon: Server,
    },

    {
      title: "Full Stack Developer",
      department: "Engineering",
      description:
        "Build complete web applications across frontend and backend technologies.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "1–3 Years",
      icon: Layers,
    },

    {
      title: "UI/UX Designer",
      department: "Design",
      description:
        "Create intuitive user experiences and modern digital interfaces.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0–2 Years",
      icon: Palette,
    },

    {
      title: "Mobile App Developer",
      department: "Engineering",
      description:
        "Develop high-quality mobile applications for Android and iOS.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "1–3 Years",
      icon: Smartphone,
    },

    {
      title: "Digital Marketing Executive",
      department: "Marketing",
      description:
        "Plan and execute digital marketing campaigns and improve brand visibility.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0–2 Years",
      icon: Megaphone,
    },

    {
      title: "Business Development Executive",
      department: "Business",
      description:
        "Build client relationships and identify new business opportunities.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0–2 Years",
      icon: TrendingUp,
    },

    {
      title: "Software Testing Engineer",
      department: "Quality Assurance",
      description:
        "Test applications and ensure reliable and high-quality software.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0–2 Years",
      icon: ShieldCheck,
    },
  ];

  // =====================================================
  // BENEFITS
  // =====================================================

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

  // =====================================================
  // HIRING PROCESS
  // =====================================================

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

  // =====================================================
  // FAQ
  // =====================================================

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

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="career"
        className="relative min-h-[720px] bg-slate-950 text-white flex items-center overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="inline-flex items-center gap-2 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                We are hiring
              </div>

              <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold mt-8">
                Careers at Hikoo Technology
              </p>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mt-5">
                Build your
                <br />
                <span className="text-blue-500">
                  future
                </span>{" "}
                with us.
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl mt-8 leading-8">
                Join a team where ideas become products, skills become
                expertise and every challenge becomes an opportunity to grow.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#roles"
                  className="inline-flex items-center gap-3 bg-blue-600 px-7 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Explore Opportunities
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#culture"
                  className="inline-flex items-center gap-3 border border-slate-700 px-7 py-4 rounded-xl font-semibold hover:border-blue-500 transition"
                >
                  Our Culture
                </a>

              </div>

            </motion.div>

            {/* HERO CARD */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >

              <div className="relative">

                <div className="absolute -inset-5 bg-blue-600/20 blur-2xl rounded-3xl" />

                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-slate-500 text-sm">
                        Career Opportunity
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        Find your place.
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Briefcase size={22} />
                    </div>

                  </div>

                  <div className="mt-10 space-y-4">

                    <div className="bg-slate-800 rounded-2xl p-5">

                      <div className="flex items-center gap-4">

                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
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

                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
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
                        className="inline-flex items-center gap-2 mt-3 font-semibold"
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

              <p className="text-blue-600 text-sm uppercase tracking-[0.2em] font-semibold">
                Why Hikoo
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                More than a job.
                <br />
                <span className="text-blue-600">
                  A place to grow.
                </span>
              </h2>

            </div>

            <p className="text-lg text-slate-500 leading-8 max-w-xl">
              We believe great products are built by people who are curious,
              motivated and willing to learn. At Hikoo Technology, you get
              opportunities to work on meaningful projects while developing
              your career.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
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

              <p className="text-blue-400 text-sm uppercase tracking-[0.2em] font-semibold">
                Our Culture
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                Learn.
                <br />
                Create.
                <br />
                <span className="text-blue-500">
                  Make an impact.
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-8 mt-7 max-w-xl">
                We create an environment where people can share ideas,
                experiment with new technologies and take ownership of
                their work.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">

                <Coffee
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  Friendly Environment
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Work with people who support learning and collaboration.
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">

                <Lightbulb
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  New Ideas
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Share ideas and turn creative thinking into solutions.
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">

                <Building2
                  className="text-blue-500"
                  size={28}
                />

                <h3 className="text-xl font-bold mt-6">
                  Professional Growth
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  Develop skills that help you move forward in your career.
                </p>

              </div>

              <div className="bg-blue-600 rounded-2xl p-7">

                <Target size={28} />

                <h3 className="text-xl font-bold mt-6">
                  Meaningful Work
                </h3>

                <p className="text-blue-100 mt-3 leading-6">
                  Build solutions that solve real business problems.
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

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div>

            <p className="text-blue-600 text-sm uppercase tracking-[0.2em] font-semibold">
              Open Positions
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Find your{" "}
              <span className="text-blue-600">
                next role.
              </span>
            </h2>

            <p className="text-slate-500 text-lg mt-6 max-w-2xl">
              Explore our current opportunities and find the role
              that matches your skills and career goals.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {roles.map((role, index) => {

              const Icon = role.icon;

              return (
                <motion.div
                  key={role.title}
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
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    relative
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    p-6
                    overflow-hidden
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >

                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      w-40
                      h-40
                      rounded-full
                      bg-blue-50
                      group-hover:bg-blue-100
                      group-hover:scale-150
                      transition-all
                      duration-700
                    "
                  />

                  <div className="relative flex items-center justify-between">

                    <div
                      className="
                        w-14
                        h-14
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        group-hover:bg-blue-600
                        group-hover:text-white
                        group-hover:rotate-6
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >

                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />

                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-slate-400
                        uppercase
                        tracking-widest
                      "
                    >
                      Open Role
                    </span>

                  </div>

                  <div className="relative mt-7">

                    <p
                      className="
                        text-blue-600
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                      "
                    >
                      {role.department}
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                        mt-2
                        group-hover:text-blue-600
                        transition-colors
                        duration-300
                      "
                    >
                      {role.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-slate-500
                        leading-6
                        mt-4
                        line-clamp-3
                      "
                    >
                      {role.description}
                    </p>

                  </div>

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-slate-50
                        border
                        border-slate-100
                        rounded-full
                        px-3
                        py-2
                        text-xs
                        text-slate-600
                      "
                    >
                      <MapPin
                        size={14}
                        className="text-blue-600"
                      />

                      {role.location}
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-slate-50
                        border
                        border-slate-100
                        rounded-full
                        px-3
                        py-2
                        text-xs
                        text-slate-600
                      "
                    >
                      <Briefcase
                        size={14}
                        className="text-blue-600"
                      />

                      {role.type}
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        bg-slate-50
                        border
                        border-slate-100
                        rounded-full
                        px-3
                        py-2
                        text-xs
                        text-slate-600
                      "
                    >
                      <Clock3
                        size={14}
                        className="text-blue-600"
                      />

                      {role.experience}
                    </span>

                  </div>

                  <div
                    className="
                      relative
                      mt-7
                      pt-5
                      border-t
                      border-slate-100
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRole(role.title);
                        setShowForm(true);
                        setSubmitSuccess("");
                      }}
                      className="
                        font-semibold
                        text-slate-900
                        group-hover:text-blue-600
                        transition-colors
                      "
                    >
                      Apply Now
                    </button>

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        text-slate-600
                        group-hover:bg-blue-600
                        group-hover:text-white
                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    >
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          HOW WE HIRE
      ===================================================== */}

      <section className="relative py-32 bg-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[120px]" />

          <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-indigo-500/[0.06] rounded-full blur-[120px]" />

          <div className="absolute -bottom-40 left-10 w-[400px] h-[400px] bg-sky-500/[0.05] rounded-full blur-[120px]" />

        </div>

        <div className="relative max-w-[1250px] mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50 animate-ping" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />

              </span>

              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.22em]">
                Recruitment Process
              </span>

            </div>

            <h2 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-slate-950">

              How we

              <span className="block text-blue-600">
                hire.
              </span>

            </h2>

            <p className="mt-7 text-base sm:text-lg text-slate-500 leading-8 max-w-2xl mx-auto">

              A transparent and thoughtful hiring journey designed to
              understand your skills, mindset and potential at every step.

            </p>

          </div>

          <div className="relative mt-24">

            <div className="hidden lg:block absolute top-[62px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {hiringProcess.map((item, index) => (

                <div
                  key={item.number}
                  className="group relative"
                >

                  <div className="relative z-20 flex justify-center mb-10">

                    <div className="relative w-[124px] h-[124px] rounded-full bg-white border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex items-center justify-center transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-[0_25px_70px_rgba(37,99,235,0.18)] group-hover:-translate-y-2">

                      <div className="absolute inset-2 rounded-full border border-dashed border-blue-200 group-hover:border-blue-400 group-hover:rotate-180 transition-all duration-700" />

                      <div className="relative w-[78px] h-[78px] rounded-full bg-slate-950 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:bg-blue-600">

                        <span className="text-white text-xl font-bold tracking-wide">
                          {item.number}
                        </span>

                      </div>

                      <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">

                        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition" />

                      </div>

                    </div>

                  </div>

                  <div className="relative min-h-[285px] rounded-[2rem] bg-white border border-slate-200 p-8 overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:-translate-y-3 group-hover:border-blue-200 group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 opacity-0 group-hover:opacity-100 transition" />

                    <span className="absolute -right-4 -top-8 text-[120px] leading-none font-black text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-500">
                      {item.number}
                    </span>

                    <div className="relative">

                      <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">

                        <span className="w-5 h-px bg-blue-600" />

                        Step {index + 1}

                      </div>

                      <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm text-slate-500 leading-7 max-w-[260px]">
                        {item.text}
                      </p>

                      <div className="absolute -bottom-8 left-0 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                        <span className="text-xs font-semibold text-blue-600">
                          Next step
                        </span>

                        <ArrowRight
                          size={14}
                          className="text-blue-600"
                        />

                      </div>

                    </div>

                  </div>

                  {index !== hiringProcess.length - 1 && (

                    <div className="hidden lg:flex absolute top-[62px] -right-[15px] z-30 w-8 h-8 rounded-full bg-white border border-blue-100 shadow-lg items-center justify-center">

                      <ArrowRight
                        size={15}
                        className="text-blue-600 group-hover:translate-x-1 transition"
                      />

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

          <div className="mt-20 flex justify-center">

            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-900/10">

              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">

                <span className="text-sm font-bold">
                  ✓
                </span>

              </div>

              <p className="text-sm text-slate-300">

                We believe in hiring

                <span className="text-white font-semibold ml-1">
                  people, not just resumes.
                </span>

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-[1000px] mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-600 text-sm uppercase tracking-[0.2em] font-semibold">
              FAQ
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Frequently asked questions
            </h2>

          </div>

          <div className="mt-14 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 p-6 text-left"
                  >

                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? "rotate-180 text-blue-600"
                          : ""
                      }`}
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
          APPLICATION FORM
      ===================================================== */}

      {showForm && (

        <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md">

          {/* CLOSE */}

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
              transition-all
            "
          >
            ×
          </button>

          <div className="h-full overflow-y-auto">

            <div className="min-h-full flex items-center justify-center px-4 py-10 md:px-8">

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
                    relative
                    overflow-hidden
                    bg-slate-950
                    text-white
                    p-8
                    md:p-10
                    lg:p-12
                  "
                >

                  <div
                    className="
                      absolute
                      -top-24
                      -right-24
                      w-64
                      h-64
                      rounded-full
                      bg-blue-600/20
                    "
                  />

                  <div className="relative z-10 h-full flex flex-col">

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
                        Tell us about yourself and take the
                        first step towards joining our growing team.
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
                              shrink-0
                            "
                          >
                            <Briefcase size={20} />
                          </div>

                          <div>

                            <p className="font-semibold">
                              {selectedRole}
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

                    <div className="mt-auto pt-12">

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-400
                        "
                      >

                        <div
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                          "
                        >
                          ✓
                        </div>

                        Your information is secure

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
                      Complete the form below and our team
                      will review your application.
                    </p>

                  </div>

                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="mt-10 space-y-8"
                  >

                    {/* PERSONAL INFORMATION */}

                    <div className="grid md:grid-cols-2 gap-6">

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

                      <div className="flex items-center gap-3 mb-6">

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

                      <div className="grid md:grid-cols-2 gap-6">

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

                      <div className="flex items-center gap-3 mb-6">

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
                          required
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
                          <ArrowUpRight size={22} />
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

                      <div className="flex items-center gap-3 mb-6">

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

                      <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-sm font-semibold text-green-700">
                        {submitSuccess}
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
                        "
                      >

                        Submit Job Application

                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition"
                        />

                      </button>

                    </div>

                  </form>

                </div>
                {submitSuccess && (
  <p className="text-green-600 font-semibold text-center mt-4">
    ✓ {submitSuccess}
  </p>
)}

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Career;
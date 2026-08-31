import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "./axios";
import { useEffect } from "react";

import {
  MapPin,
  Mail,
  Phone,
  Send,
  ChevronDown,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";



function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submit, setSubmit] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/contact", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
    });

    console.log("API RESPONSE:", response.data);

    setSubmit("Message Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
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

  // ================= SERVICES =================

  // const services = [
  //   "Web Development",
  //   "Mobile App Development",
  //   "UI/UX Design",
  //   "Software Development",
  //   "IT Consulting",
  //   "Cloud Solutions",
  //   "Other",
  // ];

  // ================= FAQ =================

  const faqs = [
    {
      question: "How quickly will you respond?",
      answer:
        "Our team usually responds to enquiries within one business day.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We provide web development, mobile applications, UI/UX design, software solutions, IT consulting and cloud services.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes. We work with startups, growing businesses and established enterprises.",
    },
    {
      question: "How do I request a project quote?",
      answer:
        "Fill out the contact form with your project requirements. Our team will review your request and contact you.",
    },
  ];

  // ================= INPUT =================

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // ================= SUBMIT =================

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Contact Form:", formData);

  //   alert("Thank you! Your message has been submitted.");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     service: "",
  //     message: "",
  //   });
  // };

  useEffect(() => {
  if (window.location.hash === "#enroll") {
    setTimeout(() => {
      const form = document.getElementById("enroll");

      if (form) {
        form.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }
}, []);

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
      >
        {/* Background decoration */}

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

            {/* LEFT */}

            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-7">
                <Sparkles size={14} className="text-blue-600" />

                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
                  Contact Hikoo
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92]">
                Let's build
                <br />

                <span className="text-blue-600">
                  something great.
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-500 leading-8 max-w-2xl">
                Have a project, idea, or question?
                Tell us what you're working on and
                let's explore how we can help.
              </p>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative border-l-2 border-blue-600 pl-7">

                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600" />

                <p className="text-slate-500 text-base md:text-lg leading-8">
                  From building digital products to
                  solving complex technology challenges,
                  our team is ready to work with you.
                </p>

                <div className="flex items-center gap-3 mt-7">

                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                  <span className="text-sm font-semibold text-slate-700">
                    We're ready to talk
                  </span>

                </div>
              </div>
            </motion.div>

          </div>

          <div className="mt-16 border-t border-slate-200" />

        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT INFORMATION */}
      {/* ========================================================= */}

      <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">

        {/* Background */}

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">

              <Sparkles
                size={14}
                className="text-blue-600"
              />

              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              We're here to
              <span className="text-blue-600">
                {" "}help.
              </span>
            </h2>

            <p className="text-slate-500 mt-5 text-lg leading-8">
              Whether you have a project idea, need
              technical guidance, or simply want to
              learn more about Hikoo, our team is ready
              to connect.
            </p>
          </motion.div>

          {/* CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">

            {/* LOCATION */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Hikoo+Technology+Pvt+Ltd",
                  "_blank"
                );
              }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-7 overflow-hidden cursor-pointer hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

              <div className="relative w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">

                <MapPin size={23} />

              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mt-7">
                Visit Us
              </p>

              <h3 className="text-xl font-bold mt-2">
                Madurai
              </h3>

              <p className="text-sm text-slate-500 mt-2 leading-6">
                Tamil Nadu, India
              </p>

              <ArrowUpRight
                size={18}
                className="absolute right-7 bottom-7 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />

            </motion.div>

            {/* EMAIL */}

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hikootechnology@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">

                <Mail size={23} />

              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mt-7">
                Email Us
              </p>

              <h3 className="text-lg font-bold mt-2 break-all">
                hikootechnology@gmail.com
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Send us your requirements
              </p>

              <ArrowUpRight
                size={18}
                className="absolute right-7 bottom-7 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />

            </motion.a>

            {/* PHONE */}

            <motion.a
              href="tel:+917598639009"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-7 overflow-hidden hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">

                <Phone size={23} />

              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mt-7">
                Call Us
              </p>

              <h3 className="text-xl font-bold mt-2">
                +91 7598 639 009
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Mon - Sat · 9 AM - 6 PM
              </p>

              <ArrowUpRight
                size={18}
                className="absolute right-7 bottom-7 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />

            </motion.a>

            {/* WORKING HOURS */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="group relative bg-slate-950 text-white rounded-3xl p-7 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />

              <div className="relative w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">

                <Clock3 size={23} />

              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-slate-500 font-bold mt-7">
                Working Hours
              </p>

              <h3 className="text-xl font-bold mt-2">
                9:00 AM - 6:00 PM
              </h3>

              <p className="text-sm text-slate-400 mt-2">
                Monday to Saturday
              </p>

              <div className="flex items-center gap-2 mt-5 text-xs text-green-400">

                <CheckCircle2 size={15} />

                Currently available

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT FORM */}
      {/* ========================================================= */}

      <section
        id="contact-form"
        className="relative py-24 lg:py-32 bg-white"
      >

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

            {/* LEFT */}

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="lg:sticky lg:top-32">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">

                  <MessageCircle
                    size={14}
                    className="text-blue-600"
                  />

                  <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
                    Start a Conversation
                  </span>

                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-7">

                  Tell us about
                  <br />

                  <span className="text-blue-600">
                    your project.
                  </span>

                </h2>

                <p className="text-slate-500 mt-6 leading-8 max-w-md">
                  Have an idea, need technical guidance,
                  or want to improve an existing product?
                  We'd love to hear from you.
                </p>

                {/* SECURITY CARD */}

                <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">

                      <ShieldCheck size={20} />

                    </div>

                    <div>

                      <p className="font-semibold">
                        Your information is secure
                      </p>

                      <p className="text-sm text-slate-500 mt-1 leading-6">
                        We respect your privacy and
                        never share your information.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* FORM */}

           <motion.div
  className="lg:col-span-8"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <div className="relative bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-10 lg:p-12 overflow-hidden">

    <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

    <form
     id="enroll"
   
   
      onSubmit={handleSubmit}
      className="relative space-y-7  "
    >

      {/* NAME + EMAIL */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-semibold mb-2 " >
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />
        </div>

      </div>


      {/* PHONE + SUBJECT */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-semibold mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />
        </div>

      </div>


      {/* MESSAGE */}

      <div>
        <label className="block text-sm font-semibold mb-2">
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="message..."
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none transition"
        />
      </div>


      {/* SUBMIT */}

      <button
        type="submit"
        className="group w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        Send Message

        <Send
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>

    </form>
    {submit && (
  <p className="text-green-600 font-semibold text-center mt-4">
    ✓ {submit}
  </p>
)}

  </div>
</motion.div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section className="relative py-24 lg:py-32 bg-slate-50">

        <div className="max-w-[1000px] mx-auto px-6">

          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">

              <span className="w-2 h-2 rounded-full bg-blue-600" />

              <span className="text-blue-600 text-xs uppercase tracking-[0.2em] font-bold">
                FAQ
              </span>

            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-6">
              Common questions.
            </h2>

            <p className="text-slate-500 mt-5 max-w-xl mx-auto leading-7">
              Find answers to some of the most common
              questions about working with Hikoo.
            </p>

          </motion.div>

          {/* FAQ */}

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 last:border-b-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 p-6 md:p-7 text-left hover:bg-slate-50 transition"
                  >

                    <div className="flex items-center gap-5">

                      <span className="hidden sm:flex w-9 h-9 rounded-xl bg-blue-50 text-blue-600 items-center justify-center text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base md:text-lg font-semibold">
                        {faq.question}
                      </span>

                    </div>

                    <div
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />

                    </div>

                  </button>

                  <AnimatePresence initial={false}>

                    {isOpen && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-6 md:px-7 pb-7 pl-6 sm:pl-[5.5rem] pr-10">

                          <p className="text-slate-500 leading-7">
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
  {/* Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100/60 rounded-full blur-[120px]" />

    <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12">
    
    {/* Top Label */}
    <div className="flex items-center gap-3 mb-8">
      <span className="w-10 h-[2px] bg-blue-600" />

      <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">
        Start Something Great
      </span>
    </div>


    {/* Main Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.05em] leading-[0.95] text-slate-950">
          Let's build

          <br />

          something

          <br />

          <span className="text-blue-600">
            meaningful.
          </span>
        </h2>


        <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-slate-500">
          Whether you're looking to learn new technologies,
          build a digital product, or explore opportunities
          with Hikoo Technology, we're ready to help you
          take the next step.
        </p>


        {/* Small Info */}
        <div className="mt-10 flex flex-wrap gap-8">

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold">
              Location
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              Madurai, India
            </p>
          </div>


          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold">
              Response
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              Within 24 Hours
            </p>
          </div>

        </div>

      </div>


      {/* RIGHT CONTACT CARD */}
      <div className="relative">

        {/* Decorative Square */}
        <div className="absolute -top-5 -right-5 w-24 h-24 border border-blue-100 rounded-3xl rotate-12" />


        <div className="relative rounded-[32px] bg-slate-950 p-7 sm:p-10 lg:p-12 overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/30 rounded-full blur-[90px]" />

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <span className="text-blue-400 text-xl">
                  ✦
                </span>
              </div>


              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                Let's Connect
              </span>

            </div>


            <h3 className="mt-10 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Have a project
              <br />
              in mind?
            </h3>


            <p className="mt-5 leading-7 text-slate-400">
              Share your ideas with us and let's explore
              how we can create something impactful together.
            </p>


            {/* Button */}
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                group
                mt-10
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-4
                rounded-2xl
                bg-blue-600
                px-7
                py-4
                text-sm
                font-bold
                text-white
                hover:bg-blue-500
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)]
                transition-all
                duration-300
              "
            >
              Start a Conversation

              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>


            {/* Bottom */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-xs text-slate-400">
                Available for new opportunities
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* Bottom Large Text */}
    <div className="mt-20 lg:mt-28 overflow-hidden">

      <p className="text-[14vw] lg:text-[11vw] leading-none font-black tracking-[-0.08em] text-slate-100 select-none whitespace-nowrap">
        HIKOO TECHNOLOGY
      </p>

    </div>

  </div>
</section>

    </main>
  );
}

export default Contact;
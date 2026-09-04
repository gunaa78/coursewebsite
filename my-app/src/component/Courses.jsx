import courseCategories from "./courseCategories";
import { useState } from "react";
import courseDetails from "./courseDetails";
// import { useRef } from "react";
import { Link} from "react-router-dom";
import {
  X,
  ArrowRight,
  BookOpen,
  Clock3,
  BriefcaseBusiness,
  Award,
  Code2,
  Layers3,
  Rocket,
  Check,
  GraduationCap,
  Sparkles,
 
} from "lucide-react";

function Courses() {
  const courseDescriptions = {
  "Generative AI (Gen AI)":
    "Learn how modern generative AI systems create text, images, code and other content using advanced AI models.",

  "Agentic AI":
    "Understand intelligent AI agents that can reason, plan, use tools and complete tasks autonomously.",

  "Machine Learning (ML)":
    "Build practical machine learning solutions using data preprocessing, algorithms, model training and evaluation.",

  "Deep Learning (DL)":
    "Explore neural-network based deep learning techniques for computer vision, prediction and intelligent applications.",

  "Large Language Model (LLM)":
    "Learn how large language models work and how they are trained, fine-tuned and integrated into applications.",

  "Neural Network (NN)":
    "Understand neural network fundamentals, architectures, training techniques and real-world AI applications.",

  "Prompt Engineering":
    "Master effective prompting techniques to get accurate, reliable and useful results from AI models.",

  "Data Engineering":
    "Learn how to collect, transform, process and manage large-scale data pipelines for business applications.",

  "MLOps Engineering":
    "Learn how to deploy, monitor and maintain machine learning models efficiently in production environments.",

  "Data Science":
    "Develop practical skills in data analysis, statistics, machine learning and data-driven decision making.",

  "Data Analysis":
    "Learn how to clean, analyze and visualize data to discover useful business insights.",

  "Business Analysis":
    "Understand business requirements, process analysis and solution planning to support better business decisions.",

  "Java Fullstack":
    "Build complete web applications using Java backend technologies along with modern frontend development.",

  "Python Fullstack":
    "Learn to develop fullstack applications using Python, backend frameworks, databases and modern frontend tools.",

  "PHP Fullstack":
    "Build dynamic web applications using PHP, databases, backend development and frontend technologies.",

  ".Net Fullstack":
    "Develop enterprise-ready fullstack applications using .NET technologies, APIs, databases and frontend frameworks.",

  "Ruby on Rails Fullstack":
    "Learn rapid web application development using Ruby on Rails with database integration and modern frontend techniques.",

  "JavaScript Fullstack":
    "Build modern fullstack web applications using JavaScript across frontend, backend, APIs and databases.",

  "React / Angular / Vue":
    "Learn modern frontend frameworks and build responsive, component-based web applications.",

  "Android":
    "Develop modern Android applications with user-friendly interfaces, APIs, databases and mobile development practices.",

  "iOS":
    "Learn iOS application development and build responsive mobile experiences for Apple devices.",

  "Flutter":
    "Build cross-platform mobile applications from a single codebase using Flutter and Dart.",

  "React Native":
    "Create cross-platform mobile applications using React Native and reusable React components.",

  "Kivy":
    "Learn Python-based cross-platform application development using the Kivy framework.",

  "Ionic":
    "Build hybrid mobile and web applications using Ionic and modern web technologies.",

  "AWS":
    "Learn cloud computing with AWS including compute, storage, databases, networking and deployment.",

  "AZURE":
    "Explore Microsoft Azure services for cloud infrastructure, application deployment and enterprise solutions.",

  "GCP (Google Cloud)":
    "Learn Google Cloud services and build scalable cloud applications using modern infrastructure tools.",

  "ORACLE Cloud":
    "Understand Oracle Cloud infrastructure, services, databases and enterprise cloud solutions.",

  "Cyber Security Analyst":
    "Learn security monitoring, threat detection, incident analysis and practical cybersecurity operations.",

  "SOC Analysis":
    "Understand Security Operations Center workflows, alert monitoring, threat investigation and incident response.",

  "Ethical Hacking":
    "Learn ethical hacking methodologies to identify vulnerabilities and strengthen application and network security.",

  "Penetration Testing":
    "Develop practical penetration testing skills to identify and assess security weaknesses.",

  "Cloud Security / Virtualization":
    "Learn how to secure cloud infrastructure, virtual machines, identities and cloud-based applications.",

  "Information Security":
    "Understand information security principles, risk management, security controls and data protection.",

  "Network Security":
    "Learn how to protect networks using security controls, monitoring, firewalls and threat prevention techniques.",

  "Application Security":
    "Learn secure application development practices and techniques for identifying and preventing vulnerabilities.",

  "IoT Security":
    "Understand security challenges in connected devices, IoT networks and smart applications.",

  "Manual Testing / Agile":
    "Learn software testing fundamentals, test cases, defect reporting and Agile testing methodologies.",

  "Automation Testing / Selenium":
    "Build automated testing workflows using Selenium and modern software testing practices.",

  "Performance / Load Testing":
    "Learn how to evaluate application performance, scalability and stability under different workloads.",

  "Database Testing (DB)":
    "Learn how to validate database operations, data integrity, queries and application-data interactions.",

  "ETL Testing":
    "Understand how to test data extraction, transformation and loading processes for reliable data pipelines.",

  "SAP Testing":
    "Learn testing approaches for SAP applications, business processes and enterprise workflows.",

  "Mobile App Testing (Appium)":
    "Learn mobile application testing and automation using Appium across different mobile platforms.",

  "API Testing (Postman)":
    "Learn how to test REST APIs, validate responses and automate API testing using Postman.",

  "Search Engine Optimization (SEO)":
    "Learn techniques to improve website visibility, rankings, organic traffic and search engine performance.",

  "Search Engine Marketing (SEM)":
    "Understand paid search campaigns, keyword strategies, ad optimization and performance measurement.",

  "Social Media Marketing (SMM)":
    "Learn how to build social media strategies, engaging content and audience-focused marketing campaigns.",

  "Pay Per Click (PPC)":
    "Learn how to create and optimize paid advertising campaigns for better conversions and ROI.",

  "Content Marketing":
    "Develop effective content strategies to attract audiences, build trust and support business growth.",

  "Video Marketing":
    "Learn how to use video content to engage audiences, promote brands and improve digital marketing results.",

  "Email & Mobile Marketing":
    "Learn email campaigns, mobile marketing strategies, audience segmentation and engagement techniques.",

  "Affiliate & SMS Marketing":
    "Understand affiliate marketing and SMS campaigns for customer acquisition, engagement and conversions.",

  "Website Marketing & Chat Bots":
    "Learn website conversion strategies and chatbot integration for better customer engagement.",

  "Business Architecture":
    "Understand how business strategy, processes and organizational structures are designed and aligned.",

  "Enterprise Architecture":
    "Learn enterprise-level architecture approaches for aligning technology, business and organizational goals.",

  "Solutions Architecture":
    "Learn how to design scalable technical solutions that meet business and application requirements.",

  "Data Architecture":
    "Understand data architecture, storage, data flows and scalable data management strategies.",

  "System Architecture":
    "Learn how to design reliable, scalable and maintainable software system architectures.",

  "Application / Software Architect":
    "Develop skills to design software architecture, application structures and technical solutions.",

  "Infrastructure / Cloud Architect":
    "Learn how to design scalable cloud and infrastructure solutions for modern enterprise systems.",

  "Network / Security Architect":
    "Understand secure network architecture, infrastructure planning and enterprise security design.",

  "Unity":
    "Learn game development using Unity including scenes, gameplay mechanics, physics and interactive experiences.",

  "Unreal Engine":
    "Explore professional game development using Unreal Engine, environments, gameplay and visual systems.",

  "3D Animation":
    "Learn 3D modeling, animation principles and digital techniques for games, media and creative projects.",

  "Graphics Design":
    "Develop creative graphic design skills for digital content, branding, marketing and visual communication.",

  "Communicative English":
    "Improve everyday English communication, speaking confidence, vocabulary and professional interaction skills.",

  "Advance English":
    "Strengthen advanced English grammar, vocabulary, writing and professional communication skills.",

  "Business English":
    "Develop English communication skills for meetings, presentations, emails and professional environments.",

  "IELTS":
    "Prepare for IELTS with focused practice in listening, reading, writing and speaking.",

  "UI / UX Design":
    "Learn user interface and user experience design principles to create intuitive and engaging digital products.",

  "Logo / Branding Design":
    "Learn logo creation, visual identity and branding principles for professional business identities.",

  "System Design":
    "Understand how to design scalable systems, components, APIs and architectures for real-world applications.",

  "Software Design":
    "Learn software design principles, architecture patterns and maintainable application structures.",

  "Tally":
    "Learn Tally for accounting, transactions, financial records and practical business bookkeeping.",

  "Inventory Management System":
    "Understand inventory tracking, stock management, purchase, sales and business inventory workflows.",

  "Business Accounting":
    "Learn practical accounting concepts including transactions, ledgers, financial statements and reporting.",

  "GST & Taxation":
    "Understand GST concepts, taxation workflows, compliance basics and practical business tax processes.",
};
  
  // const courseScrollRef = useRef(null);

// const scrollCourses = (direction) => {
//   if (!courseScrollRef.current) return;

//   const container = courseScrollRef.current;

//   const card = container.querySelector(".course-category-card");

//   if (!card) return;

//   const cardWidth = card.offsetWidth;
//   const gap = 28;

//   // 3 cards move
//   const amount = (cardWidth + gap) * 3;

//   container.scrollBy({
//     left: direction === "right" ? amount : -amount,
//     behavior: "smooth",
//   });
// };
 
  const [selectedCourse, setSelectedCourse] = useState(null);
  const details = selectedCourse
  ? courseDetails[selectedCourse.name] || {
      description:
        "Learn this course through practical training, industry-oriented concepts and real-world projects.",
      learning: [
        "Core Concepts",
        "Practical Implementation",
        "Industry Techniques",
        "Hands-on Training",
        "Real-world Applications",
        "Project Development",
      ],
      tools: [
        "Industry Tools",
        "Development Tools",
        "Testing Tools",
        "Deployment Tools",
        "Git & GitHub",
      ],
      projects: [
        "Real-world Project",
        "Hands-on Assignment",
        "Industry Case Study",
      ],
      careers: [
        "Industry Skills",
        "Project Experience",
        "Interview Preparation",
        "Job Readiness",
      ],
      duration: "3 - 6 Months",
    }
  : null;
  return (
    <section
      id="courses"
      className="
        relative
        overflow-hidden
        bg-[#f8fafc]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Blue Glow */}

        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[350px]
            rounded-full
            bg-blue-500/[0.06]
            blur-[100px]
          "
        />

        {/* Grid Background */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1250px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              text-blue-600
              text-xs
              sm:text-sm
              font-bold
            "
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />

            WHAT WE TEACH
          </div>

          {/* Main Title */}

          <h2
            className="
              mt-6
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-black
              tracking-[-0.035em]
              text-slate-950
            "
          >
            Learn Skills That{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              Build Careers
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              leading-7
              text-slate-500
            "
          >
            Practical, industry-focused programs designed to help
            you learn modern technologies and build real-world projects.
          </p>
        </div>

        {/* =====================================================
            COURSE GRID
        ===================================================== */}

{/* ===================================================== */}
{/* SLIDER WRAPPER */}
{/* ===================================================== */}

{/* ===================================================== */}
{/* SLIDER WRAPPER */}
{/* ===================================================== */}
{/* ================= COURSES SLIDER ================= */}

{/* ================= ALL COURSE CATEGORIES ================= */}

{/* ================= ALL COURSE CATEGORIES ================= */}

{/* ================= COURSE SLIDER ================= */}

<div className="relative mt-10 sm:mt-14">

  {/* ========================================================= */}
  {/* MAIN HEADING */}
  {/* ========================================================= */}
{/* 
  <div className="mb-8 sm:mb-12 px-2">

    <p
      className="
        text-xs
        sm:text-sm
        font-semibold
        text-blue-600
        uppercase
        tracking-wider
      "
    >
      Explore Categories
    </p>

    <h2
      className="
        text-2xl
        sm:text-3xl
        lg:text-4xl
        font-bold
        text-slate-900
        mt-1
      "
    >
      Choose Your Learning Path
    </h2>

    <p
      className="
        text-xs
        sm:text-sm
        text-slate-500
        mt-2
      "
    >
      Explore our industry-focused courses
    </p>

  </div> */}


  {/* ========================================================= */}
  {/* ALL CATEGORIES */}
  {/* ========================================================= */}

  <div className="space-y-10 sm:space-y-14">

    {courseCategories.map((category, index) => (

      <div
        key={category.title}
        className="w-full min-w-0"
      >

        {/* ===================================================== */}
        {/* CATEGORY HEADER */}
        {/* ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            mb-4
            sm:mb-6
            px-2
          "
        >

          {/* LEFT SIDE */}

          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-4
              min-w-0
            "
          >

            {/* CATEGORY ICON */}

            <div
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12

                rounded-xl
                sm:rounded-2xl

                bg-blue-600

                flex
                items-center
                justify-center

                text-lg
                sm:text-2xl

                shrink-0
              "
            >
              {category.icon}
            </div>


            {/* CATEGORY DETAILS */}

            <div className="min-w-0">

              <h3
                className="
                  text-lg
                  sm:text-xl
                  lg:text-2xl

                  font-bold

                  text-slate-900

                  leading-tight
                "
              >
                {category.title}
              </h3>

              <p
                className="
                  text-xs
                  sm:text-sm

                  text-slate-500

                  mt-1
                "
              >
                {category.courses.length} Courses Available
              </p>

            </div>

          </div>


          {/* CATEGORY NUMBER */}

          <span
            className="
              hidden
              sm:flex

              items-center
              justify-center

              shrink-0

              text-xs
              font-semibold

              text-blue-600
              bg-blue-50

              px-3
              py-2

              rounded-full
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>


        {/* ===================================================== */}
        {/* COURSE SLIDER */}
        {/* ===================================================== */}

        <div className="relative w-full min-w-0">


          {/* =================================================== */}
          {/* LEFT BUTTON */}
          {/* =================================================== */}

          <button
            type="button"
            onClick={() => {

              const slider = document.getElementById(
                `course-slider-${index}`
              );

              if (!slider) return;

              const card = slider.querySelector(
                ".course-card"
              );

              if (!card) return;

              const cardWidth =
                card.getBoundingClientRect().width;

              const gap =
                window.innerWidth < 640
                  ? 12
                  : window.innerWidth < 1024
                  ? 16
                  : 20;

              slider.scrollBy({
                left: -(cardWidth + gap),
                behavior: "smooth",
              });

            }}
            className="
              absolute

              left-1
              sm:left-2
              lg:left-0

              top-1/2
              -translate-y-1/2

              z-30

              w-8
              h-8

              sm:w-10
              sm:h-10

              rounded-full

              bg-blue-600
              text-white

              flex
              items-center
              justify-center

              hover:bg-blue-700
              hover:scale-105

              active:scale-95

              transition-all
              duration-300

              cursor-pointer

              touch-manipulation

              select-none
            "
            aria-label={`Previous ${category.title} courses`}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>

          </button>


          {/* =================================================== */}
          {/* COURSE CARDS CONTAINER */}
          {/* =================================================== */}

          <div
            id={`course-slider-${index}`}
            className="
              flex

              gap-3
              sm:gap-4
              lg:gap-5

              overflow-x-hidden

              scroll-smooth

              snap-x
              snap-mandatory

              px-10
              sm:px-14
              lg:px-14

              py-4

              w-full
              min-w-0
            "
            style={{
              scrollPaddingLeft:
                window.innerWidth < 640
                  ? "40px"
                  : "56px",

              scrollPaddingRight:
                window.innerWidth < 640
                  ? "40px"
                  : "56px",
            }}
          >

            {category.courses.map(
              (course, courseIndex) => (

                <div
                  key={course}
                  className="
                    course-card

                    group/course

                    shrink-0

                    snap-center


                    /* ========================= */
                    /* CARD WIDTH */
                    /* ========================= */

                    w-[calc(100vw-80px)]

                    sm:w-[300px]

                    md:w-[calc(50vw-80px)]

                    lg:w-[330px]

                    xl:w-[350px]


                    /* ========================= */
                    /* SAME HEIGHT */
                    /* ========================= */

                    h-[300px]

                    sm:h-[310px]

                    lg:h-[320px]


                    /* ========================= */
                    /* CARD PADDING */
                    /* ========================= */

                    p-4

                    sm:p-5


                    /* ========================= */
                    /* CARD DESIGN */
                    /* ========================= */

                    rounded-xl

                    sm:rounded-2xl

                    bg-white

                    border
                    border-slate-200


                    /* ========================= */
                    /* FLEX */
                    /* ========================= */

                    flex
                    flex-col


                    /* ========================= */
                    /* HOVER */
                    /* ========================= */

                    hover:border-blue-400

                    hover:bg-blue-50

                    hover:-translate-y-1


                    transition-all
                    duration-300
                  "
                >

                  {/* ================================================= */}
                  {/* CARD TOP */}
                  {/* ================================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >

                    {/* COURSE NUMBER */}

                    <div
                      className="
                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-lg
                        sm:rounded-xl

                        bg-slate-100

                        flex
                        items-center
                        justify-center

                        text-xs
                        sm:text-sm

                        font-bold

                        text-slate-600

                        group-hover/course:bg-blue-600
                        group-hover/course:text-white

                        transition-all
                        duration-300

                        shrink-0
                      "
                    >
                      {String(
                        courseIndex + 1
                      ).padStart(2, "0")}
                    </div>


                    {/* COURSE LABEL */}

                    <span
                      className="
                        text-[10px]
                        sm:text-[11px]

                        font-medium

                        text-blue-600

                        bg-blue-50

                        px-2.5
                        sm:px-3

                        py-1
                        sm:py-1.5

                        rounded-full

                        shrink-0
                      "
                    >
                      Course
                    </span>

                  </div>


                  {/* ================================================= */}
                  {/* COURSE NAME */}
                  {/* ================================================= */}

                  <h4
                    className="
                      mt-4
                      sm:mt-5

                      text-sm
                      sm:text-base
                      lg:text-lg

                      font-bold

                      leading-5
                      sm:leading-6

                      text-slate-800

                      group-hover/course:text-blue-600

                      transition-colors
                      duration-300
                    "
                  >
                    {course}
                  </h4>


                  {/* ================================================= */}
                  {/* DESCRIPTION */}
                  {/* ================================================= */}

                  <p
                    className="
                      mt-2

                      text-xs
                      sm:text-sm

                      leading-5

                      text-slate-500

                      h-[60px]

                      overflow-hidden
                    "
                  >
                    {courseDescriptions[course] ||
                      "Learn practical concepts, industry skills and real-world applications through hands-on training."}
                  </p>


                  {/* ================================================= */}
                  {/* EXPLORE BUTTON */}
                  {/* ================================================= */}

                  <div
                    className="
                      mt-auto
                      pt-4
                      sm:pt-5
                    "
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCourse({
                          name: course,
                          category: category.title,
                        })
                      }
                      className="
                        w-full

                        flex
                        items-center
                        justify-center
                        gap-2

                        px-3
                        sm:px-4

                        py-2.5
                        sm:py-3

                        rounded-lg
                        sm:rounded-xl

                        bg-slate-900
                        text-white

                        text-xs
                        sm:text-sm

                        font-semibold

                        hover:bg-blue-600

                        active:scale-[0.98]

                        transition-all
                        duration-300

                        cursor-pointer
                      "
                    >

                      <span>
                        Explore Course
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>

                    </button>

                  </div>

                </div>

              )
            )}

          </div>


          {/* =================================================== */}
          {/* RIGHT BUTTON */}
          {/* =================================================== */}

          <button
            type="button"
            onClick={() => {

              const slider = document.getElementById(
                `course-slider-${index}`
              );

              if (!slider) return;

              const card = slider.querySelector(
                ".course-card"
              );

              if (!card) return;

              const cardWidth =
                card.getBoundingClientRect().width;

              const gap =
                window.innerWidth < 640
                  ? 12
                  : window.innerWidth < 1024
                  ? 16
                  : 20;

              slider.scrollBy({
                left: cardWidth + gap,
                behavior: "smooth",
              });

            }}
            className="
              absolute

              right-1
              sm:right-2
              lg:right-0

              top-1/2
              -translate-y-1/2

              z-30

              w-8
              h-8

              sm:w-10
              sm:h-10

              rounded-full

              bg-blue-600
              text-white

              flex
              items-center
              justify-center

              hover:bg-blue-700
              hover:scale-105

              active:scale-95

              transition-all
              duration-300

              cursor-pointer

              touch-manipulation

              select-none
            "
            aria-label={`Next ${category.title} courses`}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>

          </button>

        </div>


        {/* ===================================================== */}
        {/* CATEGORY FOOTER */}
        {/* ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            mt-3
            sm:mt-4

            px-2
          "
        >

          <span
            className="
              text-[10px]
              sm:text-xs

              text-slate-400
            "
          >
            Category {String(index + 1).padStart(2, "0")}
          </span>


          <span
            className="
              text-[10px]
              sm:text-xs

              font-medium

              text-blue-600
            "
          >
            {category.courses.length} Courses
          </span>

        </div>

      </div>

    ))}

  </div>

</div>




{selectedCourse && details && (
  <div
    className="
      fixed inset-0 z-[9999]
      flex items-start justify-center
      bg-slate-950/80
      backdrop-blur-xl
      px-2 sm:px-4
      pt-[105px] pb-2
    "
    onClick={() => setSelectedCourse(null)}
  >

    {/* =====================================================
        MAIN MODAL
    ===================================================== */}

    <div
      className="
        relative
        w-full
        max-w-6xl
        h-[calc(100vh-115px)]
        overflow-hidden
        rounded-[28px]
        bg-[#0b1120]
        border border-white/10
        shadow-[0_30px_100px_rgba(0,0,0,0.5)]
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* =====================================================
          CLOSE BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setSelectedCourse(null)}
        className="
          absolute
          z-50
          top-5
          right-5
          w-10
          h-10
          rounded-full
          bg-white/10
          border border-white/10
          text-slate-300
          flex
          items-center
          justify-center
          hover:bg-white/20
          hover:text-white
          transition-all
        "
      >
        <X size={18} />
      </button>


      {/* =====================================================
          SCROLL AREA
      ===================================================== */}

      <div className="h-full overflow-y-auto">

        {/* =================================================
            HERO SECTION
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            px-6
            py-8
            sm:px-10
            sm:py-10
          "
        >

          {/* BLUE GLOW */}

          <div
            className="
              absolute
              -top-32
              -left-32
              w-80
              h-80
              rounded-full
              bg-blue-600/20
              blur-[100px]
            "
          />


          {/* VIOLET GLOW */}

          <div
            className="
              absolute
              -bottom-32
              right-0
              w-80
              h-80
              rounded-full
              bg-violet-600/20
              blur-[100px]
            "
          />


          <div className="relative">

            {/* =================================================
                TOP ROW
            ================================================= */}

            <div className="flex items-center gap-4">

              <div
                className="
                  relative
                  w-14 h-14
                  sm:w-20 sm:h-20
                  shrink-0
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  to-violet-600
                  flex
                  items-center
                  justify-center
                  shadow-[0_15px_40px_rgba(59,130,246,0.35)]
                "
              >

                <GraduationCap
                  size={32}
                  strokeWidth={1.7}
                  className="text-white"
                />


                <div
                  className="
                    absolute
                    -right-2
                    -top-2
                    w-6
                    h-6
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Sparkles
                    size={13}
                    className="text-blue-600"
                  />

                </div>

              </div>


              {/* CATEGORY */}

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/20
                    bg-blue-500/10
                    px-3
                    py-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-blue-300
                  "
                >

                  <Layers3 size={12} />

                  {selectedCourse.category}

                </div>

              </div>

            </div>


            {/* =================================================
                COURSE TITLE
            ================================================= */}

            <h2
              className="
                mt-6
                max-w-3xl
                text-3xl
                sm:text-5xl
                font-black
                tracking-tight
                text-white
              "
            >
              {selectedCourse.name}
            </h2>


            {/* =================================================
                COURSE DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-slate-400
              "
            >
              {details.description}
            </p>


            {/* =================================================
                QUICK STATS
            ================================================= */}

            <div
              className="
                mt-6
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-3
              "
            >

              {/* LEARNING */}

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-4
                "
              >

                <BookOpen
                  size={20}
                  className="text-blue-400"
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Learning
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {details.learning.length} Modules
                </p>

              </div>


              {/* DURATION */}

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-4
                "
              >

                <Clock3
                  size={20}
                  className="text-violet-400"
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Duration
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {details.duration}
                </p>

              </div>


              {/* PROJECTS */}

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-4
                "
              >

                <Rocket
                  size={20}
                  className="text-cyan-400"
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Projects
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {details.projects.length} Projects
                </p>

              </div>


              {/* OUTCOME */}

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-4
                "
              >

                <Award
                  size={20}
                  className="text-emerald-400"
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-slate-500
                  "
                >
                  Outcome
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Job Ready
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            WHITE CONTENT AREA
        ===================================================== */}

        <div
          className="
            rounded-t-[30px]
            bg-white
            px-6
            py-8
            sm:px-10
            sm:py-10
          "
        >

          {/* =================================================
              LEARNING PATH
          ================================================= */}

          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-blue-600
                "
              >
                Learning Path
              </p>

              <h3
                className="
                  mt-1
                  text-xl
                  sm:text-2xl
                  font-black
                  text-slate-900
                "
              >
                What You Will Learn
              </h3>

            </div>


            <div
              className="
                hidden
                sm:flex
                w-10
                h-10
                rounded-xl
                bg-blue-50
                items-center
                justify-center
              "
            >

              <BookOpen
                size={20}
                className="text-blue-600"
              />

            </div>

          </div>


          {/* =================================================
              COURSE-SPECIFIC LEARNING
          ================================================= */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
            "
          >

            {details.learning.map((item, index) => (

              <div
                key={item}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-slate-100
                  bg-slate-50
                  p-4
                  hover:border-blue-200
                  hover:bg-blue-50/50
                  transition-all
                "
              >

                <div
                  className="
                    w-9
                    h-9
                    shrink-0
                    rounded-xl
                    bg-white
                    border
                    border-slate-100
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-all
                  "
                >

                  <Check size={16} />

                </div>


                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    {item}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      text-slate-400
                    "
                  >
                    Module {String(index + 1).padStart(2, "0")}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* =================================================
              TOOLS + PROJECTS
          ================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-5
            "
          >

            {/* =================================================
                TOOLS
            ================================================= */}

            <div
              className="
                rounded-3xl
                border
                border-slate-100
                p-6
                bg-white
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-slate-900
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Code2
                    size={20}
                    className="text-white"
                  />

                </div>


                <div>

                  <h3 className="font-black text-slate-900">
                    Tools & Technologies
                  </h3>

                  <p className="text-xs text-slate-400">
                    Course-specific tools
                  </p>

                </div>

              </div>


              {/* COURSE SPECIFIC TOOLS */}

              <div className="mt-5 flex flex-wrap gap-2">

                {details.tools.map((tool) => (

                  <span
                    key={tool}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-slate-600
                      hover:border-blue-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition-all
                    "
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </div>


            {/* =================================================
                PROJECTS
            ================================================= */}

            <div
              className="
                rounded-3xl
                border
                border-slate-100
                p-6
                bg-white
                shadow-[0_10px_35px_rgba(15,23,42,0.05)]
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
                  "
                >

                  <Rocket
                    size={20}
                    className="text-white"
                  />

                </div>


                <div>

                  <h3 className="font-black text-slate-900">
                    Practical Projects
                  </h3>

                  <p className="text-xs text-slate-400">
                    Projects for this course
                  </p>

                </div>

              </div>


              {/* COURSE SPECIFIC PROJECTS */}

              <div className="mt-5 space-y-3">

                {details.projects.map((project) => (

                  <div
                    key={project}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-slate-600
                    "
                  >

                    <Check
                      size={15}
                      className="text-emerald-500"
                    />

                    {project}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              CAREER SECTION
          ================================================= */}

          <div
            className="
              mt-8
              rounded-3xl
              bg-slate-950
              p-6
              sm:p-7
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                w-60
                h-60
                rounded-full
                bg-blue-600/20
                blur-[80px]
              "
            />


            <div className="relative">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <BriefcaseBusiness
                    size={21}
                    className="text-blue-400"
                  />

                </div>


                <div>

                  <h3 className="font-black text-white">
                    Career Opportunities
                  </h3>

                  <p className="text-xs text-slate-400">
                    Careers related to {selectedCourse.name}
                  </p>

                </div>

              </div>


              {/* COURSE SPECIFIC CAREERS */}

              <div className="mt-5 flex flex-wrap gap-2">

                {details.careers.map((career) => (

                  <span
                    key={career}
                    className="
                      rounded-full
                      bg-white/10
                      border border-white/10
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-slate-300
                      hover:bg-blue-600/20
                      hover:border-blue-400/30
                      hover:text-blue-300
                      transition-all
                    "
                  >
                    {career}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-5
              rounded-3xl
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              to-indigo-50
              p-5
              sm:p-6
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  border border-blue-100
                  flex
                  items-center
                  justify-center
                  shadow-sm
                "
              >

                <GraduationCap
                  size={22}
                  className="text-blue-600"
                />

              </div>


              <div>

                <p className="text-xs font-bold text-blue-600">
                  START YOUR JOURNEY
                </p>

                <h3 className="mt-1 font-black text-slate-900">
                  Ready to learn {selectedCourse.name}?
                </h3>

              </div>

            </div>


            <Link
             to="/contact#enroll"
  onClick={() => {
    
    setTimeout(() => {
      const element = document.getElementById("enroll");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }}
             

                // navigate("/contact#enroll");
           
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-slate-950
                px-6
                py-4
                text-sm
                font-black
                text-white
                shadow-xl
                hover:bg-blue-600
                transition-all
              "
            >

              Enroll Now

              <ArrowRight
                size={17}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />

            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        {/* <div className="mt-14 text-center">
          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Learn. Build. Practice.{" "}
            <span
              className="
                font-semibold
                text-slate-600
              "
            >
              Become industry ready.
            </span>
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Courses;
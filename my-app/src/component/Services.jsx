const services = [
  {
    number: "01",
    title: "System Design",
    description: "Build scalable and reliable system architectures.",
  },
  {
    number: "02",
    title: "Software Design",
    description: "Design practical software solutions for real-world needs.",
  },
  {
    number: "03",
    title: "IT Consulting",
    description: "Get technical guidance for your business and projects.",
  },
  {
    number: "04",
    title: "Business Consulting",
    description: "Turn your ideas into practical business solutions.",
  },
  {
    number: "05",
    title: "Student Counselling",
    description: "Choose the right learning and career direction.",
  },
  {
    number: "06",
    title: "Career Guidance",
    description: "Plan your career path with the right guidance.",
  },
  {
    number: "07",
    title: "Interview Training",
    description: "Prepare confidently for technical and HR interviews.",
  },
  {
    number: "08",
    title: "Internship Training",
    description: "Gain practical experience through industry-focused training.",
  },
  {
    number: "09",
    title: "Aptitude Courses",
    description: "Improve your logical, quantitative and reasoning skills.",
  },
  {
    number: "10",
    title: "Final Year Projects",
    description: "Build meaningful projects with proper technical guidance.",
  },
  {
    number: "11",
    title: "Logo / Branding Design",
    description: "Create a strong and professional brand identity.",
  },
  {
    number: "12",
    title: "Placement Assistance",
    description: "Get support to prepare and move towards your career.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#fafafa] py-20 sm:py-24 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">

          <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
            BEYOND COURSES
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything You Need{" "}
            <span className="text-blue-600">
              To Grow.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            We provide practical services and guidance to support your
            learning, career, projects, and professional growth.
          </p>

        </div>


        {/* ================= SERVICES CARDS ================= */}

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.number}
              className="
                group
                relative
                overflow-hidden

                min-h-[270px]

                rounded-2xl

                border
                border-slate-200

                bg-white

                p-7
                sm:p-8

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]
              "
            >

              {/* Background Number */}

              <span
                className="
                  absolute
                  -right-1
                  -top-5

                  text-[110px]
                  font-black
                  leading-none

                  text-slate-50

                  transition-all
                  duration-500

                  group-hover:text-blue-50
                  group-hover:scale-110
                "
              >
                {service.number}
              </span>


              {/* Top */}

              <div className="relative z-10 flex items-center justify-between">

                <span
                  className="
                    text-sm
                    font-bold
                    tracking-widest

                    text-blue-600
                  "
                >
                  {service.number}
                </span>


                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-slate-200

                    text-lg
                    text-slate-400

                    transition-all
                    duration-300

                    group-hover:border-blue-600
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:rotate-45
                  "
                >
                  ↗
                </div>

              </div>


              {/* Content */}

              <div className="relative z-10 mt-12">

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight

                    text-slate-900

                    transition-colors
                    duration-300

                    group-hover:text-blue-600
                  "
                >
                  {service.title}
                </h3>


                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

              </div>


              {/* Bottom Line */}

              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-slate-100">

                <div
                  className="
                    h-full
                    w-0

                    bg-blue-600

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        {/* <div className="mt-20 border-t border-slate-200 pt-10">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-bold tracking-[0.18em] text-blue-600">
                LET'S WORK TOGETHER
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Ready to take the next step?
              </h3>

            </div>


            <button
              type="button"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3

                rounded-xl

                bg-slate-900

                px-6
                py-3.5

                text-sm
                font-bold
                text-white

                transition-all
                duration-300

                hover:bg-blue-600
                hover:shadow-lg
              "
            >
              Get Career Support

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>

        </div> */}

      </div>
    </section>
  );
}

export default Services;
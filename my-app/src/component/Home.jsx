import { Link } from "react-router-dom";
function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-white
        pt-[72px]
        sm:pt-[80px]
        lg:pt-[82px]
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Soft Blue Glow */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[400px]
            rounded-full
            bg-blue-500/10
            blur-[100px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1150px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-16
          sm:py-20
        "
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* BRAND */}

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
              bg-blue-50/70
              text-blue-600
              text-xs
              sm:text-sm
              font-bold
            "
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />

            HIKOO TECHNOLOGY
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-7
              text-[42px]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1]
              tracking-[-0.045em]
              text-slate-950
            "
          >
            Build Skills.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              Build Careers.
            </span>

            <br />

            Build Technology.
          </h1>

          {/* TAGLINE */}

          <p
            className="
              mt-7
              text-base
              sm:text-lg
              font-semibold
              text-slate-700
            "
          >
            Simplicity Solves Complexity
          </p>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              leading-7
              text-slate-500
            "
          >
            Learn modern technologies, build real-world projects,
            and develop practical skills for a successful technology career.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-3
            "
          >
            <a
              href="#courses"
              className="
                w-full
                sm:w-auto
                px-7
                py-3.5
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                sm:text-base
                font-bold
                shadow-lg
                shadow-blue-600/20
                hover:bg-blue-700
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Explore Courses →
            </a>

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

              href="#contact"
              className="
                w-full
                sm:w-auto
                px-7
                py-3.5
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-700
                text-sm
                sm:text-base
                font-bold
                hover:border-blue-300
                hover:text-blue-600
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Get Started
            </Link>
          </div>

          {/* TRUST */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-x-7
              gap-y-3
              text-xs
              sm:text-sm
              text-slate-500
            "
          >
            <span>
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Practical Learning
            </span>

            <span>
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Real Projects
            </span>

            <span>
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Internship Opportunities
            </span>

            <span>
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Career Support
            </span>
          </div>

          {/* SIMPLE STATS */}

          <div
            className="
              mt-12
              max-w-3xl
              mx-auto
              grid
              grid-cols-2
              md:grid-cols-4
              border
              border-slate-200
              rounded-2xl
              bg-white
              shadow-[0_15px_40px_rgba(15,23,42,0.05)]
              overflow-hidden
            "
          >
            <div className="py-5 border-b md:border-b-0 md:border-r border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                10+
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Technologies
              </p>
            </div>

            <div className="py-5 border-b md:border-b-0 md:border-r border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                100+
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Learners
              </p>
            </div>

            <div className="py-5 md:border-r border-slate-200">
              <p className="text-2xl font-black text-slate-900">
                25+
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Projects
              </p>
            </div>

            <div className="py-5">
              <p className="text-2xl font-black text-blue-600">
                24/7
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Support
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-white
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}

export default Home;
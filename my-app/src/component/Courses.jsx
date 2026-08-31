import courseCategories from "./courseCategories";

function Courses() {
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
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

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

      {/* ================= CONTAINER ================= */}

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

        {/* ================= HEADING ================= */}

        <div className="max-w-3xl mx-auto text-center">

          {/* LABEL */}

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

          {/* TITLE */}

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

          {/* DESCRIPTION */}

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


        {/* ================= COURSE GRID ================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
          "
        >

          {courseCategories.map((category, index) => (

            <div
              key={category.title}
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]
                transition-all
                duration-300
              "
            >

              {/* TOP ACCENT */}

              <div
                className="
                  absolute
                  top-0
                  left-6
                  right-6
                  h-[2px]
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  scale-x-0
                  origin-left
                  group-hover:scale-x-100
                  transition-transform
                  duration-300
                "
              />

              {/* ================= HEADER ================= */}

              <div className="flex items-start justify-between">

                {/* ICON */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-50
                    border
                    border-blue-100
                    flex
                    items-center
                    justify-center
                    text-xl
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:border-blue-600
                    transition-all
                    duration-300
                  "
                >
                  {category.icon}
                </div>

                {/* NUMBER */}

                <span
                  className="
                    text-xs
                    font-bold
                    text-slate-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  mt-5
                  text-lg
                  sm:text-xl
                  font-bold
                  text-slate-900
                  group-hover:text-blue-600
                  transition-colors
                  duration-300
                "
              >
                {category.title}
              </h3>


              {/* ================= PROGRAM COUNT ================= */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                "
              >

                <span
                  className="
                    text-sm
                    font-semibold
                    text-blue-600
                  "
                >
                  {category.courses.length}
                </span>

                <span className="text-sm text-slate-400">
                  Programs available
                </span>

              </div>


              {/* ================= DIVIDER ================= */}

              <div
                className="
                  mt-5
                  h-px
                  bg-slate-100
                "
              />


              {/* ================= COURSE LIST ================= */}

              <div className="mt-5 space-y-3">

                {category.courses.slice(0, 4).map((course) => (

                  <div
                    key={course}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-slate-600
                    "
                  >

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        shrink-0
                        rounded-full
                        bg-blue-50
                        text-blue-600
                        text-[10px]
                        font-black
                      "
                    >
                      ✓
                    </span>

                    <span className="truncate">
                      {course}
                    </span>

                  </div>

                ))}

              </div>


              {/* ================= BOTTOM ================= */}

              <div
                className="
                  mt-6
                  pt-4
                  border-t
                  border-slate-100
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-400
                  "
                >
                  Industry Ready
                </span>

                {/* <span
                  className="
                    text-sm
                    font-bold
                    text-blue-600
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                >
                  Explore →
                </span> */}

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <div
          className="
            mt-12
            text-center
          "
        >

          {/* <p
            className="
              text-sm
              text-slate-400
            "
          >
            Learn. Build. Practice.{" "}
            <span className="font-semibold text-slate-600">
              Become industry ready.
            </span>
          </p> */}

        </div>

      </div>

    </section>
  );
}

export default Courses;
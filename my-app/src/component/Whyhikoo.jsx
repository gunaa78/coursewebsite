const benefits = [
  {
    number: "01",
    title: "Industry-Focused",
    description:
      "Curriculum built with real job requirements. Learn practical skills that companies actually use.",
  },
  {
    number: "02",
    title: "Hybrid Learning",
    description:
      "Learn in-class or online with flexible learning options that fit your schedule.",
  },
  {
    number: "03",
    title: "Certified Training",
    description:
      "Recognized certifications to strengthen your resume and professional credibility.",
  },
  {
    number: "04",
    title: "Placement Support",
    description:
      "Mock interviews, resume building and career support to help you move towards the right opportunity.",
  },
];

function WhyHikoo() {
  return (
    <section
      id="why"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">

          <p
            className="
              text-xs
              sm:text-sm
              font-bold
              tracking-[0.25em]
              text-blue-600
            "
          >
            WHY HIKOO
          </p>

          <h2
            className="
              mt-4
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-gray-900
              leading-tight
            "
          >
            What Makes Us
            <br />
            <span className="text-blue-600">
              Different
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              sm:text-base
              text-gray-500
              leading-7
            "
          >
            Practical learning, flexible training and career-focused
            support designed to help you build a stronger future.
          </p>

        </div>


        {/* ================= BENEFITS ================= */}
        <div className="mt-14 w-full">
  <div className="relative w-full">

    {/* Main Timeline Line */}
    <div
      className="
        absolute
        left-[19px]
        sm:left-[23px]
        top-2
        bottom-2
        w-[2px]
        bg-gray-200
      "
    />

    {benefits.map((benefit) => (
      <div
        key={benefit.number}
        className="
          group
          relative
          flex
          w-full
          gap-6
          sm:gap-10
          pb-12
          sm:pb-14
          last:pb-0
          opacity-100
          visible
        "
      >

        {/* Timeline Dot */}
       {/* Timeline Dot */}
<div
  className="
    relative
    z-20
    shrink-0
    w-10
    sm:w-12
    flex
    justify-center
  "
>
  <div
    className="
      mt-1
      w-10
      h-10
      sm:w-12
      sm:h-12

      rounded-full

      bg-white
      border-2
      border-gray-300

      flex
      items-center
      justify-center

      opacity-100
      visible

      sm:group-hover:bg-blue-600
      sm:group-hover:border-blue-600

      transition-all
      duration-300
    "
  >
    <span
      className="
        text-xs
        font-bold
        text-gray-500

        sm:group-hover:text-white
      "
    >
      {benefit.number}
    </span>
  </div>
</div>


        {/* Content */}
        <div className="flex-1 min-w-0 opacity-100 visible">

          <h3
            className="
              mt-2
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-black
              text-gray-900

              sm:group-hover:text-blue-600

              transition-colors
              duration-300
            "
          >
            {benefit.title}
          </h3>


          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              sm:text-base
              text-gray-500
              leading-7
            "
          >
            {benefit.description}
          </p>


          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              text-gray-400

              sm:group-hover:text-blue-600

              transition-colors
              duration-300
            "
          >
            <span>LEARN MORE</span>

            <span
              className="
                text-base
                sm:group-hover:translate-x-1
                transition-transform
              "
            >
              →
            </span>
          </div>

        </div>

      </div>
    ))}
  </div>
</div>
        {/* ================= BOTTOM ================= */}

        {/* <div
          className="
            mt-10

            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between

            gap-4
          "
        >

          <p className="text-sm text-gray-400">
            Learn smarter. Build stronger. Grow faster.
          </p>

          <button
            className="
              w-fit

              px-6
              py-3

              rounded-full

              bg-blue-600
              text-white

              text-sm
              font-bold

              hover:bg-blue-700
              hover:-translate-y-0.5

              transition-all
              duration-300
            "
          >
            Start Your Journey →
          </button>

        </div> */}

      </div>
    </section>
  );
}

export default WhyHikoo;
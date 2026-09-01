import {
 
  Mail,
  Phone,
  MapPin,
 
 
  
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-5">

            <h2 className="text-3xl font-bold tracking-tight">
              HIKOO
              <span className="text-blue-500">.</span>
            </h2>

            <p className="text-slate-400 mt-5 max-w-md leading-7">
              Building meaningful digital solutions that help
              businesses grow, innovate and move forward.
            </p>

            {/* <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                mt-7
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                flex
                items-center
                gap-3
                hover:bg-blue-700
                transition
              "
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </button> */}

          </div>


          {/* ================= COMPANY ================= */}

          <div className="lg:col-span-2">

            <p className="
              text-xs
              uppercase
              tracking-[0.2em]
              font-semibold
              text-slate-500
              mb-5
            ">
              Company
            </p>

            <div className="space-y-3">

              <a
                href="/"
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                Home
              </a>

              <p
                 onClick={() => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                Courses
              </p>

              <p
                onClick={() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                Services
              </p>

              <p
                 onClick={() => {
    document.getElementById("why")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                Why Us
              </p>

              <p
              onClick={() => {
    document.getElementById("internship")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                 Internship
              </p>

<p
                 onClick={() => {
    document.getElementById("career")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                 Career
              </p>


              <p
                onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="block text-slate-300 hover:text-blue-500 transition"
              >
                 Contact
              </p>
            </div>

          </div>


          {/* ================= SERVICES ================= */}

          <div className="lg:col-span-2">

            <p className="
              text-xs
              uppercase
              tracking-[0.2em]
              font-semibold
              text-slate-500
              mb-5
            ">
              Services
            </p>

            <div className="space-y-3">

              <p className="text-slate-300">
                Web Development
              </p>

              <p className="text-slate-300">
                Mobile App Development
              </p>

              <p className="text-slate-300">
                UI/UX Design
              </p>

              <p className="text-slate-300">
                Software Development
              </p>

              <p className="text-slate-300">
                Cloud Solutions
              </p>

            </div>

          </div>


          {/* ================= CONTACT ================= */}

          <div className="lg:col-span-3">

            <p className="
              text-xs
              uppercase
              tracking-[0.2em]
              font-semibold
              text-slate-500
              mb-5
            ">
              Get In Touch
            </p>


            <div className="space-y-5">

              {/* EMAIL */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hikootechnology@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  text-slate-300
                  hover:text-blue-500
                  transition
                "
              >
                <Mail
                  size={18}
                  className="text-blue-500 mt-1 shrink-0"
                />

                <span>
                  hikootechnology@gmail.com
                </span>

              </a>


              {/* PHONE */}

              <a
                href="tel:+91XXXXXXXXXX"
                className="
                  flex
                  items-start
                  gap-3
                  text-slate-300
                  hover:text-blue-500
                  transition
                "
              >
                <Phone
                  size={18}
                  className="text-blue-500 mt-1 shrink-0"
                />

                <span>
                  +91 7598 639 009
                </span>

              </a>


              {/* LOCATION */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hikoo+Technology+Pvt+Ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  text-slate-300
                  hover:text-blue-500
                  transition
                "
              >
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1 shrink-0"
                />

                <span>
                  Maduari, Tamil Nadu, India
                </span>

              </a>

            </div>


            {/* SOCIAL ICONS */}

            {/* <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                className="
                  w-10
                  h-10
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:border-blue-500
                  hover:text-blue-500
                  transition
                "
              >
                <Linkedin size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:border-blue-500
                  hover:text-blue-500
                  transition
                "
              >
                <Instagram size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:border-blue-500
                  hover:text-blue-500
                  transition
                "
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  border
                  border-slate-800
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:border-blue-500
                  hover:text-blue-500
                  transition
                "
              >
                <Github size={17} />
              </a>

            </div> */}

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="border-t border-slate-800 mt-14 pt-7">

          <div className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-4
          ">

            <p className="text-sm text-slate-500">
              © 2026 Hikoo Technology Pvt. Ltd. All rights reserved.
            </p>


            <div className="flex items-center gap-6">

              <a
                href="/privacy"
                className="text-sm text-slate-500 hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-sm text-slate-500 hover:text-white transition"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
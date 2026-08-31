import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // SCROLL EFFECT
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // =====================================================
  // GO TO HOME SECTION
  // =====================================================

  const goHomeSection = (section) => {
    closeMenu();

    if (location.pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);

      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  // =====================================================
  // INTERNSHIP
  // =====================================================

  const goInternship = () => {
    closeMenu();
    navigate("/internship");
  };

  // =====================================================
  // ACTIVE ROUTE
  // =====================================================

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 lg:px-8 pt-3">

      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <div className="hidden lg:block">

        <div
          className={`
            max-w-[1550px]
            mx-auto
            rounded-2xl
            border
            transition-all
            duration-500

            ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border-white/70 shadow-[0_15px_45px_rgba(15,23,42,0.12)]"
                : "bg-white/65 backdrop-blur-xl border-white/50 shadow-[0_10px_35px_rgba(15,23,42,0.07)]"
            }
          `}
        >

          <div className="px-6 xl:px-8">

            <div className="h-[76px] flex items-center">

              {/* =================================================
                  LOGO
              ================================================= */}

              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3 shrink-0 group"
              >

                <div
                  className="
                    relative
                    w-11
                    h-11
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    via-blue-600
                    to-indigo-700
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-blue-600/25
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:rotate-1
                  "
                >

                  <span className="text-white text-xl font-black">
                    H
                  </span>

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-blue-400
                      blur-xl
                      opacity-0
                      group-hover:opacity-20
                      transition
                    "
                  />

                </div>

                <div className="leading-none">

                  <h1
                    className="
                      text-xl
                      xl:text-2xl
                      font-black
                      tracking-tight
                      text-gray-900
                    "
                  >
                    HIKOO
                  </h1>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-bold
                      tracking-[3px]
                      text-blue-600
                    "
                  >
                    TECHNOLOGY
                  </p>

                </div>

              </Link>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <div className="flex-1 flex justify-center">

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    px-2
                    py-2
                    rounded-2xl
                    bg-gray-100/50
                    backdrop-blur-md
                    border
                    border-white/70
                  "
                >

                  {/* HOME */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("home")}
                    className="
                      relative
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-white
                      transition-all
                      duration-300
                    "
                  >
                    Home
                  </button>

                  {/* COURSES */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("courses")}
                    className="
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-white
                      transition-all
                      duration-300
                    "
                  >
                    Courses
                  </button>

                  {/* SERVICES */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("services")}
                    className="
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-white
                      transition-all
                      duration-300
                    "
                  >
                    Services
                  </button>

                  {/* WHY US */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("why")}
                    className="
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-white
                      transition-all
                      duration-300
                    "
                  >
                    Why Us
                  </button>

                  {/* INTERNSHIP */}

                  <Link
                    to="/intern"
                    onClick={closeMenu}
                    className={`
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive("/internship")
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "text-gray-600 hover:text-blue-600 hover:bg-white"
                      }
                    `}
                  >
                    Internship
                  </Link>

                  {/* CAREERS */}

                  <Link
                    to="/career"
                    onClick={closeMenu}
                    className={`
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive("/career")
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "text-gray-600 hover:text-blue-600 hover:bg-white"
                      }
                    `}
                  >
                    Careers
                  </Link>

                  {/* CONTACT */}

                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`
                      px-3.5
                      py-2.5
                      rounded-xl
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive("/contact")
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "text-gray-600 hover:text-blue-600 hover:bg-white"
                      }
                    `}
                  >
                    Contact
                  </Link>

                </div>

              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <div className="flex items-center shrink-0">

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

               
                  type="button"
                  // onClick={() => goHomeSection("enroll")}
                  className="
                
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    text-sm
                    font-bold
                    shadow-lg
                    shadow-blue-600/20
                    hover:shadow-blue-600/35
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                >

                  <span className="relative z-10">
                    Enroll Now
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      text-lg
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      group-hover:translate-x-full
                      transition-transform
                      duration-700
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                    "
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          MOBILE / TABLET NAVBAR
      ===================================================== */}

      <div className="lg:hidden">

        <div
          className={`
            rounded-2xl
            border
            transition-all
            duration-300

            ${
              scrolled
                ? "bg-white/95 backdrop-blur-2xl border-white shadow-lg"
                : "bg-white/75 backdrop-blur-xl border-white/60 shadow-md"
            }
          `}
        >

          <div className="px-4 sm:px-6">

            <div className="h-[68px] flex items-center justify-between">

              {/* MOBILE LOGO */}

              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-700
                    flex
                    items-center
                    justify-center
                    shadow-md
                    shadow-blue-600/20
                  "
                >

                  <span className="text-white text-lg font-black">
                    H
                  </span>

                </div>

                <div className="leading-none">

                  <h1 className="text-lg font-black text-gray-900">
                    HIKOO
                  </h1>

                  <p
                    className="
                      mt-1
                      text-[7px]
                      font-bold
                      tracking-[2px]
                      text-blue-600
                    "
                  >
                    TECHNOLOGY
                  </p>

                </div>

              </Link>

              {/* MENU BUTTON */}

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                  w-11
                  h-11
                  rounded-xl
                  border
                  flex
                  items-center
                  justify-center
                  text-lg
                  transition-all
                  duration-300

                  ${
                    menuOpen
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white/60 text-gray-800 border-white/70 hover:bg-blue-50 hover:text-blue-600"
                  }
                `}
              >
                {menuOpen ? "✕" : "☰"}
              </button>

            </div>

          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {menuOpen && (

            <div
              className="
                border-t
                border-white/60
                bg-white/90
                backdrop-blur-2xl
                rounded-b-2xl
                max-h-[calc(100vh-90px)]
                overflow-y-auto
                overscroll-contain
              "
            >

              <div className="px-4 sm:px-6 py-4">

                <div className="flex flex-col gap-1">

                  {/* HOME */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("home")}
                    className="
                      text-left
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Home
                  </button>

                  {/* COURSES */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("courses")}
                    className="
                      text-left
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Courses
                  </button>

                  {/* SERVICES */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("services")}
                    className="
                      text-left
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Services
                  </button>

                  {/* WHY US */}

                  <button
                    type="button"
                    onClick={() => goHomeSection("why")}
                    className="
                      text-left
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Why Us
                  </button>

                  {/* INTERNSHIP */}

                  <Link
                    to="/intern"
                    onClick={closeMenu}
                    className={`
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      transition

                      ${
                        isActive("/internship")
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }
                    `}
                  >
                    Internship
                  </Link>

                  {/* CAREER */}

                  <Link
                    to="/career"
                    onClick={closeMenu}
                    className={`
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      transition

                      ${
                        isActive("/career")
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }
                    `}
                  >
                    Career
                  </Link>

                  {/* REVIEWS */}

                  {/* <button
                    type="button"
                    onClick={() => goHomeSection("testimonials")}
                    className="
                      text-left
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Reviews
                  </button> */}

                  {/* CONTACT */}

                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      font-semibold
                      transition

                      ${
                        isActive("/contact")
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }
                    `}
                  >
                    Contact
                  </Link>

                </div>

                {/* MOBILE CTA */}

                <div className="mt-4">

                  <button
                    type="button"
                    onClick={() => goHomeSection("enroll")}
                    className="
                      w-full
                      py-3.5
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      text-white
                      font-bold
                      shadow-lg
                      shadow-blue-600/20
                      hover:shadow-blue-600/30
                      transition-all
                    "
                  >
                    Enroll Now →
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
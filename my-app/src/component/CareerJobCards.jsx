import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  
  Briefcase,
  MapPin,
  Clock3,
  ArrowUpRight,
  Upload,
  Plus,
  Pencil,
  Trash2,
  Lock,

} from "lucide-react";

function CareerJobCards({
  openings = [],
  loadingOpenings = false,
  setSelectedRole,
  setShowForm,
  setSubmitSuccess,
  // isAdmin = false,
}) {
  /* =========================================================
     CUSTOM CARDS
  ========================================================= */
 const [showImagePopup, setShowImagePopup] = useState(false);
const [selectedImage, setSelectedImage] = useState("");


  const ADMIN_NAME = "hikoo";
const ADMIN_PASSWORD = "73959";

const [isAdmin, setIsAdmin] = useState(false);

const [showAdminPopup, setShowAdminPopup] = useState(false);
const [adminName, setAdminName] = useState("");
const [adminPassword, setAdminPassword] = useState("");
const [loginError, setLoginError] = useState("");

  const [customCards, setCustomCards] = useState(() => {
    try {
      const savedCards = localStorage.getItem(
        "hikoo_custom_job_cards"
      );

      return savedCards ? JSON.parse(savedCards) : [];
    } catch (error) {
      console.error(
        "Local storage read error:",
        error
      );

      return [];
    }
  });

//  const [showAdminPopup, setShowAdminPopup] = useState(false);
// const [adminName, setAdminName] = useState("");
// const [adminPassword, setAdminPassword] = useState("");


const handleAdminLogin = (e) => {
  e.preventDefault();

  if (
    adminName.trim() === ADMIN_NAME &&
    adminPassword === ADMIN_PASSWORD
  ) {
    setIsAdmin(true);
    setShowAdminPopup(false);

    setAdminName("");
    setAdminPassword("");
    setLoginError("");
  } else {
    setLoginError("Invalid Admin Name or Password.");
  }
};

  /* =========================================================
     SAVE CARDS TO LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    try {
      localStorage.setItem(
        "hikoo_custom_job_cards",
        JSON.stringify(customCards)
      );
    } catch (error) {
      console.error(
        "Local storage save error:",
        error
      );
    }
  }, [customCards]);

  /* =========================================================
     ADD CARD
  ========================================================= */

  const handleAddCard = () => {
    if (!isAdmin) {
      alert("Admin access required.");
      return;
    }

    const newCard = {
      _id: `local-${Date.now()}`,
      positionName: "New Position",
      description:
        "Join our team and work on exciting real-world projects.",
      location: "Madurai, India",
      type: "Full Time",
      experience: "0-2 Years",
      image: "",
    };

    setCustomCards((prev) => [
      newCard,
      ...prev,
    ]);
  };

  /* =========================================================
     IMAGE UPLOAD
     BASE64 - PERSISTS AFTER REFRESH
  ========================================================= */

  const handleImageUpload = (
    cardId,
    event
  ) => {
    if (!isAdmin) {
      alert("Admin access required.");

      event.target.value = "";

      return;
    }

    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    /* =======================================================
       FILE SIZE
    ======================================================= */

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      alert(
        "Image size should be less than 5MB."
      );

      event.target.value = "";

      return;
    }

    /* =======================================================
       FILE TYPE
    ======================================================= */

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {
      alert(
        "Please upload a valid image."
      );

      event.target.value = "";

      return;
    }

    /* =======================================================
       CONVERT IMAGE TO BASE64
    ======================================================= */

    const reader =
      new FileReader();

    reader.onload = () => {
      const imageBase64 =
        reader.result;

      setCustomCards((prev) =>
        prev.map((card) =>
          String(card._id) ===
          String(cardId)
            ? {
                ...card,
                image:
                  imageBase64,
              }
            : card
        )
      );
    };

    reader.onerror = () => {
      alert(
        "Unable to read image."
      );
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  /* =========================================================
     EDIT CARD
  ========================================================= */

  const handleEditCard = (
    card
  ) => {
    if (!isAdmin) {
      alert(
        "Admin access required."
      );

      return;
    }

    const newName =
      window.prompt(
        "Enter Position Name:",
        card.positionName || ""
      );

    if (
      newName === null
    ) {
      return;
    }

    const trimmedName =
      newName.trim();

    if (!trimmedName) {
      alert(
        "Position name cannot be empty."
      );

      return;
    }

    setCustomCards((prev) =>
      prev.map((item) =>
        String(item._id) ===
        String(card._id)
          ? {
              ...item,
              positionName:
                trimmedName,
            }
          : item
      )
    );
  };

  /* =========================================================
     DELETE CARD
  ========================================================= */

  const handleDeleteCard = (
    cardId
  ) => {
    if (!isAdmin) {
      alert(
        "Admin access required."
      );

      return;
    }

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this position?"
      );

    if (!confirmDelete) {
      return;
    }

    setCustomCards((prev) =>
      prev.filter(
        (card) =>
          String(card._id) !==
          String(cardId)
      )
    );
  };

  /* =========================================================
     APPLY
  ========================================================= */

  const handleApply = (
    positionName
  ) => {
    setSelectedRole(
      positionName ||
        "Job Position"
    );

    setShowForm(true);

    setSubmitSuccess("");
  };

  /* =========================================================
     LOADING
  ========================================================= */

  const isLoading =
    loadingOpenings;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="max-w-[1250px] mx-auto px-6">

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="max-w-3xl">

        <p
          className="
            text-blue-600
            text-sm
            uppercase
            tracking-[0.2em]
            font-semibold
          "
        >
          Open Positions
        </p>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-bold
            mt-4
            leading-tight
            text-slate-900
          "
        >
          Find your next

          <br />

          <span className="text-blue-600">
            opportunity.
          </span>
        </h2>

        <p
          className="
            text-lg
            text-slate-500
            leading-8
            mt-6
          "
        >
          Explore our current
          openings and discover
          opportunities to grow
          with Hikoo Technology.
        </p>

      </div>

      {/* =====================================================
          ADMIN STATUS
      ===================================================== */}

      <div className="mt-6">

        {isAdmin ? (
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-50
              border
              border-green-200
              text-green-700
              text-sm
              font-semibold
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
              "
            />

            Admin Access Enabled
          </div>
        ) : (
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-slate-50
              border
              border-slate-200
              text-slate-500
              text-sm
              font-semibold
            "
          >
            <Lock size={14} />

            View Only
          </div>
        )}

      </div>

      {/* =====================================================
          LOADING
      ===================================================== */}

      {isLoading && (
        <div
          className="
            mt-12
            flex
            justify-center
          "
        >
          <div
            className="
              w-10
              h-10
              border-4
              border-blue-100
              border-t-blue-600
              rounded-full
              animate-spin
            "
          />
        </div>
      )}

      {/* =====================================================
          CARDS
      ===================================================== */}

      {!isLoading && (
        <div className="mt-12">

          {/* =================================================
              NO DATA
          ================================================= */}

          {openings.length === 0 &&
            customCards.length === 0 &&
            !isAdmin && (
              <div
                className="
                  text-center
                  py-10
                "
              >
                <p
                  className="
                    text-slate-400
                    text-sm
                  "
                >
                  No open positions
                  available.
                </p>
              </div>
            )}

          {/* =================================================
              CARD GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {/* =================================================
                API / LINKEDIN CARDS
            ================================================= */}

            {openings.map(
              (
                opening,
                index
              ) => {

                const image =
                  opening.imageUrl ||
                  opening.image ||
                  "";

                const positionName =
                  opening.title ||
                  opening.positionName ||
                  "Job Position";

                return (
                  <motion.div
                    key={
                      opening.linkedinJobId ||
                      opening._id ||
                      index
                    }
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
                    className="
                      group
                      bg-white
                      border
                      border-slate-200
                      rounded-2xl
                      overflow-hidden
                      hover:shadow-2xl
                      hover:-translate-y-2
                      transition-all
                      duration-500
                    "
                  >

                    {/* IMAGE */}

                    {image ? (
                      <div
                        className="
                          w-full
                          h-56
                          overflow-hidden
                          bg-slate-100
                        "
                      >
                        <img
                          src={image}
                          alt={
                            positionName
                          }
                          className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-105
                            transition-transform
                            duration-500
                          "
                        />
                      </div>
                    ) : (
                      <div className="p-6">

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
                          "
                        >
                          <Briefcase
                            size={25}
                          />
                        </div>

                      </div>
                    )}

                    {/* CONTENT */}

                    <div className="p-6">

                      <p
                        className="
                          text-blue-600
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.18em]
                        "
                      >
                        {opening.department ||
                          "Engineering"}
                      </p>

                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-slate-900
                          mt-2
                        "
                      >
                        {positionName}
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
                        {opening.description ||
                          "Join our team and work on exciting real-world projects."}
                      </p>

                      {/* DETAILS */}

                      <div
                        className="
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

                          {opening.location ||
                            "Madurai, India"}
                        </span>

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-slate-50
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

                          {opening.type ||
                            "Full Time"}
                        </span>

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-slate-50
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

                          {opening.experience ||
                            "0-2 Years"}
                        </span>

                      </div>

                      {/* APPLY */}

                      <div
                        className="
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
                          onClick={() =>
                            handleApply(
                              positionName
                            )
                          }
                          className="
                            font-semibold
                            text-slate-900
                            hover:text-blue-600
                          "
                        >
                          Apply Now
                        </button>

                        <ArrowUpRight
                          size={20}
                        />

                      </div>

                    </div>

                  </motion.div>
                );
              }
            )}

            {/* =================================================
                CUSTOM CARDS
            ================================================= */}

            {customCards.map(
              (
                card,
                index
              ) => {

                const positionName =
                  card.positionName ||
                  "Job Position";

                return (
                  <motion.div
                    key={card._id}
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
                      delay:
                        index * 0.06,
                    }}
                    className="
                      group
                      relative
                      bg-white
                      border
                      border-slate-200
                      rounded-2xl
                      overflow-hidden
                      hover:shadow-2xl
                      hover:-translate-y-2
                      transition-all
                      duration-500
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        w-full
                        h-56
                        bg-slate-50
                        overflow-hidden
                      "
                    >

                     {card.image ? (
  <div
    className="relative h-56 w-full cursor-pointer overflow-hidden"
    onClick={() => {
      setSelectedImage(card.image);
      setShowImagePopup(true);
    }}
  >
    <img
      src={card.image}
      alt={card.positionName || "Job Position"}
      className="
        w-full
        h-full
        object-cover
        transition
        duration-300
        hover:scale-105
      "
    />

    {/* VIEW IMAGE */}

    <div
      className="
        absolute
        inset-0
        bg-black/0
        hover:bg-black/30
        transition
        flex
        items-center
        justify-center
      "
    >
      <span
        className="
          opacity-0
          hover:opacity-100
          bg-white
          text-slate-900
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          shadow-lg
        "
      >
        View Image
      </span>
    </div>
  </div>
) : (
  <div
    className="
      h-56
      w-full
      bg-slate-100
      flex
      items-center
      justify-center
      text-slate-400
    "
  >
    No Image
  </div>
)}

                      {/* =================================================
                          ADMIN BUTTONS
                      ================================================= */}

                      {isAdmin && (
                        <div
                          className="
                            absolute
                            top-3
                            right-3
                            flex
                            gap-2
                          "
                        >

                          {/* EDIT */}

                        <button
  type="button"
  onClick={() => {
    if (!isAdmin) {
      setShowAdminPopup(true);
      setLoginError("");
      return;
    }

    handleEditCard(card);
  }}
  title="Edit"
  className="
    w-9
    h-9
    rounded-full
    bg-white
    shadow-lg
    flex
    items-center
    justify-center
    text-slate-700
    hover:bg-blue-600
    hover:text-white
    transition
  "
>
  <Pencil size={16} />
</button>

                          {/* DELETE */}

                         <button
  type="button"
  onClick={() => {
    if (!isAdmin) {
      setShowAdminPopup(true);
      setLoginError("");
      return;
    }

    handleDeleteCard(card._id);
  }}
  title="Delete"
  className="
    w-9
    h-9
    rounded-full
    bg-white
    shadow-lg
    flex
    items-center
    justify-center
    text-red-500
    hover:bg-red-500
    hover:text-white
    transition
  "
>
  <Trash2 size={16} />
</button>

                        </div>
                      )}

                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="p-6">

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <p
                          className="
                            text-blue-600
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                          "
                        >
                          Engineering
                        </p>

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            px-2
                            py-1
                            rounded-full
                            bg-blue-50
                            text-blue-600
                          "
                        >
                          HIKOO
                        </span>

                      </div>

                      {/* POSITION */}

                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-slate-900
                          mt-2
                        "
                      >
                        {positionName}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          text-sm
                          text-slate-500
                          leading-6
                          mt-4
                          line-clamp-3
                        "
                      >
                        {card.description ||
                          "Join our team and work on exciting real-world projects."}
                      </p>

                      {/* DETAILS */}

                      <div
                        className="
                          mt-6
                          flex
                          flex-wrap
                          gap-2
                        "
                      >

                        {/* LOCATION */}

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-slate-50
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

                          {card.location ||
                            "Madurai, India"}
                        </span>

                        {/* TYPE */}

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-slate-50
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

                          {card.type ||
                            "Full Time"}
                        </span>

                        {/* EXPERIENCE */}

                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-slate-50
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

                          {card.experience ||
                            "0-2 Years"}
                        </span>

                      </div>

                      {/* =================================================
                          ADMIN IMAGE UPLOAD
                      ================================================= */}

                    {isAdmin && (
  <label
    className="
      mt-6
      w-full
      flex
      items-center
      justify-center
      gap-2
      px-4
      py-3
      rounded-xl
      border
      border-blue-200
      bg-blue-50
      text-blue-600
      cursor-pointer
      font-semibold
      text-sm
      hover:bg-blue-100
      transition
    "
  >
    <Upload size={17} />

    {card.image ? "Change Image" : "Upload Image"}

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) =>
        handleImageUpload(card._id, e)
      }
    />
  </label>
)}

                      {/* =================================================
                          APPLY
                      ================================================= */}

                      <button
                        type="button"
                        onClick={() =>
                          handleApply(
                            positionName
                          )
                        }
                        className="
                          mt-3
                          w-full
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          rounded-xl
                          bg-slate-900
                          text-white
                          font-semibold
                          hover:bg-blue-600
                          transition
                        "
                      >

                        <span>
                          Apply Now
                        </span>

                        <ArrowUpRight
                          size={18}
                        />

                      </button>

                    </div>

                  </motion.div>
                );
              }
            )}

            {/* =================================================
                ADD CARD
            ================================================= */}

          <motion.div
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
  className="
    min-h-[420px]
    rounded-2xl
    border-2
    border-dashed
    border-slate-200
    bg-slate-50
    flex
    flex-col
    items-center
    justify-center
    p-8
    hover:border-blue-300
    hover:bg-blue-50/30
    transition
  "
>
  <div
    className="
      w-16
      h-16
      rounded-2xl
      bg-white
      border
      border-slate-200
      flex
      items-center
      justify-center
    "
  >
    <Plus
      size={30}
      className="text-blue-600"
    />
  </div>

  <h3
    className="
      text-xl
      font-bold
      mt-5
      text-slate-900
    "
  >
    Add New Position
  </h3>

  <p
    className="
      text-sm
      text-slate-500
      text-center
      mt-2
    "
  >
    Create a new Hikoo job position.
  </p>

  <button
    type="button"
    onClick={() => {
      if (!isAdmin) {
        setShowAdminPopup(true);
        setLoginError("");
        return;
      }

      handleAddCard();
    }}
    className="
      mt-6
      px-6
      py-3
      rounded-xl
      bg-blue-600
      text-white
      font-semibold
      flex
      items-center
      gap-2
      hover:bg-blue-700
      shadow-lg
      transition
    "
  >
    <Plus size={18} />
    Add Card
  </button>
</motion.div>

          </div>

        </div>
      )}



    {showAdminPopup && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/50
      backdrop-blur-sm
      px-4
    "
  >
    <div
      className="
        relative
        w-full
        max-w-md
        rounded-2xl
        bg-white
        p-7
        shadow-2xl
      "
    >
      {/* CLOSE */}

      <button
        type="button"
        onClick={() => {
          setShowAdminPopup(false);
          setAdminName("");
          setAdminPassword("");
          setLoginError("");
        }}
        className="
          absolute
          top-4
          right-4
          w-9
          h-9
          rounded-full
          bg-slate-100
          flex
          items-center
          justify-center
          text-slate-500
          hover:bg-red-500
          hover:text-white
          transition
        "
      >
        ✕
      </button>

      {/* ICON */}

      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-blue-50
          text-blue-600
          flex
          items-center
          justify-center
          mb-5
        "
      >
        🔐
      </div>

      <h2
        className="
          text-2xl
          font-bold
          text-slate-900
        "
      >
        Admin Access
      </h2>

      <p
        className="
          mt-2
          text-sm
          text-slate-500
        "
      >
        Enter Admin Name and Password to manage job cards.
      </p>

      <form
        onSubmit={handleAdminLogin}
        className="mt-6 space-y-4"
      >
        {/* ADMIN NAME */}

        <div>
          <label
            className="
              block
              text-sm
              font-semibold
              text-slate-700
              mb-2
            "
          >
            Admin Name
          </label>

          <input
            type="text"
            value={adminName}
            onChange={(e) =>
              setAdminName(e.target.value)
            }
            placeholder="Enter admin name"
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              outline-none
              text-slate-900
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
            required
          />
        </div>

        {/* PASSWORD */}

        <div>
          <label
            className="
              block
              text-sm
              font-semibold
              text-slate-700
              mb-2
            "
          >
            Password
          </label>

          <input
            type="password"
            value={adminPassword}
            onChange={(e) =>
              setAdminPassword(e.target.value)
            }
            placeholder="Enter password"
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              outline-none
              text-slate-900
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
            required
          />
        </div>

        {/* ERROR */}

        {loginError && (
          <p className="text-sm text-red-500 font-medium">
            {loginError}
          </p>
        )}

        {/* LOGIN */}

        <button
          type="submit"
          className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            hover:bg-blue-700
            transition
            shadow-lg
          "
        >
          Login
        </button>
      </form>
    </div>
  </div>
)}



{showImagePopup && selectedImage && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/80
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
    "
    onClick={() => setShowImagePopup(false)}
  >
    <div
      className="
        relative
        max-w-5xl
        w-full
        max-h-[90vh]
        flex
        items-center
        justify-center
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE BUTTON */}

      <button
        type="button"
        onClick={() => setShowImagePopup(false)}
        className="
          absolute
          -top-12
          right-0
          w-10
          h-10
          rounded-full
          bg-white
          text-slate-900
          flex
          items-center
          justify-center
          text-xl
          font-bold
          shadow-lg
          hover:bg-red-500
          hover:text-white
          transition
        "
      >
        ✕
      </button>

      {/* LARGE IMAGE */}

      <img
        src={selectedImage}
        alt="Job Position"
        className="
          max-w-full
          max-h-[85vh]
          object-contain
          rounded-2xl
          shadow-2xl
        "
      />
    </div>
  </div>
)}

    </div>
  );
}

export default CareerJobCards;
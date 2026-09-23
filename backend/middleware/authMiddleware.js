import jwt from "jsonwebtoken";
import User from "../models/User.js";


/* =========================================================
   PROTECT
========================================================= */

export const protect = async (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;


    /* -------------------------------------------------------
       CHECK AUTHORIZATION HEADER
    ------------------------------------------------------- */

    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Authorization token required",
      });
    }


    /* -------------------------------------------------------
       GET TOKEN
    ------------------------------------------------------- */

    const token =
      authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message:
          "Authorization token required",
      });
    }


    /* -------------------------------------------------------
       VERIFY TOKEN
    ------------------------------------------------------- */

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );


    /* -------------------------------------------------------
       FIND USER
    ------------------------------------------------------- */

    const user =
      await User.findById(
        decoded.id
      ).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }


    /* -------------------------------------------------------
       SAVE USER IN REQUEST
    ------------------------------------------------------- */

    req.user = user;

    next();

  } catch (error) {
    console.error(
      "Protect middleware error:",
      error
    );

    return res.status(401).json({
      success: false,
      message:
        "Invalid or expired token.",
    });
  }
};


/* =========================================================
   ADMIN ONLY
========================================================= */

export const adminOnly = (
  req,
  res,
  next
) => {

  if (
    !req.user ||
    req.user.role !== "admin"
  ) {
    return res.status(403).json({
      success: false,
      message:
        "Admin access required.",
    });
  }

  next();
};
require("dotenv").config();

const { v2: cloudinary } = require("cloudinary");
const streamifier = require("streamifier");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("========== CLOUDINARY CONFIG ==========");

console.log(
  "CLOUD NAME:",
  process.env.CLOUDINARY_CLOUD_NAME
);

console.log(
  "API KEY:",
  process.env.CLOUDINARY_API_KEY
);

console.log(
  "API SECRET:",
  process.env.CLOUDINARY_API_SECRET
    ? "LOADED"
    : "NOT LOADED"
);

console.log("========================================");


const uploadToCloudinary = (
  fileBuffer,
  originalName,
  folder
) => {
  return new Promise((resolve, reject) => {

    const publicId =
  originalName.replace(/\.[^/.]+$/, "") +
  "-" +
  Date.now() +
  ".pdf";

    console.log("");
    console.log("========== CLOUDINARY UPLOAD ==========");

    console.log("Original Name:", originalName);
    console.log("Folder:", folder);
    console.log("Public ID:", publicId);
    console.log("Buffer Size:", fileBuffer.length);

    console.log("=======================================");


    const uploadStream =
      cloudinary.uploader.upload_stream(
        {
          folder: folder,
          public_id: publicId,
          resource_type: "raw",
        },

        (error, result) => {

          if (error) {
            console.log("");
            console.log(
              "========== CLOUDINARY FULL ERROR =========="
            );

            console.log("ERROR OBJECT:");
            console.log(error);

            console.log("ERROR MESSAGE:");
            console.log(error.message);

            console.log("HTTP CODE:");
            console.log(error.http_code);

            console.log("ERROR NAME:");
            console.log(error.name);

            console.log("ERROR DETAILS:");
            console.log(error.error);

            console.log("FULL JSON:");
            console.log(
              JSON.stringify(error, null, 2)
            );

            console.log(
              "============================================"
            );

            reject(error);
            return;
          }


          console.log("");
          console.log(
            "========== CLOUDINARY SUCCESS =========="
          );

          console.log("Secure URL:");
          console.log(result.secure_url);

          console.log(
            "========================================"
          );

          resolve(result);
        }
      );


    streamifier
      .createReadStream(fileBuffer)
      .pipe(uploadStream);

  });
};


module.exports = uploadToCloudinary;
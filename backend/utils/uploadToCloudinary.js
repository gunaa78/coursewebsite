const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = (fileBuffer, originalName, folder) => {
  return new Promise((resolve, reject) => {

    const publicId =
      Date.now() +
      "-" +
      originalName.replace(/\s+/g, "-");

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: "raw",
        public_id: publicId,
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);
          reject(error);
        } else {
          console.log("Cloudinary Upload Success:", result.secure_url);
          resolve(result);
        }
      }
    );

    streamifier
      .createReadStream(fileBuffer)
      .pipe(stream);
  });
};

module.exports = uploadToCloudinary;
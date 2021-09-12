const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "uploads";
  // filePathOnCloudinary: path of image we want
  // to set when it is uploded to cloudinary
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

  return cloudinary.uploader.upload(locaFilePath)
}

// app.post("/api/upload", upload.array("profile-file"), async (req, res, next) => {
//   const imageUrlList = [];
//   const url = req.protocol + "://" + req.get("host");
//   for (var i = 0; i < req.files.length; i++) {
//     var locaFilePath = req.files[i].path;
//     // imgUrlList.push(locaFilePath);

    

//     imageUrlList.push(result.url)

//     // imgUrlList.push(locaFilePath)
//   }
//   res.status(200).json({imageUrlList});
// });

module.exports = uploadToCloudinary;

const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();
// const uploadToCloudinary = require("../utils/cloudinary");
const { restart } = require("nodemon");
const cloudinary = require("cloudinary").v2;
const { protect, admin } = require('../middleware/authMiddleware');
const Product = require("../models/productModel")


//   CONFIGURATION DE CLOUDINARY
cloudinary.config({ 
  cloud_name: "au79code",
  api_key: "321974213445477",
  api_secret: "iTj-DqanW5gHnssNfSmMdYLRMwI",
});

async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "uploads";
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

  return cloudinary.uploader.upload(filePathOnCloudinary);
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
});

router.post("/", [protect, upload.array("image-files")], async (req, res) => {
  try {
    const imgUrlList = [];
    for (var i = 0; i < req.files.length; i++) {
      var locaFilePath = req.files[i].path;
      const result = await uploadToCloudinary(locaFilePath);
      imgUrlList.push(result.url);
    }

    // res.status(200).json( {imgUrlList} );
    const product = await Product.findOne({user: req.user._id})
    if (product) {
      product.imageUrl = imgUrlList;
      product.save()
      res.status(200).json({ product });

    } else {
      res.status(400).json("uSER NOT FOUND")
    }

  } catch (error) {
    console.log(error);
  }
});





module.exports = router;

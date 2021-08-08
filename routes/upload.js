const router = require("express").Router();
const cloudinary = require("cloudinary");
const multer = require("multer");
const fs = require("fs");
const { protect, admin } = require("../middleware/authMiddleware");

// ////    import Model f/////////////////////////////
const Users = require("../models/userModel");

const upload = multer();

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: "tarositeweb",
  api_key: "474848126984384",
  api_secret: "BWFY6C_AE8a2zI0YHfcVC8wsrjM",
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

// Upload company image 
router.post("/company-images", [protect, upload.single("imgfiles")], async (req, res) => {
  try {
    const files = req.files.imgfiles;

    if (files.length == 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const results = [];

    for (const file of files) {
      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "Size too large" });
      }

      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/jpg" &&
        file.mimetype !== "image/png"
      ) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "File format is incorrect." });
      }
      const resul = await cloudinary.v2.uploader.upload(file.tempFilePath);
      removeTmp(file.tempFilePath);

      results.push(resul);
    }

    const imgUrls = results.map((result) => ({
      public_id: result.public_id,
      url: result.secure_url,
    }));

    const user = await Users.findById(req.user._id);

    if (user) {
      user.company.urlImg = imgUrls;
    }

    await user.save();

    res.status(200).json({ results: user.company.urlImg });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});






// Upload product Images
router.post("/products-images", [protect, upload.single("imgfiles")], async (req, res) => {
  try {
    const files = req.files.imgfiles;

    if (files.length == 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const results = [];

    for (const file of files) {
      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "Size too large" });
      }

      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/jpg" &&
        file.mimetype !== "image/png"
      ) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "File format is incorrect." });
      }
      const resul = await cloudinary.v2.uploader.upload(file.tempFilePath);
      removeTmp(file.tempFilePath);

      results.push(resul);
    }

    const imgUrls = results.map((result) => ({
      public_id: result.public_id,
      url: result.secure_url,
    }));

    const user = await Users.findById(req.user._id);

    if (user) {
      user.urlImg = imgUrls;
    }

    await user.save();

    res.status(200).json({ results: user.urlImg });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});











// Delete image only admin can use
router.post("/destroy", protect, (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.status(400).json({ msg: "No images Selected" });

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "Deleted Image" });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;

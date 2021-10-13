const router = require("express").Router();
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const AdvertisingModel = require("../../models/advertisingModels/AdvertisingserviceModel");
const fs = require("fs");
const { protect } = require("../../middleware/authMiddleware");

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: "tarositeweb",
  api_key: "474848126984384",
  api_secret: "BWFY6C_AE8a2zI0YHfcVC8wsrjM",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "au79code",
    format: ["mp4", "jpg", "png", "jpeg"],
    public_id: (req, file) => file.filename,
    resource_type: ["video", "image"],
    eager_async: true, 
  },
});

const parser = multer({ storage: storage });

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};



// //////     Logo Upload
router.post(
  "/logo/:id",
  [protect, parser.single("logoFile")],
  async (req, res) => {
    try {
      const files = req.files.logoFile;
      console.log(files);

      if (files.length == 0)
        return res.status(400).json({ msg: "No files were uploaded." });

      const results = [];

      const resul = await cloudinary.v2.uploader.upload(files.tempFilePath);
      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.logoUrl = resul.url;
      }
      await service.save();
      res.status(200).json({ msg: "Successfully uploaded" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// //////   Service Images
router.post(
  "/services/:id",
  [protect, parser.single("serviceFile")],
  async (req, res) => {
    try {
      const files = req.files.serviceFile;
      console.log(files);

      const results = [];

      // if (files.length == 0)
      //   return res.status(400).json({ msg: "No files were uploaded." });

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

      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.serviceUrl = imgUrls;
      }
      await service.save();
      res.status(200).json({ msg: "Successfully uploaded" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);


// //////     Logo Upload
router.post(
  "/video/:id",
  [protect, parser.single("videoFile")],
  async (req, res) => {
    try {
      const files = req.files.videoFile;
      console.log(files);

      if (files.length == 0)
        return res.status(400).json({ msg: "No files were uploaded." });

      const results = [];

      const resul = await cloudinary.v2.uploader.upload(files.tempFilePath);
      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.videoUrl = resul.url;
      }
      await service.save();
      res.status(200).json({ msg: "Successfully uploaded" });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  }
);

module.exports = router;

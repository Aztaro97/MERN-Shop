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
router.put(
  "/logo/:id",
  [protect, parser.single("logoFile")],
  async (req, res) => {
    try {
      const files = req.files.logoFile;

      if (files.length == 0)
        return res.status(400).json({ msg: "No files were uploaded." });

      const resul = await cloudinary.v2.uploader.upload(files.tempFilePath);
      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.logoUrl = [{
          public_id: resul.public_id,
          url: resul.secure_url,
        }];
      }
      const newService = await service.save();
      res.status(200).json(newService);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// //////   Service Images
router.put(
  "/services/:id",
  [protect, parser.single("serviceFile")],
  async (req, res) => {
    try {
      const files = req.files.serviceFile;

      const results = [];
      if (files.length) {
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
      } else {
        const NewResul = await cloudinary.v2.uploader.upload(
          files.tempFilePath
        );
        results.push(NewResul);
      }

      const imgUrls = results.map((result) => ({
        public_id: result.public_id,
        url: result.secure_url,
      }));

      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.serviceUrl = imgUrls;
      }
      const newService = await service.save();
      res.status(200).json(newService);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// //////   Banner Images
router.put(
  "/banners/:id",
  [protect, parser.single("bannerFile")],
  async (req, res) => {
    try {
      const files = req.files.bannerFile;

      const results = [];
      if (files.length) {
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
      } else {
        const NewResul = await cloudinary.v2.uploader.upload(
          files.tempFilePath
        );
        results.push(NewResul);
      }

      const imgUrls = results.map((result) => ({
        public_id: result.public_id,
        url: result.secure_url,
      }));

      const service = await AdvertisingModel.findById(req.params.id);
      if (service) {
        service.bannerUrl = imgUrls;
      }
      const newService = await service.save();
      res.status(200).json(newService);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);

// //////     Video Upload
router.put("/video/:id", [protect], async (req, res) => {
  try {
    const service = await AdvertisingModel.findById(req.params.id);
    if (service) {
      service.videoUrl = req.body.videoUrl;
    }
    const newService = await service.save();
    res
      .status(200)
      .json({ msg: "Successfully uploaded", videoUrl: newService.videoUrl });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;

const express = require("express");
const {
  addAdvertisingService,
  getAllAdService,
} = require("../../controllers/advertisingController/advertisingController");
const router = express.Router();

const { protect, admin } = require("../../middleware/authMiddleware");

router
  .route("/")
  .post(protect, addAdvertisingService)
  .get(protect, admin, getAllAdService);

module.exports = router;

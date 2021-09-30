const express = require("express");
const {
  addAdvertisingService,
  getAllAdService,
  filterByTypeBusiness,
  getAdProfile,
  
} = require("../../controllers/advertisingController/advertisingController");
const {sendingMessage, openMessageById, fetchAllMessage} = require("../../controllers/advertisingController/adMessageController");
const router = express.Router();

const { protect, admin } = require("../../middleware/authMiddleware");

router
  .route("/")
  .post(protect, addAdvertisingService)
  .get(protect, admin, getAllAdService);
router.route("/filter-type-business").post(filterByTypeBusiness);
router.route("/profile/:id").get(getAdProfile);
router.route("/message").post(sendingMessage).get(protect, admin, fetchAllMessage);
router.route("/message/view").put(protect, admin, openMessageById);

module.exports = router;

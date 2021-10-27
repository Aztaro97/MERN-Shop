const express = require("express");
const {
  addAdvertisingService,
  getAllAdService,
  filterByTypeBusiness,
  filterByTypeBusinessPublic,
  getAdProfile,
  updatePremiumService,
  setUpdateAllowed,
  deleteAdService,
  seachAdvertisingByCompanyName,
  getUserAds,
} = require("../../controllers/advertisingController/advertisingController");
const {
  sendingMessage,
  openMessageById,
  fetchAllMessage,
} = require("../../controllers/advertisingController/adMessageController");
const router = express.Router();

const { protect, admin } = require("../../middleware/authMiddleware");

router.route("/").get(protect, admin, getAllAdService).put(setUpdateAllowed);
router
  .route("/filter-type-business")
  .post(protect, admin, filterByTypeBusiness);
router.route("/filter-business").post(filterByTypeBusinessPublic);
router.route("/search").post(protect, admin, seachAdvertisingByCompanyName);
router
  .route("/profile/:id")
  .get(getAdProfile)
  .delete(protect, admin, deleteAdService);

router
  .route("/message")
  .post(sendingMessage)
  .get(protect, admin, fetchAllMessage);
router.route("/message/view").put(protect, admin, openMessageById);
router.route("/premium/:id").put(protect, updatePremiumService);
router.route("/free").post(protect, addAdvertisingService);
router.route("/user/:id").get(protect, getUserAds);

module.exports = router;

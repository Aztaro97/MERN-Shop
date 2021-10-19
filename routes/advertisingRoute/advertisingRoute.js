const express = require("express");
const {
  addAdvertisingService,
  getAllAdService,
  filterByTypeBusiness,
  filterByTypeBusinessPublic,
  getAdProfile,
  registerPremiumService,
  setUpdateAllowed,
  deleteAdService,
  seachAdvertisingByCompanyName,
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
router
  .route("/filter-business")
  .post(protect, admin, filterByTypeBusinessPublic);
router.route("/search").post(seachAdvertisingByCompanyName);
router
  .route("/profile/:id")
  .post(getAdProfile)
  .delete(protect, admin, deleteAdService);
router
  .route("/message")
  .post(sendingMessage)
  .get(protect, admin, fetchAllMessage);
router.route("/message/view").put(protect, admin, openMessageById);
router.route("/premium").post(protect, registerPremiumService);
router.route("/free").post(protect, addAdvertisingService);

module.exports = router;

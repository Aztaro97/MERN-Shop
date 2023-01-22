const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  resetPassword,
  updatePassword,
  saveCompanyInformation,
  saveBankInformation,
  saveShippingAddress,
  getShippingAddress,
  getAllCompanies,
} = require("../controllers/userController");
const { protect, admin, secure } = require("../middleware/authMiddleware");

router.route("/company/:type").get(getAllCompanies);


router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(getUserById)
  .put(protect, admin, updateUser);
router.post("/reset-password", resetPassword);
router.post("/new-password/:token", updatePassword);
router
  .route("/company")
  .post(protect, saveCompanyInformation)
  // .get(getAllCompanies)
router.route("/bank").post(protect, saveBankInformation);
router.route("/shipping").post(protect, saveShippingAddress).get(admin, getShippingAddress);

module.exports = router;

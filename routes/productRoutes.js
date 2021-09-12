const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getMyProducts,
  filterAllProducts,
  filterProductsUser,
  getUserProducts,
  allowProductSell,
  getProductsAdmin
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../utils/multer");



router.route("/").get(getProducts).post(protect, createProduct);
router.route("/admin").get(protect, admin, getProductsAdmin)
router.route("/:id/reviews").post(protect, createProductReview);
router.route("/my").get(protect, getMyProducts);
router.route("/search").post(filterAllProducts)
router.route("/:id/search").post(filterProductsUser)
router.route("/user/:id").get(getUserProducts)
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .post(protect, admin, allowProductSell)
  .put(protect, updateProduct);

module.exports = router;

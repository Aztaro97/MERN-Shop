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
  filterProducts
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../utils/multer");



router.route("/").get(getProducts).post(protect, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.route("/my").get(protect, getMyProducts);
router.route("/search").post(filterProducts)
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .put(protect, updateProduct);

module.exports = router;

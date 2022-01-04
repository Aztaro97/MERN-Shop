const express = require("express");
const router = express.Router();
const {
  CreateNewArticle,
  getArticleById,
  getArticleByCategory,
} = require("../../controllers/productionController/articleController");
const { protect, admin } = require("../../middleware/authMiddleware");

router.route("/").post(protect, CreateNewArticle);
router.route("/:id").get(getArticleById);
router.route("/filter/:category").get(getArticleByCategory);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  CreateNewArticle,
  getArticleById,
  getArticleByCategory,
  getAllArticles,
  updateArticle,
  deleteArticle
} = require("../../controllers/productionController/articleController");
const { protect, admin } = require("../../middleware/authMiddleware");

router.route("/").post(protect, CreateNewArticle).get(getAllArticles);
router.route("/:id").get(getArticleById).put(updateArticle).delete(deleteArticle);
router.route("/filter/:category").get(getArticleByCategory);

module.exports = router;

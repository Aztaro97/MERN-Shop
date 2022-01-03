const express = require("express");
const router = express.Router();
const {
  CreateNewArticle,
  getArticleById,
  getArticleByCategory,
} = require("../../controllers/productionController/articleController");

router.route("/").post(CreateNewArticle);
router.route("/:id").get(getArticleById);
router.route("/filter/:category").get(getArticleByCategory);

module.exports = router;

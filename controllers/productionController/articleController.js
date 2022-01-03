const asyncHandler = require("express-async-handler");
const Articles = require("../../models/productions/articleModel");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

//   CONFIGURATION DE CLOUDINARY
cloudinary.config({
  cloud_name: "tarositeweb",
  api_key: "474848126984384",
  api_secret: "BWFY6C_AE8a2zI0YHfcVC8wsrjM",
});
async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "uploads";
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

  return cloudinary.uploader.upload(locaFilePath);
}
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({
  storage: storage,
});

// @desc    Create new Article
// @route   POST /api/article
// @access  Private
const CreateNewArticle = asyncHandler(async (req, res) => {
  const { name, description, price, category, type, capacity, size, color } =
    req.body;

  const imgUrlList = [];
  for (var i = 0; i < req.files.length; i++) {
    var locaFilePath = req.files[i].path;
    const result = await uploadToCloudinary(locaFilePath);
    imgUrlList.push(result.url);
  }

  const article = new Articles({
    name,
    description,
    price,
    category,
    type,
    capacity,
    size,
    color,
    imgUrl: imgUrlList,
  });

  const newArticle = await article.save();
  res.status(201).json({ newArticle });
});

// @desc    GET ARTICLE BY ID
// @route   GET /api/article/:id
// @access  PUBLIC
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Articles.findById(req.params.id);

  if (article) {
    return res.status(200).json({ article });
  } else {
    return res.status(400).json({ msg: "Article not found" });
  }
});

// @descr GET CATEGOR OF ARTICLES
// @route  GET /api/article/:category
// @access PUBLIC
const getArticleByCategory = asyncHandler(async (req, res) => {
  const article = await Articles.find({ category: req.params.category });
  if (article) {
    return res.status(200).json({ article });
  } else {
    return res.status(400).json({ msg: "Article not found" });
  }
});

module.exports = { CreateNewArticle, getArticleById, getArticleByCategory };

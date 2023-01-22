const asyncHandler = require("express-async-handler");
const Articles = require("../../models/productions/articleModel");
const cloudinary = require("cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//   CONFIGURATION DE CLOUDINARY
cloudinary.config({
  cloud_name: "au79code",
  api_key: "321974213445477",
  api_secret: "iTj-DqanW5gHnssNfSmMdYLRMwI",
});
async function uploadToCloudinary(locaFilePath) {
  var mainFolderName = "uploads";
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

  return cloudinary.uploader.upload(filePathOnCloudinary);
}
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "au79code",
    format: async () => "png",
    public_id: (req, file) => file.filename,
  },
});
const parser = multer({ storage: storage });

// @desc    Create new Article
// @route   POST /api/article
// @access  Private
const CreateNewArticle = asyncHandler(async (req, res) => {
  try {
    const data = JSON.parse(req.body.formData);
    const { name, description, price, category, type, capacity, size, color } =
      data;
    const imgUrlList = [];

    const files = req.files.imgfiles;
    if (files.length == 0) {
      return res.status(400).json({ msg: "No files were uploaded." });
    } else {
      for (var i = 0; i < files.length; i++) {
        const result = await cloudinary.v2.uploader.upload(
          files[i].tempFilePath
        );
        imgUrlList.push({
          url: result.url,
          public_id: result.public_id,
        });
      }
    }

    //  CONDITION IF IMGES NOT ARRAR
    if (files.name) {
      const result = await cloudinary.v2.uploader.upload(files.tempFilePath);
      imgUrlList.push({
        url: result.url,
        public_id: result.public_id,
      });
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
    res.status(201).json({ newArticle, imgUrlList });
  } catch (error) {
    throw new Error(error.message)
  }
});

// @desc GET all articles
//  @route GET /API/articles
// @access  PUBLIC
const getAllArticles = asyncHandler(async (req, res) => {
  try {
    const articles = await Articles.find();
    if (articles) {
      return res.status(200).json(articles);
    }
  } catch (error) {
    throw new Error(error);
  }
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
    return res.status(200).json(article);
  } else {
    return res.status(400).json({ msg: "Article not found" });
  }
});

// @desc    UPDATE ARTICLE BY ID
// @route   PUT /api/article/:id
// @access  PUBLIC
const updateArticle = asyncHandler(async (req, res) => {
  const { name, description, price, category, type, capacity, size, color } =
    req.body;

  const article = await Articles.findById(req.params.id);

  if (article) {
    article.name = name;
    article.description = description;
    article.price = price;
    article.category = category;
    article.type = type;
    article.capacity = capacity;
    article.size = size;
    article.color = color;

    const updatedArticle = await article.save();
    res.status(200).json({ updatedArticle });
  } else {
    return res.status(400).json({ msg: "Article not found" });
  }
});

// @desc    DELETE ARTICLE BY ID
// @route   DELETE /api/article/:id
// @access  ADMIN
const deleteArticle = asyncHandler(async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);
    if (article) {

      const images = article.imgUrl

      for (const image of images) {
        const { public_id } = image;
        if (!public_id)
          return res.status(400).json({ msg: "No images Selected" });
  
        cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
          if (err) throw err;
        });
      }



      article.remove();
      res.status(200).json({ msg: "Article deleted" });
    } else {
      res.status(400).json({ msg: "Article not found" });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  CreateNewArticle,
  getArticleById,
  getArticleByCategory,
  getAllArticles,
  updateArticle,
  deleteArticle,
};

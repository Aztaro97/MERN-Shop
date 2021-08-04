const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const uploadToCloudinary = require("./../utils/cloudinary");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const imageList = [];

  const {
    code,
    typeService,
    name,
    price,
    compareAtPrice,
    brand,
    category,
    countInStock,
    numReviews,
    description,
    service,
    shippingFrom,
    shippingTo,
    rateShipping,
    variantColor,
    variantSize,
    variantFinish,
    variantMaterial,
    variantStyle,
    united,
    size,
  } = req.body;
  const product = new Product({
    user: req.user._id,
    code,
    typeService,
    name,
    price,
    compareAtPrice,
    imageUrl: imageList,
    brand,
    category,
    countInStock,
    numReviews,
    description,
    service,
    shippingFrom,
    shippingTo,
    rateShipping,
    variantColor,
    variantSize,
    variantFinish,
    variantMaterial,
    variantStyle,
    united,
    size,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    imageUrl,
    brand,
    category,
    countInStock,
    description,
    service,
    shippingFrom,
    shippingTo,
    rateShipping,
    varianColor,
    varianSize,
    varianFinish,
    varianMaterial,
    united,
    size,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.imageUrl = imageUrl;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.service = service;
    product.shippingFrom = shippingFrom;
    product.shippingTo = shippingTo;
    product.rateShipping = rateShipping;
    product.variacolor = varianColor;
    product.varianSize = varianSize;
    product.varianFinish = varianFinish;
    product.varianMaterial = varianMaterial;
    product.united = united;
    product.size = size;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

// @desc    Fetch My products
// @route   GET /api/myproducts/
// @access  Private
const getMyProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user }).populate("user");
  res.status(200).json(products);
  // const product = await Product.find({})

  // if (product) {
  //   res.json(product);
  // } else {
  //   res.status(404);
  //   throw new Error("Product not found");
  // }
});

// @desc    Filter products Search
// @route   GET /api/products/search/
// @access  Public
const filterProducts = asyncHandler(async (req, res) => {
 

    const brand = req.body.brand ? req.body.brand : null;
    const variantColor = req.body.color ? req.body.color : {};
    const variantSize = req.body.size != null ? req.body.size : {};
    const priceItem = req.body.price ? req.body.price : {};

    const products = await Product.find({
      brand,
      variantColor,
      variantSize,
      price: {"$lte": priceItem }
    });

    if (products) {
      res.status(200).json({products})
    } else {
      res.status(404);
      throw new Error("Product not found");
    }



});

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getMyProducts,
  filterProducts
};

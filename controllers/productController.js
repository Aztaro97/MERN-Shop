const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const uploadToCloudinary = require("./../utils/cloudinary");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword, allow: true });
  const products = await Product.find({ ...keyword, allow: true })
    .populate("user", ["email", "company"])
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch all products Admin
// @route   GET /api/products/admin
// @access  ADMIN
const getProductsAdmin = asyncHandler(async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments();
  const products = await Product.find()
    .populate("user", ["email", "company"])
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 })

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("user", [
    "email",
    "company.name",
  ]);

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
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    code: "",
    typeService: "",
    name: "",
    price: "",
    compareAtPrice: "",
    // imageUrl: []: "",
    brand: "",
    category: "",
    countInStock: "",
    numReviews: "",
    description: "",
    service: "",
    shippingFrom: "",
    shippingTo: {},
    variantColor: "",
    variantSize: "",
    variantFinish: "",
    variantMaterial: "",
    variantStyle: "",
    united: "",
    size: "",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// // @desc    Create a product
// // @route   POST /api/products
// // @access  Private/Admin
// const createProduct = asyncHandler(async (req, res) => {
//   const {
//     code,
//     typeService,
//     name,
//     price,
//     compareAtPrice,
//     brand,
//     category,
//     countInStock,
//     numReviews,
//     description,
//     service,
//     shippingFrom,
//     shippingTo,
//     // rateShipping,
//     variantColor,
//     variantSize,
//     variantFinish,
//     variantMaterial,
//     variantStyle,
//     united,
//     size,
//   } = req.body;
//   const product = new Product({
//     user: req.user._id,
//     code,
//     typeService,
//     name,
//     price,
//     compareAtPrice,
//     // imageUrl: [],
//     brand,
//     category,
//     countInStock,
//     numReviews,
//     description,
//     service,
//     shippingFrom,
//     shippingTo,
//     variantColor,
//     variantSize,
//     variantFinish,
//     variantMaterial,
//     variantStyle,
//     united,
//     size,
//   });

//   const createdProduct = await product.save();
//   res.status(201).json(createdProduct);
// });

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const {
    code,
    typeService,
    name,
    price,
    compareAtPrice,
    brand,
    category,
    countInStock,
    description,
    service,
    shippingFrom,
    shippingTo,
    variantColor,
    variantSize,
    variantFinish,
    variantMaterial,
    variantStyle,
    united,
    size,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    (product.code = code),
      (product.typeService = typeService),
      (product.name = name);
    product.price = price;
    product.compareAtPrice = compareAtPrice;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.service = service;
    product.shippingFrom = shippingFrom;
    product.shippingTo = shippingTo;
    product.variantColor = variantColor;
    product.variantSize = variantSize;
    product.variantFinish = variantFinish;
    product.variantMaterial = variantMaterial;
    product.variantStyle = variantStyle;
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
// @route   GET /api/products/my
// @access  Private
const getMyProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user }).populate("user", [
    "company",
  ]);
  res.status(200).json(products);
});

// @desc    Filter products Search
// @route   Post /api/products/search/
// @access  Public
const filterAllProducts = asyncHandler(async (req, res) => {
  const brand = req.body.brand ? req.body.brand : null;
  const variantColor = req.body.color ? req.body.color : {};
  const variantSize = req.body.size != null ? req.body.size : {};
  const priceItem = req.body.price ? req.body.price : {};

  const products = await Product.find({
    allow: true,
    brand,
    variantColor,
    // variantSize,
    price: { $lte: priceItem },
  }).populate("user", "company");

  if (products) {
    res.status(200).json({ products });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Filter products Search
// @route   Post /api/products/:id/search/
// @access  Public
const filterProductsUser = asyncHandler(async (req, res) => {
  const brand = req.body.brand ? req.body.brand : null;
  const variantColor = req.body.color ? req.body.color : {};
  const variantSize = req.body.size != null ? req.body.size : {};
  const priceItem = req.body.price ? req.body.price : {};

  const products = await Product.find({
    allow: true,
    user: req.params.id,
    brand,
    variantColor,
    // variantSize,
    price: { $lte: priceItem },
  }).populate("user", "company");

  if (products) {
    res.status(200).json({ products });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Fetch user products
// @route   GET /api/products/user/:id
// @access  Public
const getUserProducts = asyncHandler(async (req, res) => {
  try {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Product.countDocuments({
      user: req.params.id,
      allow: true,
    });
    const products = await Product.find({ user: req.params.id, allow: true })
      .populate("user", ["company"])
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    if (products) {
      res.json({ products, page, pages: Math.ceil(count / pageSize) });
    } else {
      res.status(404);
      throw new Error("Product User not found");
    }
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Allow products sell
// @route   GET /api/products/:id
// @access  Public
const allowProductSell = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.allow = req.body.permission;
  }

  await product.save();

  res.status(200).json({ message: "Product allow" });
});

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const filterByCategory = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;
  const categoryName = req.params.categoryName;

  const count = await Product.countDocuments({ ...categoryName, allow: true });
  const products = await Product.find({ brand: categoryName, allow: true })
    .populate("user", ["email", "company"])
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (products) {
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  } else {
    res.status(404);
    throw new Error("Category Product not found");
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
  filterAllProducts,
  getUserProducts,
  filterProductsUser,
  allowProductSell,
  getProductsAdmin,
  filterByCategory,
};

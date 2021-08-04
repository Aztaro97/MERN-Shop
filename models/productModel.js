const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
    code: {
      type: String,
      // required: true,
    },
    typeService: {
      type: String,
      // required: true,
    },
    shippingFrom: {
      type: String,
      // required: true,
    },
    shippingTo: [
      {
        type: String,
        // required: true,
      },
    ],
    rateShipping: [
      {
        ShippingAdress: {
          type: String,
          // required: true,
        },
        shippingPice: { type: Number, default: 0 },
        // rateName: {type: String, required: true}
      },
    ],
    name: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    imageUrl: {
      type: Array,
      // required: true,
    },
    brand: {
      type: String,
      // required: true,
    },
    category: {
      type: String,
      // required: true,
    },

    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      // required: true,
      default: 0,
    },
    variantColor: 
      {
        type: Array,
        // required: true,
      }
    ,
    variantSize: 
      {
        type: Array,
        // required: true,
      },
    
    variantFinish: 
      {
        type: Array,
        // required: true,
      },
   
    variantMaterial: [
      {
        type: String,
        // required: true,
      },
    ],
    variantStyle: [
      {
        type: String,
        // required: true,
      },
    ],

    united: {
      type: Array,
      // required: true,
    },
    size: {
      type: Number,
      // required: true
    },
    price: {
      type: Number,
      // required: true,
      default: 0,
    },
    compareAtPrice: {
      type: Number,
      // required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      // required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

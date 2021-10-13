const mongoose = require("mongoose");

const AdvertisingServiceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    allow: { type: Boolean, required: true, default: false },
    companyName: { type: String, required: true },
    about: { type: String, required: true },
    typeBusiness: { type: Array, required: true },
    fullName: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    typePlan: { type: String, required: true, default: "free" },

    // ////////   Upload IMAGESS
    logoUrl: {
      type: String,
      required: true,
      default:
        "https://www.launchgrowjoy.com/wp-content/uploads/logo-placeholder.jpg",
    },
    serviceUrl: { type: Array, required: false },
    videoUrl: { type: String, required: false },

    productsOrdered: { type: Array, required: false },
    isPaid: { type: Boolean, required: false, default: false },
    totalPrice: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const AdvertisingService = mongoose.model(
  "Advertising",
  AdvertisingServiceSchema
);

module.exports = AdvertisingService;

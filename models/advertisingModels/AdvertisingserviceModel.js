const mongoose = require("mongoose");

const AdvertisingServiceSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  companyName: { type: String, required: true },
  about: { type: String, required: true },
  typeBusiness: { type: Array, required: true },
  fullName: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  typePlan: { type: String, required: true, default: "free"}
});

const AdvertisingService = mongoose.model(
  "Advertising",
  AdvertisingServiceSchema
);

module.exports = AdvertisingService;

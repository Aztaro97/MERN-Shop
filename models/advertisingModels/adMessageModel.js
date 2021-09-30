const mongoose = require("mongoose");

const AdvertisingMessageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    message: { type: String, required: false },

    companyId: { type: String, required: true },
    companyName: { type: String, required: true },
    companyTelephone: { type: String, required: true },

    view: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const AdMessage = mongoose.model("message", AdvertisingMessageSchema);

module.exports = AdMessage;

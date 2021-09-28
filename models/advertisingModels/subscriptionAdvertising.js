const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  productsOrdered: { type: Array, required: false },
  fullName: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  isPaid: { type: Boolean, required: false, default: false },
  totalPrice: { type: Number, required: false },
});

const subscription = mongoose.model("subscription", SubscriptionSchema);

module.exports = subscription;

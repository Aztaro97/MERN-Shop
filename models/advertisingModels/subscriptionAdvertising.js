const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  products: { type: Array, required: false },
  paymentResult: {
    id: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  isPaid: { type: Boolean, required: false, default: false },
  totalPrice: { type: Number, required: false,}
});

const subscription = mongoose.model("subscription", SubscriptionSchema);

module.exports = subscription;

const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  
  fullName: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  
});

const subscription = mongoose.model("subscription", SubscriptionSchema);

module.exports = subscription;

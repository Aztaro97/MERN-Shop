const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: false },
        qty: { type: Number, required: false },
        image: [{ type: String, required: false }],
        price: { type: Number, required: false },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Product",
        },
        merchant: {
          name: { type: String, required: false },
          email: { type: String, required: false },
          phoneNumber: { type: Array, required: false },
        },
      },
    ],
    shippingAddress: {
      firstName: { type: String, required: false },
      lastName: { type: String, required: false },
      address: { type: String, required: false },
      appartmentNumber: { type: String, required: false },

      city: { type: String, required: false },
      region: { type: String, required: false },
      country: { type: String, required: false },
      mapAdress: { type: String, required: false },
      phoneNumber: { type: String, required: false },
    },
    paymentMethod: {
      type: String,
      required: false,
    },
    paymentInfo: {
      cardNumber: { type: String, required: false },
      fullName: { type: String, required: false },
      dateExpire: { type: Date, required: false },
      cvcNumber: { type: Number, required: false },
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: false,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: false,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

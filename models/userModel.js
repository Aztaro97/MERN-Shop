const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    // //////    AUTHENTIFICATION INFORMATION   //////////////////
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    // ///////////  COMPANY INFORMATION    //////////////////
    company: {
      type: { type: String, required: true, default: "company" },
      name: { type: String },
      scopeBusiness: { type: String },
      licenceNumber: { type: String },
      expireDate: { type: String },
      phoneNumber: { type: Array },
      location: { type: String },
      email: { type: String },
      workHoursFrom: { type: String },
      workHoursTo: { type: String },
      holidays: { type: Array },
      about: { type: String },
      services: { type: String },
      videoLink: { type: String },
      mediaLink: {
        facebook: { type: String },
        insta: { type: String },
        twitter: { type: String },
        whatsapp: { type: String },
      },
      urlImg: { type: Array },
    },

    // /////////////////  BANK INFORMATION   //////////////////
    bank: {
      name: { type: String },
      branch: { type: String },
      accountNumber: { type: String },
      iban: { type: String },
      swiftCode: { type: String },
      device: { type: String },
    },

    // //////////////   SHIPPING ADDRESS   //////////////////
    shippindAddress: {
      firstName: { type: String },
      lastName: { type: String },
      address: { type: String },
      appartment: { type: String },
      city: { type: String },
      region: { type: String },
      country: { type: String },
      email: { type: String },
      phoneNumber: { type: String },
    },

    // /////////////////
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    typeUser: {
      type: String,
      required: true,
      default: "customer",
    },
    resetToken: {
      type: String,
      require: true,
    },
    expireToken: {
      type: Date,
      require: true,
    },
    register_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;

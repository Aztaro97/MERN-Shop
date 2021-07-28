const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
    company : { 
      type:{ type: String},
      name: {type: String,},
      scopeBusiness: {type: String,},
      phoneNumber: {type: Array},
      location: {type: String},
      email: {type: String},
      workHours:[{
        from:{ type: String},
        to:{ type: String },
      }],
      holidays:{ type: Array},
      about:{ type: String},
      services:{ type: String},
      videoLink: { type: String },
      mediaLink: {
        facebook:{ type: String},
        insta:{ type: String},
        twitter:{ type: String},
        whatsapp:{ type: String},
      }
    },


    // /////////////////  BANK INFORMATION   //////////////////
    bank : {
      name: { type: String},
      branch: { type: String},
      accountNumber: { type: String},
      iban: { type: String},
      swiftCode: { type: String},
      device: { type: String},
    },


    //   ///////////   COMPANY PHOTOS
    urlImg:[{ type: String}],



    // /////////////////
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
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
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

module.exports = User;
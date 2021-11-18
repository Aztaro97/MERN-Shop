const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken.js");
const nodemailer = require("nodemailer");
const sentGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config/default.json");
const crypto = require("crypto");

// ///////////  Config NodeMailer Transport ////////////////////
const SENDGRID_API_KEYS = config.SENDGRID_API_KEYS;
const transport = nodemailer.createTransport(
  sentGridTransport({
    auth: {
      api_key: SENDGRID_API_KEYS,
    },
  })
);

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      typeUser: user.typeUser,
      company: user.company,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, bank, urlImg } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  transport.sendMail({
    to: email,
    from: "abdoulazizsanitaro@gmail.com",
    subject: "Welcome to Au79Code",
    html: `
    <body>
    <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
  </style>
  <div style="width: 100%; padding: 0.5rem 0">
    <div
      style="
        border: 3px solid #fff;
        padding: 1rem;
        background: #eceef1;
        font-family: sans-serif;
        max-width: 38rem;
      "
    >
      <a
        href="https://www.au79code.com/"
        style="
          text-align: center;
          font-size: 2rem;
          display: flex;
          justify-content: center;
          text-decoration: none;
          color: #000;
          margin-bottom: 1rem;
        "
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/tarositeweb/image/upload/v1629724171/logo_tnw2pq.svg"
          alt=""
          width="50"
        />
      </a>
      <div
        style="
          padding: 1rem;
          background: #fff;
          margin: auto;
          text-align: center;
        "
      >
        <h2 style="color: #696868; font-size: 1rem">Wecome to au79code</h2>
        <p
          style="
            margin-bottom: 1rem;
            font-weight: 700;
            color: #8e8e8e;
            font-size: 0.7rem;
          "
        >
          Thanks for Registering to au79code, click in this link to sign in in
          your account
        </p>
        <a
          href="https://www.au79code.com/auth"
          style="
            text-decoration: none;
            color: #fff;
            background: #54bbfb;
            padding: 0.6rem 4rem;
            font-size: 0.9rem;
            border-radius: 10px;
            font-weight: 700;
            display: block;
            width: 100px;
            margin: auto;
          "
          >Link</a
        >
        <p
          style="
            color: #8e8e8e;
            font-weight: 700;
            margin-top: 0.6rem;
            font-size: 0.7rem;
          "
        >
          Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium
          ut lacinia in, elementum id enim. Nulla quis lorem ut libero
          malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia
        </p>
      </div>
    </div>
  </div>
  <table
    style="
      width: 100%;
      font-size: 10pt;
      font-family: Arial, sans-serif;
      background: #0b1b34;
      padding: 10px;
    "
    cellpadding="0"
    cellspacing="0"
    border="0"
  >
    <tbody>
      <tr>
        <td>
          <section style="color: #93a3b3; font-family: Arial">
            <h2 style="color: #c68787; margin: 5px 0 2px 0">To visit us</h2>
            <p style="margin: 1px 0">
              If you want to visit us
              <span style="display: block; margin: 4px 0"
                >talk about a project</span
              >
              or just have a coffee
            </p>

            <p>
              Near 41B Street
              <br />Al Rashidiya - Dubai
            </p>
            <p style="margin: 0">
              +97142839983 <br />
              +971504366696
            </p>
          </section>
          <section>
            <h2 style="color: #c68787; margin: 5px 0 2px 0">Follow us</h2>
            <div
              style="
                font-family: Arial;
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
              "
            >
              <a
                href="https://api.whatsapp.com/send?phone=+971567957775"
                target="__blank"
                style="
                  text-decoration: none;
                  background: #93a3b3;
                  padding: 0px;
                  margin-left: 5px;
                  color: #fff;
                "
              >
                <i
                  style="font-size: 30px; background: #000"
                  class="fab fa-whatsapp-square"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/au_79_code/"
                target="__blank"
                style="
                  text-decoration: none;
                  background: #93a3b3;
                  padding: 0px;
                  margin-left: 5px;
                  color: #fff;
                "
              >
                <i
                  class="fab fa-instagram-square grayBlueColor"
                  style="font-size: 30px; background: #000"
                ></i>
              </a>
              <a
                href="https://twitter.com/79_code"
                target="__blank"
                style="
                  text-decoration: none;
                  background: #93a3b3;
                  padding: 0px;
                  margin-left: 5px;
                  color: #fff;
                "
              >
                <i
                  class="fab fa-twitter-square grayBlueColor"
                  style="font-size: 30px; background: #000"
                ></i>
              </a>
              <a
                href="https://www.snapchat.com/add/au79code"
                target="__blank"
                style="
                  text-decoration: none;
                  background: #93a3b3;
                  padding: 0px;
                  margin-left: 5px;
                  color: #fff;
                "
              >
                <i
                  class="fab fa-snapchat-square grayBlueColor"
                  style="font-size: 30px; background: #000"
                ></i>
              </a>
              <a
                href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/"
                target="__blank"
                style="
                  text-decoration: none;
                  background: #93a3b3;
                  padding: 0px;
                  margin-left: 5px;
                  color: #fff;
                "
              >
                <i
                  class="fab fa-facebook-square grayBlueColor"
                  style="font-size: 30px; background: #000"
                ></i>
              </a>
            </div>
          </section>
        </td>
        <td style="display: flex; align-items: center">
          <a
            style="transform: rotate(45deg); margin-top: 40px"
            href="https://goo.gl/maps/YApX2Y5EJPLkzmgA6"
            target="_blank"
            alt=""
            rel="noreferrer"
          >
            <iframe
              title="AU79CODE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.432955814597!2d55.385108200000005!3d25.229632700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sae!4v1629292534309!5m2!1sen!2sae"
              width="90"
              height="90"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
    </body>
    `,
  });

  const user = await User.create({
    email,
    password,
    bank,
    urlImg,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      typeUser: user.typeUser,
      company: user.company,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      company: user.company,
      shippingAddress: user.shippingAddress,
      urlImg: user.urlImg,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (user) {
      res.json({
        _id: user._id,
        isAdmin: user.isAdmin,
        company: user.company,
        shippingAddress: user.shippingAddress,
        typeUser: user.typeUser,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// //////////////////////////////  RESET PASSWORD   //////////////////////
// @desc    RESET PASSWORD
// @route   PUT /api/users/reset-password
// @access  Private/Admin
const resetPassword = asyncHandler(async (req, res) => {
  const myUrl = req.headers.referer;

  const urlObject = new URL(myUrl);
  const hostName = urlObject.hostname;
  const domainName = hostName.replace(/^[^.]+\./g, "");
  const protocol = urlObject.protocol;

  crypto.randomBytes(32, async (err, buffer) => {
    if (err) console.log(err);
    const token = buffer.toString("hex");

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ msg: "Email don't exist" });
    }
    user.resetToken = token;
    user.expireToken = Date.now() + 3600000;

    transport.sendMail({
      to: user.email,
      from: "abdoulazizsanitaro@gmail.com",
      subject: "Reset Password",
      html: `
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      .container {
        border: 3px solid #fff;
        padding: 4rem 5rem;
        background: #eceef1;
        font-family: sans-serif;
        max-width: 38rem;
        margin: 0 auto;
      }
      .logo {
        text-align: center;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #c68787;
        margin: 0 auto 1rem;
        font-weight: 700;
      }
      .logo img {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }
      .box {
        padding: 4rem;
        background: #fff;
        margin: auto;
        text-align: center;
      }
      .box h2 {
        font-size: 1.2rem;
      }
      .box .para {
        font-size: 0.9rem;
        margin-bottom: 3rem;
        font-weight: 700;
        color: #8e8e8e;
      }
      .box .link {
        text-decoration: none;
        color: #fff;
        background: #c68787;
        padding: 10px;
        font-size: 1rem;
        border-radius: 10px;
        font-weight: 700;
        display: block;
        max-width: 30rem;
        margin: auto;
      }
      @media only screen and (max-width: 768px) {
        .container {
          padding: 10px;
        }
        .logo {
          font-size: 1rem;
        }
        .box {
          padding: 20px;
        }
        .box .link {
          font-size: 14px;
          margin-bottom: 10px;
        }
        .box .para {
          font-size: 12px;
          margin-bottom: 10px;
        }
      }
    </style>
  </head>
  <body>
      <div class="title" style="width:100%; padding:4rem 0;">
      <div class="container">
          <a href="${protocol}//${domainName}/" class="logo" > <img src="https://res.cloudinary.com/tarositeweb/image/upload/v1634465718/tmp-1-1634465716055_owluzm.png" alt=""> Au 79 Code</a>
          
          <div class="box">
              <h2 style="color: #696868;">Password Reset</h2>
              <p class="para">If you've lost your password or wish to reset it, use the link below to get started.</p>
              <a href="${protocol}//${domainName}/new-password/${token}" class="link" >Reset your password</a>
              <p class="para">If you did not request a password reset, you can safety ignore this email. Only a person with access to your email can rest your account password</p>
          </div>
      </div>
  </div>
  
  
      
      </body>
        `,
    });

    user.save(() => {
      res
        .status(200)
        .json({ message: "Un message à été envoyé à votre email" });
    });
  });
});

// //////////////////////////////  UPDATE PASSWORD   //////////////////////
// @Route   api/new-password
// @Descr   Create a new password
// @Access  PRIVATE
const updatePassword = asyncHandler(async (req, res, next) => {
  const newPassword = req.body.password;
  const sendToken = req.params.token;

  try {
    const user = await User.findOne({
      resetToken: sendToken,
      expireToken: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Réesayé à nouveau, votre session est expiré" });
    }
    user.password = newPassword;
    user.resetToken = undefined;
    user.expireToken = undefined;
    user.save(() => {
      res.status(200).json({ msg: "success" });
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Save Company Information
// @route   POST /api/users
// @access  private
const saveCompanyInformation = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.company = req.body.company;
    user.typeUser = "merchant";

    const userUpdate = await user.save();

    res.json({
      _id: userUpdate._id,
      name: userUpdate.name,
      email: userUpdate.email,
      isAdmin: userUpdate.isAdmin,
      company: userUpdate.company,
      typeUser: userUpdate.typeUser,
      token: generateToken(userUpdate._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Save Bank Information
// @route   POST /api/users
// @access  private
const saveBankInformation = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.bank = req.body.bank;

    const userUpdate = await user.save();

    res.json({
      _id: userUpdate._id,
      bank: userUpdate.bank,
      token: generateToken(userUpdate._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Save Shipping Address
// @route   POST /api/users/shipping
// @access  private
const saveShippingAddress = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.shippingAddress = req.body;

    const userUpdate = await user.save();

    res.status(200).json({
      // _id: userUpdate._id,
      shippingAddress: userUpdate.shippingAddress,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Save Shipping Address
// @route   GET /api/users/shippng
// @access  private
const getShippingAddress = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      shippingAddress: user.shippingAddress,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const getAllCompanies = asyncHandler(async (req, res) => {
  try {
    const type = req.params.type;

    // const user = await User.find({company:{type: "company"}});
    const user = await User.find({ "company.type": type }).select(
      "company , email"
    );

    if (user) {
      res.status(200).json({
        users: user,
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  resetPassword,
  updatePassword,
  saveCompanyInformation,
  saveBankInformation,
  saveShippingAddress,
  getAllCompanies,
  getShippingAddress,
};

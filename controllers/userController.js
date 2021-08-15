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
    from: "aztaro97@gmail.com",
    subject: "Welcome to Au79Code",
    html: `
    <body>
    <div style="width:100%; padding:4rem 0;">
    <div style="border:3px solid #fff; padding:4rem 5rem; background:#ECEEF1; font-family: sans-serif; max-width:38rem;margin:0 auto">
        <a href="https://www.au79code.com/" style="text-align:center;font-size:2rem;display:flex;justify-content: center;text-decoration:none;color:#000;margin-bottom: 1rem;">Welcome to Au79Code</a>
        <div style="padding:4rem; background: #fff; margin: auto;text-align: center;">
            <h2 style="color: #696868;">Wecome</h2>
            <p style="margin-bottom:3rem;font-weight:700;color: #8E8E8E;">Thanks for Registering to au79code, click in this link to sign in in your account</p>
            <a href=https://www.au79code.com/ style="text-decoration: none; color: #fff; background: #54BBFB;padding:1rem 4rem; font-size: 1.2rem;border-radius: 10px;font-weight: 700;display: block;max-width:30rem;margin:auto;" >Link</a>
            <p style="color:#8E8E8E;font-weight: 700; margin-top: 3rem;font-size:.9rem;">Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia</p>
        </div>
    </div>
</div>


    
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
      shippindAddress: user.shippindAddress,
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
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json({
      _id: user._id,
      isAdmin:user.isAdmin,
      company: user.company,
      typeUser: user.typeUser
    });
  } else {
    res.status(404);
    throw new Error("User not found");
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
      from: "aztaro97@gmail.com",
      subject: "Reset Password",
      html: `
        <body>
        <div style="width:100%; padding:4rem 0;">
        <div style="border:3px solid #fff; padding:4rem 5rem; background:#ECEEF1; font-family: sans-serif; max-width:38rem;margin:0 auto">
            <a href="https://www.au79code.com/" style="text-align:center;font-size:2rem;display:flex;justify-content: center;text-decoration:none;color:#000;margin-bottom: 1rem;">Au79Code</a>
            <div style="padding:4rem; background: #fff; margin: auto;text-align: center;">
                <h2 style="color: #696868;">Password Reset</h2>
                <p style="margin-bottom:3rem;font-weight:700;color: #8E8E8E;">If you've lost your password or wish to reset it, use the link below to get started.</p>
                <a href=http://localhost:5000/new-password/${token} style="text-decoration: none; color: #fff; background: #54BBFB;padding:1rem 4rem; font-size: 1.2rem;border-radius: 10px;font-weight: 700;display: block;max-width:30rem;margin:auto;" >Reset your password</a>
                <p style="color:#8E8E8E;font-weight: 700; margin-top: 3rem;font-size:.9rem;">If you did not request a password reset, you can safety ignore this email. Only a person with access to your email can rest your account password</p>
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
      res.status(200).json({ msg: "Mot de passe à été mise à jour " });
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
    user.typeUser = "merchant"

    const userUpdate = await user.save();

    res.json({
      _id: userUpdate._id,
      name: userUpdate.name,
      email: userUpdate.email,
      isAdmin: userUpdate.isAdmin,
      company: userUpdate.company,
      typeUser : userUpdate.typeUser,
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
    user.shippindAddress = req.body.shippindAddress;

    const userUpdate = await user.save();

    res.status(200).json({
      // _id: userUpdate._id,
      shippindAddress: userUpdate.shippindAddress,
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
      shippindAddress: user.shippindAddress,
    });

  } else {
    res.status(400);
    throw new Error("User not found");
  }
});


const getAllCompanies = asyncHandler(async (req, res) => {
  try {

    const type = req.params.type


    // const user = await User.find({company:{type: "company"}});
  const user = await User.find({"company.type": type}).select("company , email");

  if (user) {
    res.status(200).json({
      users:user
    });

  } else {
    res.status(400);
    throw new Error("User not found");
  }
    
  } catch (error) {
    console.log(error)
  }
})










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
  getShippingAddress
};

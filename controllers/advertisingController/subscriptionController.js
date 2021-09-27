const asyncHandler = require("express-async-handler");
const subscriptionModel = require("../../models/advertisingModels/subscriptionAdvertising");

// @desc    Create new parter advertising
// @route   POST /api/advertising
// @access  Public
const setSubscriptionAdvertising = asyncHandler( async (req, res) => {
  const {
    products,
    paymentResult,
    isPaid,
    totalPrice,
    email
  } = req.body;
  

  const newService = new advertising({
    user: req.user._id,
    products,
    paymentResult,
    isPaid,
    totalPrice,
    email
  });

  const createService = await newService.save();
  res.status(200).json(createService);
});

module.exports = { setSubscriptionAdvertising };

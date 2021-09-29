const asyncHandler = require("express-async-handler");
const messageModel = require("../../models/advertisingModels/adMessageModel");

// @desc    Customer Message
// @route   POST /api/advertising/message
// @access  Public
const sendingMessage = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      city,
      country,
      region,
      message,
      companyId,
      companyName,
    } = req.body;

    const newService = new messageModel({
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      city,
      country,
      region,
      message,
      companyId,
      companyName,
    });

    const response = await newService.save();
    res.status(200).json({msg: `Thank you for your interest Mr ${response.firstName} , our customer support will contact you soon`});
  } catch (error) {
    res.status(500).json(error.message)
  }
});







module.exports = {
  sendingMessage
};

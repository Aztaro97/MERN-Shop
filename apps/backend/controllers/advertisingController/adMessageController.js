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
      companyTelephone,
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
      companyTelephone,
    });

    const response = await newService.save();
    res.status(200).json({
      msg: `Thank you for your interest Mr ${response.firstName} , our customer support will contact you soon`,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const openMessageById = asyncHandler(async (req, res) => {
  const message = await messageModel.findById(req.body.id);

  if (message) {
    message.view = true;

    const updateView = await message.save();
    res.status(200).json(updateView);
  } else {
    res.status(404);
    throw new Error("Message Not fund");
  }
});

const fetchAllMessage = asyncHandler(async (req, res) => {
  const messages = await messageModel
    .find()
    .sort({ createdAt: -1 })
    .select(["firstName", "lastName", "createdAt", "view"]);
  if (messages) {
    res.status(200).json(messages);
  } else {
    res.status(404).jsoj("Message Not fund");
  }
});

module.exports = {
  sendingMessage,
  openMessageById,
  fetchAllMessage,
};

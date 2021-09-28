const asyncHandler = require("express-async-handler");
const advertising = require("../../models/advertisingModels/AdvertisingserviceModel");

// @desc    Create new parter advertising
// @route   POST /api/advertising
// @access  Public
const addAdvertisingService = asyncHandler(async (req, res) => {
  const {
    companyName,
    about,
    TypeBusiness,
    fullName,
    telephone,
    email,
    city,
    country,
    region,
  } = req.body;

  const newService = new advertising({
    user: req.user._id,
    companyName,
    about,
    TypeBusiness,
    fullName,
    telephone,
    email,
    city,
    country,
    region,
  });

  const createService = await newService.save();
  res.status(200).json(createService);
});

const getAllAdService = asyncHandler(async (req, res) => {
  try {
    const allService = await advertising.find();

    if (allService) {
      res.status(200).json(allService);
    }
  } catch (error) {
    console.log(error);
  }
});



module.exports = { addAdvertisingService , getAllAdService};

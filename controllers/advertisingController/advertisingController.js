const asyncHandler = require("express-async-handler");
const advertising = require("../../models/advertisingModels/AdvertisingserviceModel");

// @desc    Create new parter advertising
// @route   POST /api/advertising
// @access  Public
const addAdvertisingService = asyncHandler(async (req, res) => {
  const {
    companyName,
    companyName_ar,
    about,
    about_ar,
    typeBusiness,
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
    companyName_ar,
    about,
    about_ar,
    typeBusiness,
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

const updatePremiumService = asyncHandler(async (req, res) => {
  try {
    const updateService = await advertising.findById(req.params.id);
    if (updateService) {
      updateService.typePlan = "premium";
      updateService.productsOrdered = req.body.productsOrdered;
      updateService.totalPrice = req.body.totalPrice;
    }
    const newService = await updateService.save();
    res.status(200).json(newService);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllAdService = asyncHandler(async (req, res) => {
  try {
    const allService = await advertising.find().sort({ createdAt: -1 });

    if (allService) {
      res.status(200).json(allService);
    }
  } catch (error) {
    console.log(error);
  }
});

// Admin
const filterByTypeBusiness = asyncHandler(async (req, res) => {
  const filter = await advertising.find({
    typeBusiness: req.body.typeBusiness,
  });

  if (filter) {
    res.status(200).json(filter);
  } else {
    res.status(404).json("Product not fund");
  }
});

// Public
const filterByTypeBusinessPublic = asyncHandler(async (req, res) => {
  const filter = await advertising.find({
    typeBusiness: req.body.typeBusiness,
    allow: true,
  });

  if (filter) {
    res.status(200).json(filter);
  } else {
    res.status(404).json("Product not fund");
  }
});

const getAdProfile = asyncHandler(async (req, res) => {
  const profile = await advertising.findById(req.params.id);

  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404);
    throw new Error("Profile not fund");
  }
});

const setUpdateAllowed = asyncHandler(async (req, res) => {
  const service = await advertising.findById(req.body.id);
  if (service) {
    service.allow = req.body.allow;
    const updateService = await service.save();
    res.status(200).json(updateService);
  } else {
    res.status(404);
    throw new Error("AD not fund");
  }
});

//  @router /api/advertising/profile/:id
const deleteAdService = asyncHandler(async (req, res) => {
  const service = await advertising.findById(req.params.id);

  if (service) {
    await service.remove();
    res.status(200).json({ msg: "Service deleted successfully" });
  } else {
    res.status(400);
    throw new Error("Service not Fund");
  }
});

const seachAdvertisingByCompanyName = asyncHandler(async (req, res) => {
  const keyword = req.body.companyName
    ? {
        companyName: {
          $regex: req.body.companyName,
          $options: "i",
        },
      }
    : {};
  const service = await advertising.find({ ...keyword });
  if (service) {
    res.status(200).json(service);
  } else {
    res.status(404);
    throw new Error("Service not Fund");
  }
});

const updateAdservice = asyncHandler(async (req, res) => {
  try {
    const {
      companyName,
      companyName_ar,
      about,
      about_ar,
      typeBusiness,
      fullName,
      telephone,
      email,
      city,
      country,
      region,
    } = req.body;
    const service = await advertising.findById(req.params.id);
    if (service) {
      service.companyName = companyName;
      service.companyName_ar = companyName_ar;
      service.about = about;
      service.about_ar = about_ar;
      service.typeBusiness = typeBusiness;
      service.telephone = telephone;
      service.fullName = fullName;
      service.email = email;
      service.city = city;
      service.country = country;
      service.region = region;
    }
    const updateService = await service.save();
    res.status(200).json(updateService);
  } catch (error) {
    throw new Error(error);
  }
});

const getUserAds = asyncHandler(async (req, res) => {
  try {
    const ads = await advertising.find({ user: req.params.id });
    if (ads) {
      res.status(200).json(ads);
    } else {
      res.status(404);
      throw new Error("Service not Fund");
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  addAdvertisingService,
  getAllAdService,
  filterByTypeBusiness,
  filterByTypeBusinessPublic,
  getAdProfile,
  updatePremiumService,
  setUpdateAllowed,
  deleteAdService,
  seachAdvertisingByCompanyName,
  getUserAds,
  updateAdservice,
};

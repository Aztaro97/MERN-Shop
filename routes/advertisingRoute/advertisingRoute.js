const express = require('express');
const { addAdvertisingService } = require('../../controllers/advertisingController/advertisingController');
const router = express.Router();

const {protect, admin} = require('../../middleware/authMiddleware');

router.route("/").post(protect, addAdvertisingService);

module.exports = router;
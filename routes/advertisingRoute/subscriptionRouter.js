const express = require('express');
const { setSubscriptionAdvertising } = require('../../controllers/advertisingController/subscriptionController');
const router = express.Router();

const {protect, admin} = require('../../middleware/authMiddleware');

router.route("/").post(protect, setSubscriptionAdvertising );

module.exports = router;
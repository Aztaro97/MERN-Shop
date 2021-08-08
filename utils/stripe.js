const express = require("express");
const router = express.Router();
const cors = require("cors")

// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require("stripe")("sk_test_51JJfI4Bx9NV9CAAsSQdUOsnA9mNook2RuXf0uqQdsir5d524Dl8bJlqqvkdtfEPP2LTkryyaRB4RxoA2q0Gk6SFG00NUMXzvGP");



router.post("/", cors(), async (req, res) => {
	// const customer = await stripe.customers.create({
	// 	email: 'gm.au79code@gmail.com',
	//   });
	//   const account = await stripe.accounts.retrieve('{{CONNECTED_STRIPE_ACCOUNT_ID}}');


	let { amount, id, } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "AED",
			description: "Spatula company",
			payment_method: "pm_card_visa",
			confirm: true,
			receipt_email: "aztaro97@gmail.com",
			shipping: { 
				address: { 
					city: "niamey",
					state: "dubai",
					country: "Niger"

				},
				phone: "564656464",
				name: "564656464"
				
			}
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false,
			error
		})
	}
})


module.exports = router;









module.exports = router;
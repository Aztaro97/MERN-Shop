const express = require("express");
const router = express.Router();
const cors = require("cors");

// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require("stripe")(
  "rk_test_51JJfI4Bx9NV9CAAsOc3mvqziw3RWQoa3cBZrWYqEuMuFQggmrIlcX4fMcTxZ45N0FUwPd76a0RejH4QNh8zXayBl00gALevlVp"
);

router.post("/", async (req, res) => {
  // const customer = await stripe.customers.create({
  // 	email: 'gm.au79code@gmail.com',
  //   });
  //   const account = await stripe.accounts.retrieve('{{CONNECTED_STRIPE_ACCOUNT_ID}}');

  // let { amount, id, } = req.body
  // try {
  // 	const payment = await stripe.paymentIntents.create({
  // 		amount,
  // 		currency: "AED",
  // 		description: "Spatula company",
  // 		// customer: "customer_id",
  // 		payment_method: "pm_card_visa",
  // 		confirm: true,
  // 		receipt_email: "aztaro97@gmail.com",
  // 		shipping: {
  // 			address: {
  // 				city: "niamey",
  // 				state: "dubai",
  // 				country: "Niger"

  // 			},
  // 			phone: "564656464",
  // 			name: "564656464"

  // 		}
  // 	})
  // 	console.log("Payment", payment)
  // 	res.json({
  // 		payment,
  // 		message: "Payment successful",
  // 		success: true
  // 	})
  // } catch (error) {
  // 	console.log("Error", error)
  // 	res.json({
  // 		message: "Payment failed",
  // 		success: false,
  // 		error
  // 	})
  // }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/thank",
    cancel_url: "https://example.com/cancel",
  });

  //   res.redirect(303, session.url);
  res.status(200).json({ session });
});

router.post("/advertising", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/thank",
    cancel_url: "https://example.com/cancel",
  });
});

module.exports = router;

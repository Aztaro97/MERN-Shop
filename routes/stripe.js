const express = require("express");
const router = express.Router();
const cors = require("cors");

// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require("stripe")(
  "sk_test_51JJfI4Bx9NV9CAAsdpOsySQlf2vLAMfcysbMGn0kP7QF7Cwy4oNgfHQEvVdkYdKCdFuy30ADHyd2uTio72uqBH7J00Wo9lKQyi"
);

router.post("/", cors(), async (req, res) => {
  const { amount, clientId, lineItem } = req.body;

  const session = await stripe.checkout.sessions.create({
    client_reference_id: clientId,
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/thank",
    cancel_url: "https://example.com/cancel",
  });

  //   res.redirect(303, session.url);
  res.status(200).json(session);
});

router.post("/advertising", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "aed",
      description: req.body.description,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({ error: stripeErr });
      } else {
        res.status(200).json({ success: stripeRes });
      }
    }
  );
});

module.exports = router;

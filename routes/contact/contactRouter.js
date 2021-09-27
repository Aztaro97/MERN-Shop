const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sentGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../../config/default.json");

const { protect } = require("../../middleware/authMiddleware");

// ///////////  Config NodeMailer Transport ////////////////////
const SENDGRID_API_KEYS = config.SENDGRID_API_KEYS;
const transport = nodemailer.createTransport(
  sentGridTransport({
    auth: {
      api_key: SENDGRID_API_KEYS,
    },
  })
);

router.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;

  const data = await transport.sendMail({
    to: "aztaro97@gmail.com",
    from: "aztaro97@gmail.com",
    subject: "Contact us",
    html: `
          <body>
          <div style="width:100%; padding:4rem 0;">
          <h6>Full Name: ${fullName} </h6>
          <h6>Full Name: ${email} </h6>
          <p>Full Name: ${message} </p>
          
            </div>
  
  
          
          </body>
          `,
  });

  console.log(data)

  res.status(200).json({data});
});

module.exports = router;

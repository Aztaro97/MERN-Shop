const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sentGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../../config/default.json");


// ///////////  Config NodeMailer Transport ////////////////////
const SENDGRID_API_KEYS = config.SENDGRID_API_KEYS;
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net", //replace with your email provider
  port: 465,
  auth: {
    user: "apikey",
    pass: SENDGRID_API_KEYS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  transporter
    .sendMail({
      to: email,
      from:  "taroshopping97@gmail.com",
      subject: "Contact us",
      html: `
        <body>
          <div style="width:100%; padding:4rem 0;">
            <h6>Full Name: ${name} </h6>
            <h6>Email adress: ${email} </h6>
            <p>Body Message: ${message} </p>         
          </div>


        
        </body>
        `,
    })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;

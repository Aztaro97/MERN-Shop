const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const favicon = require("serve-favicon");
const compression = require("compression");

const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const uploadRoutes = require("./routes/upload");
const AdverUploadingRoutes = require("./routes/advertisingRoute/uploadFiles");
const StripeRouter = require("./routes/stripe");
const advertisingRoutes = require("./routes/advertisingRoute/advertisingRoute");

const contactRouter = require("./routes/contact/contactRouter");
const { filter } = require("compression");

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  compression({
    level: 6,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// app.use(path.join(__dirname,"/public"))
app.use(favicon(path.join(__dirname, "client/public", "favicon.ico")));
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/upload-images", AdverUploadingRoutes);
app.use("/checkout", StripeRouter);
app.use("/api/advertising", advertisingRoutes);
app.use("/api/contact-us", contactRouter);

// app.use('/api/upload', uploadRoutes)

app.use(express.static(__dirname + "/public"));
// const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

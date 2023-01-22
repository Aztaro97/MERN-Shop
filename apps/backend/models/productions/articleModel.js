const mongoose = require("mongoose");

const articleShema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: Array, required: true },
  type: { type: Array, required: false },
  capacity: { type: Array, required: false },
  size: { type: Array, required: false },
  color: { type: Array, required: false },

  imgUrl: { type: Array, required: false },
});

const Articles = mongoose.model("Article", articleShema);

module.exports = Articles;

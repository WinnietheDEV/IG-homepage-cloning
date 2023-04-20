const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  caption: {
    type: String,
    maxlength: 30,
  },
  image: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Image", ImageSchema);

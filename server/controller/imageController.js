const { StatusCodes } = require("http-status-codes");
const Image = require("../model/Image");

const getImages = async (req, res) => {
  const images = await Image.find({}).sort({ createdAt: -1 });
  res.status(StatusCodes.CREATED).json({ images });
};

const createImage = async (req, res) => {
  console.log("check");
  const image = await Image.create(req.body);
  res.status(StatusCodes.CREATED).json({ image });
};

module.exports = { getImages, createImage };

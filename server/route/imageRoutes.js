const express = require("express");
const router = express.Router();
const { getImages, createImage } = require("../controller/imageController");
const { uploadImage } = require("../controller/uploadController");

router.route("/").get(getImages).post(createImage);
router.route("/upload").post(uploadImage);

module.exports = router;

require("dotenv").config();
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const ImageRouter = require("./route/imageRoutes");
const cloudinary = require("cloudinary").v2;
const connectDB = require("./db/connect");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
const port = process.env.PORT || 3000;

app.use("/api/v1/profile/image", ImageRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

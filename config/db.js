const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.URI)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB();

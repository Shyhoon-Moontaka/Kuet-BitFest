// db.js

const mongoose = require("mongoose");
require("dotenv").config();

const dbURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mofa-kitchen-buddy";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

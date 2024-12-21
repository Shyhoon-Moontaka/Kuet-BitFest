// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chatRoute = require("./routes/chatbot");
const ingredients = require("./routes/ingredients");
const recipes = require("./routes/recipes");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/hospital");

const connection = mongoose.connection;
connection.once("open", () => {
  // Fixed arrow function syntax
  console.log("MongoDB database connection established successfully");
});

app.use("/chatbot", chatRoute);
app.use("/ingredients", ingredients);
app.use("/recipie", appointmentsRouter); // Fixed typo in variable name

app.listen(PORT, () => {
  // Fixed arrow function syntax
  console.log(`Server is running on port ${PORT}`);
});

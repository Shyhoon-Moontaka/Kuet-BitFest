// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const chatRoute = require("./routes/chatbot.js");
const ingredients = require("./routes/ingredients.js");
const recipes = require("./routes/recipes.js");
const { runService } = require("./services/recipeService");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Recipie");

const connection = mongoose.connection;
connection.once("open", () => {
  // Fixed arrow function syntax
  console.log("MongoDB database connection established successfully");
});

app.use("/chat", chatRoute);
app.use("/ingredients", ingredients);
app.use("/recipie", recipes);
app.get("/runService", runService);

app.listen(PORT, () => {
  // Fixed arrow function syntax
  console.log(`Server is running on port ${PORT}`);
});

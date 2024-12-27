const mongoose = require("mongoose");

// Define the schema for an Ingredient
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: String,
    required: true,
    trim: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;

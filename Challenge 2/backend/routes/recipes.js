// backend/routes/recipes.js

const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// POST route to create a new recipe
router.post("/upload-recipe-image", recipeController.createRecipe);

module.exports = router;

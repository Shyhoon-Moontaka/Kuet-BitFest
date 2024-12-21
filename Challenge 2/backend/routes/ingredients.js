const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

// Route to get all ingredients
router.get("/", ingredientController.getAllIngredients);

// Route to add a new ingredient
router.post("/", ingredientController.addIngredient);

// Route to update an existing ingredient
router.put("/:id", ingredientController.updateIngredient);

// Route to delete an ingredient
router.delete("/:id", ingredientController.deleteIngredient);

module.exports = router;

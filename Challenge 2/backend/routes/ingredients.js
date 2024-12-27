const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

// Route to get all ingredients
router.route("/").get(ingredientController.getIngredients);

router.route("/:id").get(ingredientController.getIngredientById);

// Route to add a new ingredient
router.route("/").post(ingredientController.addIngredient);

// Route to update an existing ingredient
router.route("/:id").put(ingredientController.updateIngredient);

// Route to delete an ingredient
router.route("/:id").delete(ingredientController.deleteIngredient);

module.exports = router;

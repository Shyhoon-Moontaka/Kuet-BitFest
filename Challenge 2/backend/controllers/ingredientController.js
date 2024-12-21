const Ingredient = require("../models/Ingredient");
const { validationResult } = require("express-validator");

// @route   POST /api/ingredients
// @desc    Add a new ingredient
// @access  Private
exports.addIngredient = async (req, res) => {
  const { name, quantity, unit } = req.body;

  try {
    const newIngredient = new Ingredient({
      name,
      quantity,
      unit,
    });

    const ingredient = await newIngredient.save();

    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// @route   GET /api/ingredients
// @desc    Get all ingredients
// @access  Private
exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// @route   GET /api/ingredients/:id
// @desc    Get ingredient by ID
// @access  Private
exports.getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
      return res.status(404).json({ msg: "Ingredient not found" });
    }

    res.json(ingredient);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// @route   PUT /api/ingredients/:id
// @desc    Update ingredient
// @access  Private
exports.updateIngredient = async (req, res) => {
  const { name, quantity, unit } = req.body;

  const updatedIngredientFields = {};
  if (name) updatedIngredientFields.name = name;
  if (quantity) updatedIngredientFields.quantity = quantity;
  if (unit) updatedIngredientFields.unit = unit;

  try {
    let ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
      return res.status(404).json({ msg: "Ingredient not found" });
    }

    ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      { $set: updatedIngredientFields },
      { new: true }
    );

    res.json(ingredient);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// @route   DELETE /api/ingredients/:id
// @desc    Delete ingredient
// @access  Private
exports.deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
      return res.status(404).json({ msg: "Ingredient not found" });
    }

    await Ingredient.findByIdAndRemove(req.params.id);

    res.json({ msg: "Ingredient removed" });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

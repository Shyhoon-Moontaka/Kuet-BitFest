const Ingredient = require("../models/Ingredient");

exports.addIngredient = async (req, res) => {
  try {
    const newIngredient = new Ingredient(req.body);

    const ingredient = await newIngredient.save();

    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

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

exports.updateIngredient = async (req, res) => {
  try {
    let ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
      return res.status(404).json({ msg: "Ingredient not found" });
    }

    ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body);

    res.json(ingredient);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);

    if (!ingredient) {
      return res.status(404).json({ msg: "Ingredient not found" });
    }

    await Ingredient.findByIdAndDelete(req.params.id);

    res.json({ msg: "Ingredient removed" });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const multer = require("multer");
const path = require("path");

const Recipe = require("../models/Recipe"); // Importing Recipe model

exports.addRecipe = async (req, res) => {
  try {
    const imagePath = req.file.path;

    const recipeImage = new Recipe({
      imagePath,
    });

    res.status(201).json({
      recipeImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

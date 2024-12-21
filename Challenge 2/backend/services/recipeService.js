const Recipe = require("../models/Recipe");
const GeminiAPI = require("../gemini-api"); // Placeholder for Gemini API integration

/**
 * Adds a new recipe to the database.
 * @param {Object} recipeData - Recipe details (name, ingredients, taste, etc.)
 * @returns {Object} - Created recipe object
 */
const addRecipe = async (recipeData) => {
  try {
    const recipe = new Recipe(recipeData);
    await recipe.save();
    return recipe;
  } catch (error) {
    throw new Error(`Error adding recipe: ${error.message}`);
  }
};

/**
 * Retrieves recipes from the database based on filters.
 * @param {Object} filters - Filters for searching recipes (e.g., taste, cuisine, ingredients)
 * @returns {Array} - List of matched recipes
 */
const getRecipes = async (filters = {}) => {
  try {
    const recipes = await Recipe.find(filters);
    return recipes;
  } catch (error) {
    throw new Error(`Error retrieving recipes: ${error.message}`);
  }
};

/**
 * Updates a recipe in the database.
 * @param {String} recipeId - ID of the recipe to update
 * @param {Object} updateData - Fields to update
 * @returns {Object} - Updated recipe object
 */
const updateRecipe = async (recipeId, updateData) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(recipeId, updateData, {
      new: true,
    });
    if (!recipe) throw new Error(`Recipe with ID ${recipeId} not found`);
    return recipe;
  } catch (error) {
    throw new Error(`Error updating recipe: ${error.message}`);
  }
};

/**
 * Deletes a recipe from the database.
 * @param {String} recipeId - ID of the recipe to delete
 * @returns {Object} - Deleted recipe object
 */
const deleteRecipe = async (recipeId) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(recipeId);
    if (!recipe) throw new Error(`Recipe with ID ${recipeId} not found`);
    return recipe;
  } catch (error) {
    throw new Error(`Error deleting recipe: ${error.message}`);
  }
};

/**
 * Parses recipe details from an image or text using Gemini API.
 * @param {Buffer|String} input - Image buffer or text data
 * @returns {Object} - Parsed recipe details
 */
const parseRecipe = async (input) => {
  try {
    const recipeDetails = await GeminiAPI.parseRecipe(input); // Call Gemini API for parsing
    return recipeDetails;
  } catch (error) {
    throw new Error(`Error parsing recipe: ${error.message}`);
  }
};

/**
 * Stores a recipe parsed from an image or text.
 * @param {Buffer|String} input - Image buffer or text data
 * @returns {Object} - Created recipe object
 */
const addParsedRecipe = async (input) => {
  try {
    const recipeDetails = await parseRecipe(input);
    const recipe = await addRecipe(recipeDetails);
    return recipe;
  } catch (error) {
    throw new Error(`Error adding parsed recipe: ${error.message}`);
  }
};

module.exports = {
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
  parseRecipe,
  addParsedRecipe,
};

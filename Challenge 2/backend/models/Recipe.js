const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    imagePath: {
      // New field for storing image paths
      type: String,
      required: [true, "Image path is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);

// backend/routes/recipes.js

const express = require("express");
const router = express.Router();
const path = require("path");
const recipeController = require("../controllers/recipeController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file.fieldname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// POST route to create a new recipe
router.post("/", upload.single("file"), recipeController.createRecipe);

module.exports = router;

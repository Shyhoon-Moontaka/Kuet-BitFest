const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

// Route for chatbot interaction
router.route("/").post(chatbotController.runChat);

module.exports = router;

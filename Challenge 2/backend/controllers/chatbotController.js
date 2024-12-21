const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
var fs = require("fs");

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    // Initialize the Generative AI instance with your API key
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    // Get the Gemini model instance
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const recipieData = fs.readFile("my_fav_recipes.txt", function (err, data) {
      return data;
    });
    // Start a chat session with history
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: recipieData,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Indulge in the deliciousness of [dish name] with this easy-to-follow recipe! Perfect for [occasion or meal type], this dish features [key ingredients] and is ready in just [preparation + cooking time].",
            },
          ],
        },
      ],
    });

    // Send the first message
    let result = await chat.sendMessage(prompt);

    res.status(200).json({
      reply: result.response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

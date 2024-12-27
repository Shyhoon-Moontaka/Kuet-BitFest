const { GoogleGenerativeAI } = require("@google/generative-ai");
const Ingredient = require("../models/Ingredient");
const fs = require("fs");

exports.runChat = async (req, res) => {
  try {
    const { prompt } = req.body;
    const ingredientDetails = await Ingredient.find();
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBsQ8x5BXTMN2LzPvVsnZUo7eExwIcOlGg"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const data = fs.readFileSync(
      "/home/shyhoon/Documents/Node JS/Kuet Bitfest/Challenge 2/backend/my_fav_recipes.txt"
    );
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `The output should process a combined recipe text from ${data} and recommend
recipes based on the ingredients available at home from this data ${JSON.stringify(
                ingredientDetails
              )}`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Absolutely.I will generate contextual chat for next response.",
            },
          ],
        },
      ],
    });
    let result = await chat.sendMessage(
      `if the answer of this prompt ${prompt} exists,then then generate an eassy in more details.if answer does not exist,then output should be short paragraph.output must not contain \n character.`
    );
    const reply = result.response.text();
    res.status(200).json({
      reply,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

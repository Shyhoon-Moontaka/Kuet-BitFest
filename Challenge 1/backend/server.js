const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI("AIzaSyBsQ8x5BXTMN2LzPvVsnZUo7eExwIcOlGg");

app.use(express.json());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessageStream(
      `convert this ${prompt} into Bangla.give me only bangla language.`
    );
    let responseText = "";

    for await (const chunk of result.stream) {
      const chunkText = await chunk.text();
      responseText += chunkText;
    }

    res.json({ message: responseText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

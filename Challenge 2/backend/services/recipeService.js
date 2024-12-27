const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const genAI = new GoogleGenerativeAI("AIzaSyBsQ8x5BXTMN2LzPvVsnZUo7eExwIcOlGg");

const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

exports.runService = async (req, res) => {
  try {
    const uploadsDir = path.resolve(__dirname, "../uploads"); // Use absolute path
    const images = fs.readdirSync(uploadsDir);

    const content = [];

    for (const image of images) {
      try {
        const imageResp = fs.readFileSync(path.join(uploadsDir, image));
        const imageData = {
          inlineData: {
            data: imageResp.toString("base64"),
            mimeType: "image/png",
          },
        };
        content.push(imageData);
      } catch (err) {
        console.error(`Error reading image file ${image}:`, err);
      }
    }

    content.push(
      "create recipe details from individual images.the output should be in separate paragraph containing 2 line gap.each paragraph should contain 20 sentences.each sentence in paragraph must contain 1 line gap.each paragraph should have a caption."
    );

    const result = await model.generateContent(content);
    const data = result.response.text();

    fs.writeFileSync("my_fav_recipes.txt", data, "utf-8");

    res.status(200).json({
      message: data,
    });
  } catch (err) {
    console.error("Error processing service:", err.message);
    res.status(500).json({ error: "Service failed." });
  }
};

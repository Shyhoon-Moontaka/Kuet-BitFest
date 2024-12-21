Challenge 1

1. Importing necessary modules:
   - `express`: A fast, unopinionated, and minimalist web framework for Node.js.
   - `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
   - `@google/generative-ai`: A client library for the Google Generative AI API.

2. Loading environment variables from a `.env` file using `dotenv.config()`.

3. Initializing Express app and setting the listening port.

4. Creating an instance of the Google Generative AI client using your API key.

5. Configuring Express app to use JSON body parsing middleware.

6. Defining a POST endpoint `/chat` that handles chatbot requests.
   - Extracting the `prompt` from the request body.
   - Validating that the `prompt` is provided.
   - Attempting to generate a response using the Google Generative AI model.
   - Handling the response stream and concatenating the chunks of text.
   - Sending the generated response as a JSON object.
   - Handling any errors that occur during the process.

7. Starting the Express server and listening on the specified port.

This code sets up a basic chatbot server that can generate responses based on user prompts using the Google Generative AI model.




Challenge 2

In this challenge, Node.js will serve as the backend platform for developing a robust API system to support Mofa’s Kitchen Buddy. The Node.js environment will handle various aspects of the system, including managing ingredients, storing recipes, and integrating a chatbot powered by a Large Language Model (LLM).

Key Components:
Database Design:

Utilize a Node.js backend to interact with a relational database (e.g., PostgreSQL or MongoDB) for storing ingredient data.
Schema will include tables for ingredients with fields such as ingredient_id, name, quantity, and unit.
Ingredient Management API:

Develop RESTful APIs in Node.js to:
Add new ingredients.
Update ingredient quantities after shopping or cooking.
Recipe Retrieval:

Create APIs to handle parsing and storing recipe details from images or text into a centralized file (my_fav_recipes.txt).
Gemini API will be responsible for extracting text from images or external recipe data and storing them in the database.
Chatbot Integration:

A Node.js-based server will host the LLM-based chatbot API.
Chatbot interactions will process a combined recipe text file to suggest recipes using available ingredients. The Gemini API will assist in processing user queries for ingredient recognition and recipe suggestions.

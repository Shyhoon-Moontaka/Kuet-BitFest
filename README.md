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

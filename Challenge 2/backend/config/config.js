// config.js

// Required modules
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

// Exporting configuration
module.exports = {
  // Database configuration
  db: {
    mongoURI:
      process.env.MONGO_URI || "mongodb://localhost:27017/mofas-kitchen-buddy",
  },

  // Server settings
  server: {
    port: process.env.PORT || 5000,
  },

  // Gemini API Configuration
  geminiApi: {
    baseUrl:
      process.env.GEMINI_API_BASE_URL || "https://gemini-api.example.com",
    apiKey: process.env.GEMINI_API_KEY || "your-default-api-key",
    apiSecret: process.env.GEMINI_API_SECRET || "your-default-api-secret",
  },

  // JWT secret for authentication
  jwt: {
    secret: process.env.JWT_SECRET || "your-jwt-secret-key",
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  },

  // Other configurations can be added as required
};

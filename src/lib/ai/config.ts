export const AI_CONFIG = {
  model: process.env.GEMINI_MODEL || "gemini-flash-latest",
  apiKey: process.env.GEMINI_API_KEY || "",
  maxMessagesHistory: 10,
  maxMessageLength: 2000,
  maxOutputTokens: 1024,
  temperature: 0.7,
};

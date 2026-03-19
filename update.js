import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = process.argv[2];

// Read your existing file (example: index.html)
const content = fs.readFileSync("index.html", "utf-8");

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "Update website content but keep structure intact." },
    { role: "user", content: prompt + "\n\nCurrent content:\n" + content }
  ],
});

const updated = response.choices[0].message.content;

// Write updated content back
fs.writeFileSync("index.html", updated);

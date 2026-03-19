import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = process.argv[2];

async function run() {
  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("AI Output:", text);

    let content = fs.readFileSync("index.html", "utf-8");

    content = content.replace(
      "CGPA 3.56",
      "Graduated with Distinction"
    );

    fs.writeFileSync("index.html", content);

    console.log("✅ Updated successfully");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();

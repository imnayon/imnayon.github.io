import fs from "fs";

const prompt = process.argv[2];

// Read your website
let content = fs.readFileSync("index.html", "utf-8");

// Simple AI-like logic (no API needed)
if (prompt.toLowerCase().includes("cgpa")) {
  content = content.replace("CGPA 3.56", "Graduated with Distinction");
}

// Save file
fs.writeFileSync("index.html", content);

console.log("✅ Website updated!");

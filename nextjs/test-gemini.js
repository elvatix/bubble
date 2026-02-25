const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

async function main() {
    require("dotenv").config({ path: ".env.local" });
    const key = process.env.Gemini;
    if (!key) {
      console.log("No key");
      return;
    }
    const genAI = new GoogleGenerativeAI(key);
    
    for (const modelName of ["gemini-1.5-flash", "gemini-3-flash-preview", "gemini-2.5-flash", "gemini-2.0-flash"]) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const s = Date.now();
            await model.generateContent("Write a 100 word email about testing.");
            console.log(modelName, "took", Date.now() - s, "ms");
        } catch(e) {
            console.log(modelName, "failed:", e.message);
        }
    }
}
main();

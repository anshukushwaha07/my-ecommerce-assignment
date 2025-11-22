import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always load .env from project root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import connectDB from "./db/db.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/digital-chat";

mongoose.connect(databaseURL)
  .then(() => console.log("DB connection successfully"))
  .catch((err) => console.log("DB connection error:", err.message));

app.use(cors());
app.use(cookieParser());

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

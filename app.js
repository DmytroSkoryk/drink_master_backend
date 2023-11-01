import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import drinks from "./drinks/recipes.js";

dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server ranning");
    });
  })
  .catch((error) => console.log(error.message));

const app = express();

app.get("/drinks", (req, res) => {
  res.json(drinks);
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import drinksRouter from "./routes/api/drinksRouter.js";

dotenv.config();

const { DB_HOST } = process.env;

const app = express();

app.use(cors());

app.use("/api/drinks", drinksRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server ranning");
    });
  })
  .catch((error) => console.log(error.message));

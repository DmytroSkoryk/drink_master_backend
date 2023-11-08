import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config";

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server ranning");
    });
  })
  .catch((error) => console.log(error.message));

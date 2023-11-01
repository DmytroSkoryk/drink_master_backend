import express from "express";
import drinks from "../../drinks/recipes.js";

const drinksRouter = express.Router();

drinksRouter.get("/", (req, res) => {
  res.json(drinks);
});

drinksRouter.get("/:id", (req, res) => {
  res.json(drinks[0]);
});

drinksRouter.post("/", (req, res) => {
  res.json(drinks[0]);
});

export default drinksRouter;

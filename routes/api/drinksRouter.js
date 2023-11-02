import express from "express";
import drinksServise from "../../models/drinks.js";
import { HttpError } from "../../helpers/index.js";

const drinksRouter = express.Router();

drinksRouter.get("/", async (req, res, next) => {
  try {
    const result = await drinksServise.getAllDrinks();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

drinksRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await drinksServise.getDrinksById(id);
    if (!result) {
      throw HttpError(404, `Drink with id=${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default drinksRouter;

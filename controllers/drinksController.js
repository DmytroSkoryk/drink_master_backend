import drinksServise from "../models/drinks.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res, next) => {
  const result = await drinksServise.getAllDrinks();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await drinksServise.getDrinksById(id);
  if (!result) {
    throw HttpError(404, `Drink with id=${id} not found`);
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const result = await drinksServise.addDrink(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await drinksServise.deleteDrinkById(id);
  if (!result) {
    throw HttpError(404, `Drink with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
};

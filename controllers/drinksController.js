import Drink from "../models/drink.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const result = await Drink.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Drink.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, `Drink with id=${id} not found`);
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Drink.create(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Drink.findByIdAndDelete(id);
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

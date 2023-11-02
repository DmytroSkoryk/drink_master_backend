import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("drinks", "recipes.json");

const getAllDrinks = async () => {
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};

const getDrinksById = async (drinkId) => {
  const drinks = await getAllDrinks();
  const result = drinks.find((item) => item._id.$oid === drinkId);
  return result || null;
};

export default {
  getAllDrinks,
  getDrinksById,
};

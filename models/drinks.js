import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const filePath = path.resolve("drinks", "recipes.json");

const updateDrinks = (drinks) =>
  fs.writeFile(filePath, JSON.stringify(drinks, null, 2));

const getAllDrinks = async () => {
  const data = await fs.readFile(filePath);
  return JSON.parse(data);
};

const getDrinksById = async (drinkId) => {
  const drinks = await getAllDrinks();
  const result = drinks.find((item) => item._id.$oid === drinkId);
  return result || null;
};

const addDrink = async ({ drink, category }) => {
  const drinks = await getAllDrinks();
  const newDrink = {
    id: nanoid(),
    drink,
    category,
  };
  drinks.push(newDrink);
  await updateDrinks(drinks);
  return newDrink;
};

const deleteDrinkById = async (drinkId) => {
  const drinks = await getAllDrinks();
  const index = drinks.findIndex((item) => item._id.$oid === drinkId);
  if (index === -1) {
    return null;
  }
  const [result] = drinks.splice(index, 1);
  await updateDrinks(drinks);
  return result;
};

export default {
  getAllDrinks,
  getDrinksById,
  addDrink,
  deleteDrinkById,
};

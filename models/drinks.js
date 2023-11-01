import { Schema, model } from "mongoose";

const drinkSchema = new Schema({
  drink: String,
  drinkAlternate: String,
  tags: String,
  video: String,
  category: String,
  IBA: String,
  alcoholic: String,
  glass: String,
  description: String,
  instructions: String,
  instructionsES: String,
  instructionsDE: String,
  instructionsFR: String,
  instructionsIT: String,
  instructionsRU: String,
  instructionsPL: String,
  instructionsUK: String,
  drinkThumb: String,
});

const Drink = model("drink", drinkSchema);

export default Drink;

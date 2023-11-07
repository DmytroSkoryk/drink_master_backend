import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const drinkSchema = new Schema(
  {
    drink: {
      type: String,
      required: true,
    },
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
    ingredients: [
      {
        title: String,
        measure: String,
      },
    ],
    shortDescription: String,
  },
  { versionKey: false, timestamps: true }
);

drinkSchema.post("save", handleSaveError);

const Drink = model("drink", drinkSchema);

export default Drink;

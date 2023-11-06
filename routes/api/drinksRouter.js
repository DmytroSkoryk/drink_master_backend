import express from "express";
import drinksController from "../../controllers/drinksController.js";
import { validateBody } from "../../decorators/index.js";
import { isEmptyBody } from "../../middlewares/index.js";
import drinksSchemas from "../../schemas/drinksSchemas.js";

const drinksRouter = express.Router();

drinksRouter.get("/", drinksController.getAll);

drinksRouter.get("/:id", drinksController.getById);

drinksRouter.post(
  "/",
  isEmptyBody,
  validateBody(drinksSchemas.drinkAddSchema),
  drinksController.add
);

drinksRouter.delete("/:id", drinksController.deleteById);

export default drinksRouter;

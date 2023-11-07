import express from "express";
import drinksController from "../../controllers/drinksController.js";
import { validateBody } from "../../decorators/index.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import drinksSchemas from "../../schemas/drinksSchemas.js";

const drinksRouter = express.Router();

drinksRouter.get("/", drinksController.getAll);

drinksRouter.get("/:id", isValidId, drinksController.getById);

drinksRouter.post(
  "/",
  isEmptyBody,
  validateBody(drinksSchemas.drinkAddSchema),
  drinksController.add
);

drinksRouter.delete("/:id", isValidId, drinksController.deleteById);

export default drinksRouter;

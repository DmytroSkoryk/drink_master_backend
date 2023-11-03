import express from "express";
import drinksController from "../../controllers/drinksController.js";

const drinksRouter = express.Router();

drinksRouter.get("/", drinksController.getAll);

drinksRouter.get("/:id", drinksController.getById);

drinksRouter.post("/", drinksController.add);

drinksRouter.delete("/:id", drinksController.deleteById);

export default drinksRouter;

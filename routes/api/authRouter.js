import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchemas from "../../schemas/usersSchemas.js";
import authController from "../../controllers/authController/index.js";
import { authenticate, upload } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  upload.single("avatarURL"),
  validateBody(usersSchemas.userSignupSchema),
  authController.signup
);

authRouter.post(
  "/signin",
  validateBody(usersSchemas.userSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

authRouter.patch(
  "/update",
  authenticate,
  validateBody(usersSchemas.updateUserSchema),
  authController.updateUser
);
export default authRouter;

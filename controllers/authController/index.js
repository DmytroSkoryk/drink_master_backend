import signup from "./signup.js";
import signin from "./signin.js";
import getCurrent from "./getCurrent.js";
import signout from "./signout.js";
import { ctrlWrapper } from "../../decorators/index.js";

const authController = {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  getCurrent: ctrlWrapper(getCurrent),
  signout: ctrlWrapper(signout),
};

export default authController;

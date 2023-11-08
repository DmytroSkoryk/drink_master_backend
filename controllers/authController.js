import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import User from "../models/user.js";

const signup = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

export default {
  signup: ctrlWrapper(signup),
};

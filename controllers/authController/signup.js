import { HttpError } from "../../helpers/index.js";
import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import gravatar from "gravatar";

const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  console.log(avatarUrl);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL: avatarUrl,
  });
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

export default signup;

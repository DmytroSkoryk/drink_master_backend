import User from "../../models/user.js";
import fs from "fs/promises";
import path from "path";

const userPath = path.resolve("public", "users");

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { _id } = req.user;

  const { path: oldPath, filename } = req.file;
  const newPath = path.join(userPath, filename);
  await fs.rename(oldPath, newPath);
  const avatar = path.join("users", filename);
  console.log(avatar);

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { name, avatarURL: avatar },
    { new: true }
  );
  if (!updatedUser) {
    throw HttpError(404, "User not found");
  }
  res.json({
    name: updatedUser.name,
    avatar: updatedUser.avatar,
  });
};

export default updateUser;

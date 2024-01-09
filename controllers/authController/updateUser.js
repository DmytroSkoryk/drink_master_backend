import User from "../../models/user.js";
import fs from "fs/promises";
import path from "path";
import { HttpError, cloudinary } from "../../helpers/index.js";

const userPath = path.resolve("public", "users");

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { _id } = req.user;
  const { path: oldPath } = req.file;
  const { url: avatar } = await cloudinary.uploader.upload(oldPath, {
    folder: "avatars",
  });
  await fs.unlink(oldPath);
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

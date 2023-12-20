import User from "../../models/user.js";

const updateUser = async (req, res) => {
  const { name } = req.body;
  const { _id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { name },
    { new: true }
  );
  if (!updatedUser) {
    throw HttpError(404, "User not found");
  }
  res.json({
    name: updatedUser.name,
  });
};

export default updateUser;

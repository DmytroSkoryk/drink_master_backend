const getCurrent = (req, res) => {
  const { name, email, avatarURL } = req.user;
  res.json({
    name,
    email,
    avatarURL,
  });
};

export default getCurrent;

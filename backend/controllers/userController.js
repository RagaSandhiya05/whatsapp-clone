const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.json(user);
  } catch {
    res.status(400).json({ error: "User exists" });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  const { sender, receiver, text } = req.body;

  if (!sender || !receiver || !text) {
    return res.status(400).json({ error: "All fields required" });
  }

  const message = new Message({ sender, receiver, text });
  await message.save();

  res.json(message);
};

exports.getMessages = async (req, res) => {
  const { user1, user2 } = req.params;

  const messages = await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 }
    ]
  }).sort({ timestamp: 1 });

  res.json(messages);
};

const router = require("express").Router();
const { sendMessage, getMessages } = require("../controllers/messageController");

router.post("/", sendMessage);
router.get("/:user1/:user2", getMessages);

module.exports = router;

import React, { useState } from "react";

export default function MessageInput({ currentUser, selectedUser, socket }) {
  const [text, setText] = useState("");

  const send = () => {
    socket.emit("sendMessage", {
      sender: currentUser,
      receiver: selectedUser,
      text
    });
    setText("");
  };

  return (
    <div className="flex p-2 border-t">
      <input
        className="flex-1 border p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={send} className="bg-green-500 text-white px-4 ml-2">
        Send
      </button>
    </div>
  );
}

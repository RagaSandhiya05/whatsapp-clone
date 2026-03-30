import React, { useEffect, useState } from "react";
import API from "../api";
import { io } from "socket.io-client";
import MessageInput from "./MessageInput";

const socket = io("http://localhost:5000");

export default function ChatWindow({ currentUser, selectedUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.get(`/messages/${currentUser}/${selectedUser}`)
      .then(res => setMessages(res.data));
  }, [selectedUser]);

  useEffect(() => {
    socket.on("receiveMessage", msg => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  return (
    <div className="w-2/3 flex flex-col">
      <div className="bg-green-500 text-white p-3">{selectedUser}</div>

      <div className="flex-1 overflow-y-scroll p-4 bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.sender === currentUser ? "text-right" : ""}`}>
            <span className="bg-green-300 px-3 py-1 rounded">{m.text}</span>
          </div>
        ))}
      </div>

      <MessageInput currentUser={currentUser} selectedUser={selectedUser} socket={socket} />
    </div>
  );
}

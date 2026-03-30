import React, { useState } from "react";
import API from "../api";

export default function Login({ setUser }) {
  const [name, setName] = useState("");

  const login = async () => {
    await API.post("/users", { name });
    setUser(name);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow">
        <input
          className="border p-2 w-full mb-3"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={login} className="bg-green-500 text-white px-4 py-2 w-full">
          Start Chat
        </button>
      </div>
    </div>
  );
}

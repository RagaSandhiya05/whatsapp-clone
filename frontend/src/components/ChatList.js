import React, { useEffect, useState } from "react";
import API from "../api";

export default function ChatList({ setSelectedUser, currentUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then(res =>
      setUsers(res.data.filter(u => u.name !== currentUser))
    );
  }, [currentUser]);

  return (
    <div className="w-1/3 bg-gray-100 p-4">
      {users.map(u => (
        <div
          key={u._id}
          onClick={() => setSelectedUser(u.name)}
          className="p-2 hover:bg-green-200 cursor-pointer"
        >
          {u.name}
        </div>
      ))}
    </div>
  );
}

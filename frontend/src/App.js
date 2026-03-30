import React, { useState } from "react";
import Login from "./components/Login";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="flex h-screen">
      <ChatList currentUser={user} setSelectedUser={setSelectedUser} />
      {selectedUser && (
        <ChatWindow currentUser={user} selectedUser={selectedUser} />
      )}
    </div>
  );
}

export default App;

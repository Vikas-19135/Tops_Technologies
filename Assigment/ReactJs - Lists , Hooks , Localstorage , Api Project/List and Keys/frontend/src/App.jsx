import React from "react";
import FruitList from "./components/FruitList/FruitList";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 py-8">
      <FruitList />
      <UserList />
    </div>
  );
}

export default App;

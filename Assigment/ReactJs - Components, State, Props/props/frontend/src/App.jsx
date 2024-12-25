import React from "react";
import UserCard from "./components/UserCard/UserCard";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <UserCard name="Vikas Patel" age={23} location="India" />
      <Counter />
    </div>
  );
}

export default App;

import React from "react";
import Greeting from "./components/Greeting/Greeting";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300 p-8">
      <Greeting name="Vikas Patel" />
      <WelcomeMessage />
    </div>
  );
}

export default App;

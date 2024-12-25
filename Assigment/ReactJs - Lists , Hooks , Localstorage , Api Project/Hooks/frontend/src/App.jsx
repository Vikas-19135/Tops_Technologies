import React from "react";
import Counter from "./components/Counter/Counter";
import FetchData from "./components/FetchData/FetchData";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter";
import AvoidReRender from "./components/AvoidReRender/AvoidReRender";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <Counter />
      <FetchData />
      <ReduxCounter />
      <AvoidReRender />
    </div>
  );
}

export default App;

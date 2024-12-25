import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center mt-6">
      <h2 className="text-2xl font-bold text-gray-800">Counter</h2>
      <p className="text-gray-600 mt-2">Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

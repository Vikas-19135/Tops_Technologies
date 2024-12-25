import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Counter</h2>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          Decrement
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white p-2 rounded-full"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

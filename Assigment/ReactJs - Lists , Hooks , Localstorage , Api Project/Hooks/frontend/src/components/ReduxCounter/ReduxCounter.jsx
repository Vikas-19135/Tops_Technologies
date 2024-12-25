import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Redux Counter</h2>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => dispatch({ type: "counter/decrement" })}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          Decrement
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={() => dispatch({ type: "counter/increment" })}
          className="bg-green-500 text-white p-2 rounded-full"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;

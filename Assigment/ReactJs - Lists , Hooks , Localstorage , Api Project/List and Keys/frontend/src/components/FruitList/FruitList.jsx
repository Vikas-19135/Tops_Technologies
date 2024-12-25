import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80 mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Fruit List
      </h2>
      <ul className="list-disc list-inside text-gray-600">
        {fruits.map((fruit, index) => (
          <li key={index} className="py-1">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;

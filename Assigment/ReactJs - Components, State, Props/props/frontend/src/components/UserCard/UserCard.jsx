import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">Age: {age}</p>
      <p className="text-gray-600">Location: {location}</p>
    </div>
  );
};

export default UserCard;

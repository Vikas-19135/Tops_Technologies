import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Sagar" },
    { id: 2, name: "Devin" },
    { id: 3, name: "Charmi" },
    { id: 4, name: "Vikas" },
    { id: 5, name: "Dipak" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80 mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        User List
      </h2>
      <ul className="space-y-2 text-gray-600">
        {users.map((user) => (
          <li
            key={user.id}
            className="py-2 px-4 border rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

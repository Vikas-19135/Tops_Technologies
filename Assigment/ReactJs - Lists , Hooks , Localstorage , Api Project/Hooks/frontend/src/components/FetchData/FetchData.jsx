import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id} className="mb-2">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;

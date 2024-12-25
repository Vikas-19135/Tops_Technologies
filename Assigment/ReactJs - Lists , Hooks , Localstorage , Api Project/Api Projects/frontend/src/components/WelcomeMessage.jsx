import React from 'react';
import { useAuth } from '../context/AuthContext';

const WelcomeMessage = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isAuthenticated ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome back, User!
          </h1>
          <button
            onClick={logout}
            className="bg-secondary text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in
          </h1>
          <button
            onClick={login}
            className="bg-primary text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;

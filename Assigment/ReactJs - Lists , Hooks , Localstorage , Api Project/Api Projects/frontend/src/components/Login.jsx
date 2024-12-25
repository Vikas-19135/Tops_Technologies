import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={login}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Log in
      </button>
    </div>
  );
};

export default Login;

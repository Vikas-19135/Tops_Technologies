import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // ThemeContext provider
import { AuthProvider } from './context/AuthContext'; // AuthContext provider
import ThemeToggle from './components/ThemeToggle'; // Theme toggle button
import WelcomeMessage from './components/WelcomeMessage'; // Welcome message based on authentication

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App bg-white dark:bg-gray-800 min-h-screen p-4">
          <div className="flex justify-center mb-4">
            <ThemeToggle /> {/* Theme toggle button */}
          </div>
          <WelcomeMessage /> {/* Display WelcomeMessage based on authentication */}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

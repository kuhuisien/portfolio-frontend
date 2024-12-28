import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="hoverable flex items-center space-x-1 p-6"
      onClick={toggleTheme}
    >
      {/* sun icon */}
      <FaSun
        className={`text-yellow-500 transition-opacity duration-300 ${
          isDarkMode ? "opacity-50" : "opacity-100"
        }`}
      />
      {/* dark or light mode switch */}
      <div
        className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all ease-in-out"
        aria-label="Toggle dark mode"
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ease-in-out duration-300 ${
            isDarkMode ? "transform translate-x-4 bg-gray-800" : ""
          }`}
        />
      </div>
      {/* moon icon */}
      <FaMoon
        className={`text-gray-500 transition-opacity duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-50"
        }`}
      />
    </div>
  );
};

export default ThemeToggle;

import React from "react";

const navbar = ({ darkMode, toggleDarkMode }: any) => {
  return (
    <header className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </header>
  );
};

export default navbar;

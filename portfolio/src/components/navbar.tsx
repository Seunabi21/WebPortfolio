import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, toggleDarkMode }: any) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo on the Left */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Navigation Menu on the Right */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["Introduction", "About", "Skills", "Contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle on the Right */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;

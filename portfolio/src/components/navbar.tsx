import React from "react";
import { Link } from "react-scroll";
// import { FaLinkedin, FaPhone } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Left */}
        <Link to="introduction" smooth={true} duration={500} className="cursor-pointer">
          <img src="logo.png" alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Menu Center */}
        <ul className="flex space-x-6">
          {["Introduction", "About", "Skills", "Resume", "Contact"].map((section) => (
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

        {/* Icons Right */}
        <div className="flex items-center space-x-4 text-xl text-gray-700 dark:text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            {/* <FaLinkedin className="hover:text-blue-500 cursor-pointer" /> */}
          </a>
          <a href="mailto:yourmail@gmail.com">
            {/* <MdEmail className="hover:text-blue-500 cursor-pointer" /> */}
          </a>
          <a href="tel:+1234567890">
            {/* <FaPhone className="hover:text-blue-500 cursor-pointer" /> */}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

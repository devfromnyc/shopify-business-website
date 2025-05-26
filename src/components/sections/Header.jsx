import React from "react";

export const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between items-center w-full px-12">
        <div className="flex items-center py-4 px-2">
          <a href="/" className="font-bold text-gray-800 text-2xl">
            Logo
          </a>
        </div>
        <div className="hidden md:flex items-center justify-evenly min-w-[500px] space-x-4">
          <a href="/" className="text-gray-800 hover:text-gray-400">
            Home
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-400">
            About
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-400">
            Services
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex items-center py-4 px-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

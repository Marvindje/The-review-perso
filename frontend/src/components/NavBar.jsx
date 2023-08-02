import React from "react";
import logo from "../assets/the-review-high-resolution-logo-color-on-transparent-background.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-12 w-auto" src={logo} alt="Workflow" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <h1 className="font-semibold text-xl">The Review</h1>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/the-review-high-resolution-logo-color-on-transparent-background.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-20 w-auto" src={logo} alt="Workflow" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <Link to="/">
              <h1 className="font-semibold text-xl">The Review</h1>
            </Link>
          </div>
          <div className="flex sm:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="menu w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zm0 5A1.5 1.5 0 013.5 8h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 9.5zm1.5 5a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className={`sm:flex sm:items-center sm:ml-6 ${isOpen ? "flex" : "hidden"} flex-col sm:flex-row`}>
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
}

export default Navbar;

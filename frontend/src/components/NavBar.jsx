/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { useUserContext } from "../context/userContext";
import { FaSearch, FaUser } from "react-icons/fa";
import logo from "../assets/the-review-low-resolution-logo-color-on-transparent-background.png";

function Navbar({ onLogoClick }) {
  const { onLogout } = useUserContext();

  const [isOpen, setIsOpen] = useState(false);
  const profilePhoto = localStorage.getItem("profilePhoto");
  const linkClasses =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2";

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-blue-500 to-transparent shadow-md transition-all duration-500 ease-in-out hover:shadow-lg max-w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center align-center max-w-full">
            <Link
              to="/"
              onClick={onLogoClick}
              className="hidden sm:block"
            >
              <motion.img
                className="h-10 w-auto max-w-full"
                src={logo}
                alt="Workflow"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <motion.input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-2 rounded-md text-sm font-medium"
                whileFocus={{ scale: 1.1 }}
              />
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              <div className="w-6 h-0.5 bg-black mb-1.5 rounded-full" />
              <div className="w-6 h-0.5 bg-black mb-1.5 rounded-full" />
              <div className="w-6 h-0.5 bg-black rounded-full" />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row sm:items-center sm:ml-6`}
          >
            <div className="flex space-x-4">
              {profilePhoto ? (
                <Link to="/mon-profil">
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                </Link>
              ) : (
                <Link to="/mon-profil">
                  <FaUser className="w-10 h-10 mr-4 text-gray-700" />
                </Link>
              )}
              <div className="relative group flex">
                <Link
                  to="/user"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  User
                </Link>
                <div className="absolute left-0 w-38 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10 overflow-hidden">
                  <Link to="/" className={linkClasses}>
                    Home
                  </Link>
                  <Link to="/mon-profil" className={linkClasses}>
                    Profile
                  </Link>
                  <Link to="/mes-posts" className={linkClasses}>
                    My Posts
                  </Link>
                  <Link to="/creer-post" className={linkClasses}>
                    Create Posts
                  </Link>
                </div>
              </div>
              <div className="relative group flex">
                <Link
                  to="/"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Link>
                <div className="absolute right-0 w-38 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10 overflow-hidden">
                  <button onClick={onLogout} className={linkClasses}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

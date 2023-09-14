import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4m-2 0a6 6 0 01-6 6a6 6 0 01-6-6a6 6 0 016-6a6 6 0 016 6z" />
          </svg>
          <span className="ml-3 text-xl">The Review</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-6 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 The Review —
          <button
            onClick={() => window.open("https://www.wildcodeschool.com/fr-fr/")}
            className="text-gray-600 ml-1"
          >
            @TheReview
          </button>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="text-gray-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Contact
          </button>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

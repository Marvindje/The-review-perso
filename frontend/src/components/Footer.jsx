import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M22 12h-4m-2 0a6 6 0 01-6 6a6 6 0 01-6-6a6 6 0 016-6a6 6 0 016 6z"></path>
          </svg>
          <span className="ml-3 text-xl">The Review</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 The Review —
          <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@TheReview</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v14a2 2 0 002 2h6a2 2 0 002-2V7a5 5 0 00-5-5z"></path>
              <path d="M6 2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h2z"></path>
              <line x1="6" y1="16" x2="6" y2="16"></line>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 3a2 2 0 00-2-2 2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
              <path d="M21 9a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V9z"></path>
              <path d="M21 15a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z"></path>
              <path d="M7 3a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V3z"></path>
              <path d="M7 9a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V9z"></path>
              <path d="M7 15a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 2v4a2 2 0 002 2h4"></path>
              <line x1="16" y1="17" x2="16" y2="17"></line>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

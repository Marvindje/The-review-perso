import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/the-review-high-resolution-logo-color-on-transparent-background.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md text-sm font-medium"
              />
              <Link
                to="/"
                className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Accueil
              </Link>
              <div className="relative group flex mr-4">
                <Link
                  to="/profil"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profil
                </Link>
                <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10">
                  <Link to="/mon-profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Mon Profil</Link>
                  <Link to="/mes-posts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Mes Posts</Link>
                  <Link to="/creer-post" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Créer un Post</Link>
                </div>
              </div>
              <div className="relative group flex">
                <Link
                  to="/categories"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Catégories
                </Link>
                <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block z-10">
                  <Link to="/categorie/developpement-web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Développement Web</Link>
                  <Link to="/categorie/intelligence-artificielle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Intelligence Artificielle</Link>
                  <Link to="/categorie/hardware" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Hardware</Link>
                  <Link to="/categorie/logiciels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Logiciels</Link>
                  <Link to="/categorie/cybersecurite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">CyberSécurité</Link>
                  <Link to="/categorie/carrieres-technos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-400 hover:text-white">Carrières Technos</Link>
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

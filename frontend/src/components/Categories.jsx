import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Web Dev", path: "/categorie/developpement-web" },
    { name: "AI", path: "/categorie/intelligence-artificielle" },
    { name: "Hardware", path: "/categorie/hardware" },
    { name: "Software", path: "/categorie/logiciels" },
    { name: "CyberSec", path: "/categorie/cybersecurite" },
    { name: "Careers", path: "/categorie/carrieres-technos" },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {categories.map((category, index) => (
        <Link to={category.path} key={index}>
          <div className="m-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 w-40 h-40 flex items-center justify-center text-white text-2xl font-bold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out">
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;

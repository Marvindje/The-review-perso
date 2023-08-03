import React from 'react';
import { Link } from 'react-router-dom';
import devWebImage from '../assets/dev-web.jpeg';

const DeveloppementWeb = () => {
  return (
    <div className="font-body">
      {/* Hero section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${devWebImage})` }}>
        <h1 className="text-5xl text-white font-header text-center bg-gradient-to-r from-black to-transparent py-2 px-4 rounded hover:text-blue-500 transition-colors duration-200">
          Bienvenue dans la section Développement Web
        </h1>
      </div>

      <div className="flex justify-center items-center mt-64 mb-20">
        <div className="grid grid-cols-2 gap-6">
          {/* Replace this part with a loop to display your articles */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden shadow-lg p-6 hover:bg-blue-500 hover:text-white transition-colors duration-200">
              <h3 className="text-2xl font-header mb-2">Titre de l'article {i+1}</h3>
              <p className="text-white text-sm">Description de l'article...</p>
              <Link to={`/article${i+1}`} className="text-white text-sm mt-4 block hover:text-white">Lire l'article</Link>
            </div>
          ))}
          {/* End of the loop */}
        </div>
      </div>
    </div>
  );
};

export default DeveloppementWeb;

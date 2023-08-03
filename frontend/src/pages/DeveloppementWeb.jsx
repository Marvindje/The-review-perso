import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/dev-web.jpeg';// Remplacez par votre image
 // Remplacez par votre image

const DeveloppementWeb = () => {
  return (
    <div className="font-body">
      {/* Hero section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="text-5xl text-white font-header text-center">Bienvenue dans la section Développement Web</h1>
      </div>

      {/* Articles section */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-4xl font-header text-center mb-8">Découvrez nos derniers articles sur le développement web</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Remplacez cette partie par une boucle pour afficher vos articles */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="h-56 w-full object-cover" src={articleImage} alt="Article" />
            <div className="p-6">
              <h3 className="text-2xl font-header mb-2">Titre de l'article</h3>
              <p className="text-gray-700 text-sm">Description de l'article...</p>
              <Link to="/article" className="text-blue-500 text-sm mt-4 block">Lire l'article</Link>
            </div>
          </div>
          {/* Fin de la boucle */}
        </div>
      </div>
    </div>
  );
};

export default DeveloppementWeb;

import React from 'react';

function IntelligenceArtificielleSection() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="font-bold text-3xl mb-4">Intelligence Artificielle</h2>
      <p>L'intelligence artificielle est au cœur de la révolution technologique. Découvrez les avancées récentes en IA, des algorithmes de machine learning aux applications pratiques dans diverses industries.</p>
      <div className="grid grid-cols-3 gap-4">
        {renderAISubsection('Machine Learning', 'Explorez les techniques de machine learning.')}
        {renderAISubsection('Vision par Ordinateur', 'Découvrez la vision par ordinateur, avec des applications dans la reconnaissance faciale.')}
        {renderAISubsection('Traitement du Langage Naturel', 'Apprenez comment les machines peuvent comprendre et générer le langage humain.')}
      </div>
    </div>
  );
}

function renderAISubsection(title, description) {
  return (
    <div className="bg-white p-4">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Ajoutez plus de contenu ici, comme des images, vidéos, liens, etc. */}
    </div>
  );
}

export default IntelligenceArtificielleSection;

import React from 'react';

function DeveloppementWebSection() {
  return (
    <div className="p-10 bg-white">
      <h2 className="font-bold text-3xl mb-4">Développement Web</h2>
      <p>Le développement web est un domaine en constante évolution. Explorez les dernières tendances et technologies, des frameworks modernes aux meilleures pratiques de codage.</p>
      <div className="grid grid-cols-3 gap-4">
        {renderWebSubsection('HTML5', 'Apprenez les dernières techniques et standards en HTML5.')}
        {renderWebSubsection('CSS3', 'Découvrez les possibilités de mise en forme avec CSS3.')}
        {renderWebSubsection('JavaScript', 'Explorez JavaScript, avec des tutoriels sur React, Vue, et Angular.')}
      </div>
    </div>
  );
}

function renderWebSubsection(title, description) {
  return (
    <div className="bg-gray-100 p-4">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Ajoutez plus de contenu ici, comme des images, vidéos, liens, etc. */}
    </div>
  );
}

export default DeveloppementWebSection;

import React from 'react';

function HardwareSection() {
  return (
    <div className="p-10 bg-white">
      <h2 className="font-bold text-3xl mb-4">Hardware</h2>
      <p>Restez à jour avec les dernières innovations en matière de matériel, des processeurs aux dispositifs de stockage et aux systèmes embarqués.</p>
      <div className="grid grid-cols-3 gap-4">
        {renderHardwareSubsection('Processeurs', 'Découvrez les derniers processeurs et leurs performances.')}
        {renderHardwareSubsection('Stockage', 'Explorez les différentes options de stockage, des SSD aux disques durs traditionnels.')}
        {renderHardwareSubsection('Systèmes Embarqués', 'Apprenez-en plus sur les systèmes embarqués utilisés dans divers dispositifs électroniques.')}
      </div>
    </div>
  );
}

function renderHardwareSubsection(title, description) {
  return (
    <div className="bg-gray-100 p-4">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Ajoutez plus de contenu ici, comme des images, vidéos, liens, etc. */}
    </div>
  );
}

export default HardwareSection;

function CarrieresTechnosSection() {
    return (
      <div className="p-10 bg-gray-100">
        <h2 className="font-bold text-3xl mb-4">Carrières Technos</h2>
        <p>Découvrez les opportunités de carrière dans le domaine technologique, des conseils pour les entretiens aux tendances en matière d'emploi.</p>
        <div className="grid grid-cols-3 gap-4">
          {renderCareersSubsection('Conseils pour les Entretiens', 'Préparez-vous pour vos entretiens avec ces conseils et techniques.')}
          {renderCareersSubsection('Tendances en Matière d\'Emploi', 'Restez à jour avec les dernières tendances en matière d\'emploi dans le domaine technologique.')}
          {renderCareersSubsection('Opportunités de Carrière', 'Explorez les différentes carrières disponibles dans le domaine technologique et trouvez celle qui vous convient le mieux.')}
        </div>
      </div>
    );
  }
  
  function renderCareersSubsection(title, description) {
    return (
      <div className="bg-white p-4">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Ajoutez plus de contenu ici, comme des images, vidéos, liens, etc. */}
      </div>
    );
  }
  
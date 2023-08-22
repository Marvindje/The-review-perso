function CyberSecuriteSection() {
    return (
      <div className="p-10 bg-white">
        <h2 className="font-bold text-3xl mb-4">Cyber-sécurité</h2>
        <p>Informez-vous sur les dernières menaces et solutions en matière de cyber-sécurité, des vulnérabilités aux stratégies de défense.</p>
        <div className="grid grid-cols-3 gap-4">
          {renderCyberSecuritySubsection('Vulnérabilités', 'Apprenez comment les vulnérabilités sont exploitées et comment les prévenir.')}
          {renderCyberSecuritySubsection('Stratégies de Défense', 'Découvrez les meilleures pratiques pour protéger vos systèmes et données.')}
          {renderCyberSecuritySubsection('Menaces Récentes', 'Restez informé des dernières menaces et de la manière de les combattre.')}
        </div>
      </div>
    );
  }
  
  function renderCyberSecuritySubsection(title, description) {
    return (
      <div className="bg-gray-100 p-4">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Ajoutez plus de contenu ici, comme des images, vidéos, liens, etc. */}
      </div>
    );
  }
  
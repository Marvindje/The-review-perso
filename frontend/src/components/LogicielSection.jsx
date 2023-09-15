import React from "react";

function LogicielsSection() {
  const renderSoftwareSubsection = (title, description) => {
    return (
      <div className="bg-white p-4">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="font-bold text-3xl mb-4">Logiciels</h2>
      <p>
        Explorez les derniers logiciels et applications qui façonnent
        l'industrie, des systèmes d'exploitation aux outils de productivité.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {renderSoftwareSubsection(
          "Systèmes d'Exploitation",
          "Découvrez les dernières versions de Windows, macOS, Linux, et plus encore."
        )}
        {renderSoftwareSubsection(
          "Outils de Productivité",
          "Explorez les outils qui peuvent augmenter votre efficacité au travail ou à la maison."
        )}
        {renderSoftwareSubsection(
          "Logiciels de Conception",
          "Apprenez les bases des logiciels de conception comme Adobe Photoshop, Illustrator, et autres."
        )}
      </div>
    </div>
  );
}

export default LogicielsSection;

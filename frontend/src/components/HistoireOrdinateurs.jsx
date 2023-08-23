import React from 'react';
import { motion } from 'framer-motion';

function HistoryOfComputing() {
  return (
    <motion.div
      className="relative py-3 sm:max-w-2xl sm:mx-auto mt-10 w-full bg-white p-10 rounded-xl shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-bold text-3xl mb-4 text-indigo-600">L'Histoire de l'Informatique</h2>
      <p className="text-lg mb-6">L'informatique a une histoire riche et fascinante. Voici quelques jalons clés :</p>
      <div className="space-y-4">
        <Milestone
          year="Fin du 19e siècle"
          title="La machine analytique de Babbage"
          description="Charles Babbage conçoit la machine analytique, considérée comme le premier ordinateur programmable."
        />
        <Milestone
          year="1936"
          title="La machine de Turing"
          description="Alan Turing développe la machine de Turing, un modèle théorique pour les algorithmes et les calculs."
        />
        <Milestone
          year="1940s"
          title="Les premiers ordinateurs électroniques"
          description="ENIAC et UNIVAC sont parmi les premiers ordinateurs électroniques à grande échelle."
        />
        {/* Continuez à ajouter des jalons ici */}
      </div>
      <a href="/histoire" className="text-indigo-600 hover:underline mt-4 inline-block">En savoir plus sur l'histoire de l'informatique</a>
    </motion.div>
  );
}

function Milestone({ year, title, description }) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-indigo-500 rounded-full flex-shrink-0"></div>
      <div className="ml-4">
        <h3 className="font-semibold">{year}: {title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default HistoryOfComputing;

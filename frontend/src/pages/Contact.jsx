import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../assets/Contact-technology-futuristic.jpeg';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa'; // Import des icônes

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6">
      {/* Section de Contact */}
      <motion.div
        className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 flex flex-col items-start justify-center"
        style={{ backgroundImage: `url(${contactImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-semibold text-gray-700 mb-10 bg-blue-200 p-3 rounded-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contactez-nous
        </motion.h1>
        <form className="w-full">
          <div className="mb-4 flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" />
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-blue-500 mr-2" />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" />
          </div>
          <div className="mb-4 flex items-start">
            <FaPen className="text-blue-500 mr-2 mt-2" />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Votre message" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>

      {/* Section de Témoignages */}
      <motion.div
        className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 flex flex-col items-start justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-semibold text-gray-700 mb-10 bg-blue-200 p-3 rounded-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ce que disent nos lecteurs
        </motion.h1>
        <div className="flex flex-col space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 text-xl italic">
            "J'adore ce blog ! Les articles sont toujours informatifs et intéressants."
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 text-xl italic">
            "Un excellent endroit pour rester à jour avec les dernières tendances technologiques."
          </blockquote>
        </div>
      </motion.div>
    </div> 
  );
}

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function MonProfil() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6">
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
          Mon Profil
        </motion.h1>
        <form className="w-full">
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2" />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" id="name" type="text" placeholder="Votre nom" />
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2" />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" id="email" type="email" placeholder="Votre email" />
          </div>
          <div className="mb-4 flex items-center">
            <FaLock className="mr-2" />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" id="password" type="password" placeholder="Votre mot de passe" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Photo de profil
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photo" type="file" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Enregistrer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default MonProfil;

import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../assets/Contact-technology-futuristic.jpeg';


function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6">
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Votre message" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>
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
          À propos des créateurs
        </motion.h1>
        <p className="text-2xl text-white bg-black bg-opacity-75 p-5 tracking-wider leading-relaxed mb-6">
        Je suis un passionné de technologie, constamment à l'affût des nouveautés. Rester éveillé et à la page, c'est rester dans la tech. Je crois fermement que la technologie façonne notre avenir. Rejoignez-moi et ensemble, restons à la pointe de l'innovation !
</p>
      </motion.div>
    </div>
  );
}

export default Contact;

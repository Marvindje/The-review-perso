import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';
import galaxyBackground from '../assets/thepage.jpeg';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Ici, vous pouvez gérer l'envoi des données du formulaire
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6" style={{ backgroundImage: `url(${galaxyBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Section de Contact */}
      <motion.div
        className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8 flex flex-col items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur" // Ajout de l'effet de flou et suppression de l'image de fond
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
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex items-center">
            <FaUser className="text-blue-500 mr-2" />
            <input
              {...register('name', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Votre nom"
            />
            {errors.name && <p>Ce champ est requis</p>}
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-blue-500 mr-2" />
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Votre email"
            />
            {errors.email && <p>Email invalide</p>}
          </div>
          <div className="mb-4 flex items-start">
            <FaPen className="text-blue-500 mr-2 mt-2" />
            <textarea
              {...register('message', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Votre message"
            />
            {errors.message && <p>Ce champ est requis</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;

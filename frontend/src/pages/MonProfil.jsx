import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaUniversity } from 'react-icons/fa';

function MonProfil() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [logoVisible, setLogoVisible] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'file') {
      const file = event.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setProfilePhoto(imageURL);
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission, validation, and API calls

    // Set logoVisible to true after successful submission
    setLogoVisible(true);
  };

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
        <form className="w-full" onSubmit={handleSubmit}>
          {/* ... (other input fields) */}
          {/* Photo */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Photo de profil
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="file"
              name="photo"
              onChange={handleInputChange}
            />
          </div>
          {logoVisible && (
            <motion.div
              className="flex items-center justify-center w-full h-20 bg-gray-200 fixed top-0 left-0 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={profilePhoto} alt="Profile Logo" className="w-10 h-10 mr-2" />
              <span className="text-gray-700 font-semibold">Votre logo ici</span>
            </motion.div>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default MonProfil;

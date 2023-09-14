// Importation des bibliothèques et modules nécessaires
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import thepageBackground from "../assets/thepage.jpeg";

// Définition du composant MonProfil
function MonProfil() {
  // Initialisation des états pour le formulaire et la photo de profil
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    bio: localStorage.getItem("userBio") || "",
  });
  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("profilePhoto") || null
  );
  const [showAlert, setShowAlert] = useState(false); // État pour gérer l'affichage de l'alerte

  // Effet pour mettre à jour le stockage local lorsque la photo de profil ou la bio changent
  useEffect(() => {
    localStorage.setItem("profilePhoto", profilePhoto);
    localStorage.setItem("userBio", formData.bio);
  }, [profilePhoto, formData.bio]);

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      // Si l'utilisateur a choisi un fichier, lire ce fichier et mettre à jour l'état
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        setFormData((prevData) => ({ ...prevData, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      // Sinon, mettre à jour l'état avec la nouvelle valeur du champ
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Fonction pour sauvegarder les changements
  const handleSaveChanges = () => {
    setShowAlert(true); // Afficher l'alerte pour indiquer que les changements ont été sauvegardés
    setTimeout(() => setShowAlert(false), 3000); // Masquer l'alerte après 3 secondes
  };

  // Fonction pour supprimer le compte
  const handleDeleteAccount = () => {
    // Demander une confirmation à l'utilisateur
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (confirmation) {
      // Si confirmé, supprimer les données du stockage local et réinitialiser les états
      alert("Compte supprimé !");
      localStorage.removeItem("profilePhoto");
      localStorage.removeItem("userBio");
      setProfilePhoto(null);
      setFormData({ ...formData, bio: "" });
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${thepageBackground})` }}
    >
      {showAlert && (
        <div className="fixed top-0 right-0 p-2 text-white bg-green-500 rounded-bl-lg z-50">
          Saved changes !
        </div>
      )}
      <motion.div
        className="w-full mx-2 p-10 bg-opacity-50 backdrop-blur-md text-white border-4 border-indigo-600 rounded-3xl shadow-2xl transition-shadow hover:shadow-3xl duration-500 ease-in-out"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="w-3/4 mx-auto mb-6 p-5 text-4xl font-semibold text-white bg-opacity-50 backdrop-blur-md border border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>
        <div className="mb-4">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile Preview"
              className="w-48 h-48 mb-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          ) : (
            <div className="w-48 h-48 mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
              No photo
            </div>
          )}
          <label
            className="block mb-2 text-2xl font-bold"
            style={{ fontFamily: "Georgia, serif", color: "#FFFFFF" }}
          >
            Change Profile 
            <input
              className="hidden"
              id="photo"
              type="file"
              name="photo"
              onChange={handleInputChange}
            />
          </label>
          <button
            className="px-4 py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded focus:outline-none focus:shadow-outline hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out opacity-90 hover:opacity-100"
            onClick={() => document.getElementById("photo").click()}
          >
            Select file
          </button>
        </div>
        <div className="w-full mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none"
            placeholder="Écrivez quelque chose sur vous..."
            value={formData.bio}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            className="px-4 py-2 font-semibold text-blue-500 bg-transparent border border-blue-500 rounded focus:outline-none hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
          <button
            className="px-4 py-2 font-semibold text-gray-500 bg-transparent border border-gray-500 rounded focus:outline-none hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 font-semibold text-purple-500 bg-transparent border border-purple-500 rounded focus:outline-none hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleDeleteAccount}
          >
            Delete Account 
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default MonProfil;

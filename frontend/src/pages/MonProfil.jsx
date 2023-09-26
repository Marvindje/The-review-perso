import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import thepageBackground from "../assets/thepage.jpeg";

function MonProfil() {
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
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("profilePhoto", profilePhoto);
    localStorage.setItem("userBio", formData.bio);
  }, [profilePhoto, formData.bio]);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        setFormData((prevData) => ({ ...prevData, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSaveChanges = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleDeleteAccount = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // Code to delete the account
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        className="container mx-auto p-10 bg-opacity-50 backdrop-blur-md text-white border-4 border-indigo-600 rounded-3xl shadow-2xl transition-shadow hover:shadow-3xl duration-500 ease-in-out"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-center mb-6 p-5 text-4xl font-semibold text-white bg-opacity-50 backdrop-blur-md border border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
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
            <div
              className="hover:bg-gray-700 rounded p-2 cursor-pointer transition duration-300 ease-in-out"
            >
              <label
                htmlFor="photo"
                className="text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif", color: "#FFFFFF" }}
              >
                Change Profile
              </label>
              <input
                className="hidden"
                id="photo"
                type="file"
                name="photo"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="submit-button w-1/5"
            >
              <div className="button-top">Select</div>
              <div className="button-bottom"></div>
              <div className="button-base"></div>
            </button>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              className="w-full mt-4 p-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Write something about yourself..."
              value={formData.bio}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex mt-6 justify-center space-x-4">
          {/* Your buttons here */}
        </div>
      </motion.div>
      {/* Your Modal here */}
    </div>
  );
}

export default MonProfil;

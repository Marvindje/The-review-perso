import React from "react";
import { motion } from "framer-motion";
import image from "../assets/heroes.png";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "20px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  };

  const cardVariants = {
    hover: {
      scale: 1.05, 
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", 
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 py-6 flex flex-col justify-center sm:py-12"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          style={cardStyle}
          variants={cardVariants}
          whileHover="hover" 
          initial={{ rotate: 0 }}
          
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold text-white">
              Bienvenue dans notre Tech Blog !
            </h1>
            <p className="mt-4 text-white">
              Reste informé des dernières nouveautés technologiques
            </p>
            <motion.div
              className="mt-8 flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="/blog"
                className="px-5 py-3 shadow-lg rounded-lg text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex items-center"
              >
                lire des articles <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

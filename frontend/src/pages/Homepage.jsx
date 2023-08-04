// HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import image from "../assets/IA-intelligence-artificielle.jpeg";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "20px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    width: "100%",
    padding: "16rem", 
  };

  const cardVariants = {
    hover: {
      scale: 1.05, 
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", 
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const welcomeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6 flex flex-col justify-center sm:py-12"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl font-semibold text-white glow-text"
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
        >
          Bienvenue !
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-white glow-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Reste informé des dernières actualités technologiques
        </motion.p>
      </div>
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
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto">
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

export default HomePage;

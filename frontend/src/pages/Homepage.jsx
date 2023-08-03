import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/the-review-high-resolution-color-logo.png";
import image from "../assets/heroes.png";

export default function Home() {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 py-6 flex flex-col justify-center sm:py-12"
      initial={{ x: '-100vw' }} // commence à gauche de l'écran
      animate={{ x: 0 }} 
      transition={{ duration: 1 }} 
    >
      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20" style={cardStyle}>
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold text-white">
              Bienvenue dans notre Tech Blog !
            </h1>
            <p className="mt-4 text-white">
              Reste informé des dernières nouveautés technologiques 
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
            >
              <a
                href="/blog"
                className="px-5 py-3 shadow-lg rounded-lg text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              >
                lire des articles
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import image from "../assets/IA-intelligence-artificielle.jpeg";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  const [scope, animate] = useAnimate();
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

  useEffect(() => {
    animate(scope.current, { opacity: 1, transition: { duration: 1 } });
  }, [animate, scope]);

  return (
    <motion.div
      ref={scope}
      className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6 flex flex-col justify-center sm:py-12"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border border-gray-300 p-12 mt-8 flex flex-col items-start justify-center transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent"

        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-3xl text-gray-700 mb-4">Bienvenue !</h1>
        <p className="text-lg text-gray-500 mb-6">Reste informé des dernières actualités technologiques</p>
        <a
          href="/blog"
          className="self-stretch mt-16 px-5 py-3 shadow-lg rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500-opacity-50 to-indigo-500-opacity-50 hover:from-purple-500-opacity-50 hover:to-indigo-600-opacity-50 transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl active:scale-90 flex items-center"



        >
          Lire des articles <FaArrowRight className="ml-2" />
        </a>
      </motion.div>
      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto mt-10 w-full" // Added mt-10 for margin and w-full for full width
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl rounded-3xl p-10 mx-2 w-full transition-shadow duration-500 ease-in-out hover:shadow-3xl"
          style={cardStyle}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
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
  href="/mesposts"
  className="inline-block px-5 py-3 shadow-lg rounded-lg text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transform hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out flex items-center"
>
  <div className="p-3">
    Tes Posts <FaArrowRight className="ml-2" />
  </div>
</a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;

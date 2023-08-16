import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import heroImage from '../assets/IA-intelligence-artificielle.jpeg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom"
import galaxyBackground from '../assets/thepage.jpeg';


function HomePage() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: 1, transition: { duration: 1 } });
  }, [animate, scope]);

  return (
    <motion.div
        ref={scope}
        className="bg-center bg-no-repeat bg-cover flex flex-col justify-center w-full "

        style={{ backgroundImage: `url(${galaxyBackground})` }}
        initial={{ x: "-100vw" }} 
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
    >
        <motion.div
            className="w-full max-w-full mx-auto p-12 flex flex-col items-start justify-end transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent" // Removed mt-8
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.6)",
            }}
        >
            <h1 className="font-bold text-4xl text-white mb-4">Bienvenue !</h1>
            <p className="text-lg text-white mb-6 opacity-80">Dernières actualités tech</p>
            <a
                href="/blog"
                className="self-stretch mt-16 px-5 py-3 shadow-lg rounded-lg text-white bg-gradient-to-r from-blue-500-opacity-50 to-indigo-500-opacity-150 transform transition-transform duration-500 ease-in-out hover:shadow-2xl active:scale-90 flex items-center opacity-90"
                style={{ 
                    fontSize: '1.5rem',
                    borderRadius: '15px',
                    border: '2px solid rgba(43, 108, 176, 0.6)',
                    boxShadow: '0 0 15px 2px rgba(43, 108, 176, 0.4)',
                    transition: 'all 0.5s ease'
                }}
                whileHover={{
                    scale: 1.05, 
                    rotate: [0, 5, -5, 5, -5, 0],
                    boxShadow: "0 0 20px 5px rgba(43, 108, 176, 0.8)",
                    border: '2px solid rgba(43, 108, 176, 1)'
                }}
            >
                Lire des articles <FaArrowRight className="ml-2" />
            </a>
        </motion.div>



      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto mt-10 w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl rounded-3xl p-10 mx-2 w-full transition-shadow duration-500 ease-in-out hover:shadow-3xl"
          style={{ backgroundImage: `url(${heroImage})` }}
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
          <Link
    to="/mes-posts"
    className="inline-flex items-center px-6 py-4 shadow-lg rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2"
>
    Mes posts 
    <FaArrowRight className="ml-3 text-2xl" />
</Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
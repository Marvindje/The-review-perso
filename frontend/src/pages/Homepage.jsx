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
   className="min-h-screen bg-center bg-no-repeat bg-cover py-6 flex flex-col justify-center sm:py-12"
   style={{ backgroundImage: `url(${galaxyBackground})` }}
   initial={{ x: "-100vw" }} 
   animate={{ x: 0 }}
   transition={{ duration: 1 }}
>


      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${heroImage})` }}></div>

      <motion.div
    className="w-full max-w-6xl mx-auto bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 border border-gray-300 p-12 mt-8 flex flex-col items-start justify-center transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent opacity-70"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
>
    <h1 className="font-bold text-4xl text-white mb-4">Bienvenue !</h1>
    <p className="text-lg text-white mb-6 opacity-80">Reste informé des dernières actualités technologiques</p>
    <a
  href="/blog"
  className="self-stretch mt-16 px-5 py-3 shadow-lg rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500-opacity-50 to-indigo-500-opacity-150 transform transition-transform duration-500 ease-in-out hover:shadow-2xl active:scale-90 flex items-center animate-pulse"
  whileHover={{ scale: 1.05, rotate: [0, 5, -5, 5, -5, 0] }}
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
    className="inline-block px-5 py-3 shadow-lg rounded-lg text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transform hover:scale-110 hover:-rotate-3 transition-all duration-500 ease-in-out flex items-center"
>
    Mes posts <FaArrowRight className="ml-2" />
</Link> 
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;

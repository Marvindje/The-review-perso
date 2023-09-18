import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import heroImage from "../assets/IA-intelligence-artificielle.jpeg";
import galaxyBackground from "../assets/thepage.jpeg";

function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1 } });
  }, [controls]);

  return (
    <motion.div
      className="bg-center bg-no-repeat bg-cover flex flex-col justify-center w-full"
      style={{ backgroundImage: `url(${galaxyBackground})` }}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-full mx-auto p-12 flex flex-col items-center justify-end transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whilehover={{
          boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.6)",
        }}
      >
        <h1
          className="text-4xl text-white font-mono text-center py-2 px-4 rounded hover:text-blue-500 transition-colors duration-200 "
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de",
          }}
        >
          Welcome to our Tech Blog!
        </h1>

        <p className="text-lg text-white mb-16 opacity-100">
          Find out the latest news regarding technology.
        </p>
        <a
          href="/blog"
          className="self-stretch mt-16 px-5 py-3 shadow-lg rounded-lg text-white bg-gradient-to-r from-blue-500-opacity-50 to-indigo-500-opacity-150 transform transition-transform duration-500 ease-in-out hover:shadow-2xl active:scale-90 flex items-center opacity-90"
          style={{
            fontSize: "1.5rem",
            borderRadius: "15px",
            border: "2px solid rgba(43, 108, 176, 0.6)",
            boxShadow: "0 0 15px 2px rgba(43, 108, 176, 0.4)",
            transition: "all 0.5s ease",
          }}
          whilehover={{
            scale: 1.05,
            rotate: [0, 5, -5, 5, -5, 0],
            boxShadow: "0 0 20px 5px rgba(43, 108, 176, 0.8)",
            border: "2px solid rgba(43, 108, 176, 1)",
          }}
        >
          Start Reading <FaArrowRight className="ml-2" />
        </a>
      </motion.div>

      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto mt-10 w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-transparent border-4 border-indigo-600 shadow-2xl rounded-3xl p-10 mx-2 w-full transition-shadow duration-500 ease-in-out hover:shadow-3xl backdrop-blur-md"
          whilehover={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
         <div className="mx-auto text-center">
      <h2 className="font-bold text-3xl text-white mb-6">
        Feel like Sharing ?
      </h2>
      <p className="text-lg text-white mb-6 opacity-80">
        Join our community and start sharing posts !
      </p>
      <motion.div whilehover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          to="/creer-post"
          className="inline-flex items-center px-6 py-4 shadow-lg rounded-lg font-semibold text-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-2"
        >
          Create posts
          <FaArrowRight className="ml-3 text-2xl" />
        </Link>
      </motion.div>
      <p className="text-lg text-white mt-6 opacity-80">
        Explore posts by categories and find what interests you the most!
      </p>
    </div>
    <Categories /> {/* Nouveau composant ajouté */}
  </motion.div>
</motion.div>







      <motion.div
        className="relative py-3 sm:max-w-xl sm:mx-auto mt-10 mb-20 w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-transparent border-4 border-indigo-600 shadow-2xl rounded-3xl p-10 mx-2 w-full transition-shadow duration-500 ease-in-out hover:shadow-3xl backdrop-blur-md"
          whilehover={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto text-center">
            <h2 className="font-bold text-3xl text-white mb-4">
              About The Review
            </h2>
            <p className="text-lg text-white mb-6 opacity-80">
              Our blog is dedicated to technology and innovation. We explore the
              latest trends, discoveries, and ideas that shape the future of the
              tech industry. Whether you're a seasoned professional or a curious
              beginner, our content is designed to inspire and inform you. We
              cover a range of topics, including web development, artificial
              intelligence, hardware, software, cybersecurity, and much more.
              Join our community and explore the exciting world of technology
              with us !
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;

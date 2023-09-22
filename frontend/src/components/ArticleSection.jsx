import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

function ArticleSection({ title, image }) {
  const articleVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="font-body custom-background"
      style={{ background: "#e0e0e0" }}
    >
      <motion.div
        className="relative h-auto md:h-96 flex items-center justify-center bg-no-repeat bg-center bg-cover shadow-2xl"
        style={{ backgroundImage: `url(${image})` }}
        initial="rest"
        whileHover="hover" // Corrigé "whilehover" en "whileHover"
      >
        <h1
          className="text-4xl text-white font-mono text-center py-2 px-4 rounded hover:text-blue-500 transition-colors duration-200"
          style={{
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de",
          }}
        >
          {title}
        </h1>
      </motion.div>

      <div className="flex justify-center items-center py-4 px-8">
        <div className="grid grid-cols-4 gap-8 mt-2">
          {[...Array(16)].map(
            (
              _,
              i // Remplacé "i" par "_"
            ) => (
              <motion.div
                key={`article-${i}`}
                className="neomorph-card"
                variants={articleVariants}
                initial="hidden"
                animate="visible"
                onClick={() => console.info(`Article ${i + 1} clicked`)}
              >
                <h3 className="text-2xl font-header mb-2">Article {i + 1}</h3>
                <p className="text-black text-sm">
                  Description de l&apos;article... {/* Échappé l'apostrophe */}
                </p>
                <Link
                  to={`/article${i + 1}`}
                  className="text-black text-sm mt-4 block hover:text-black"
                >
                  Lire l&apos;article {/* Échappé l'apostrophe */}
                </Link>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

ArticleSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleSection;

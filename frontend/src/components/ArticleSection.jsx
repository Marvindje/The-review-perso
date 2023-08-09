// ArticleSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticleSection = ({ title, image }) => {
  const articleVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-body">
      <motion.div className="relative h-auto md:h-96 flex items-center justify-center bg-no-repeat bg-center bg-cover shadow-2xl" 
        style={{ backgroundImage: `url(${image})` }}
        variants={heroVariants}
        initial="rest"
        whileHover="hover"
      >
        
<h1 className="text-4xl text-white font-mono text-center py-2 px-4 rounded hover:text-blue-500 transition-colors duration-200 " style={{ textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de' }}>          {title}
        </h1>
      </motion.div>

      <div className="flex justify-center items-center mt-64 mb-20">
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden shadow-lg p-6 hover:bg-blue-500 hover:text-white transition-colors duration-200"
              variants={articleVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-header mb-2">article {i+1}</h3>
              <p className="text-white text-sm">Description de l'article...</p>
              <Link to={`/article${i+1}`} className="text-white text-sm mt-4 block hover:text-white">Lire l'article</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;

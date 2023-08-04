import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DesktopComputerIcon, ChipIcon, DatabaseIcon, ShieldCheckIcon, CodeIcon, UserGroupIcon } from '@heroicons/react/outline';
import '../App.css';

const Sidebar = ({ isOpen, onClose }) => {
  const x = useMotionValue(isOpen ? 0 : -100);
  const opacity = useTransform(x, [-100, 0], [0, 1]);

  const categories = [
    { name: "Développement Web", path: "/categorie/developpement-web", icon: <DesktopComputerIcon className="h-5 w-5 glow" /> },
    { name: "Intelligence Artificielle", path: "/categorie/intelligence-artificielle", icon: <ChipIcon className="h-5 w-5 glow" /> },
    { name: "Hardware", path: "/categorie/hardware", icon: <DatabaseIcon className="h-5 w-5 glow" /> },
    { name: "Logiciels", path: "/categorie/logiciels", icon: <ShieldCheckIcon className="h-5 w-5 glow" /> },
    { name: "CyberSécurité", path: "/categorie/cybersecurite", icon: <CodeIcon className="h-5 w-5 glow" /> },
    { name: "Carrières Technos", path: "/categorie/carrieres-technos", icon: <UserGroupIcon className="h-5 w-5 glow" /> }
  ];

  return (
    <motion.div
      className={`fixed top-0 left-0 h-screen w-64 bg-white p-5 box-border transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}
      style={{ opacity: opacity }}
      animate={{ x: isOpen ? 0 : -100 }}
    >
      <button onClick={onClose} className="fixed left-0 bg-white p-2 z-20">
        Close
      </button>
      <ul>
        {categories.map((category, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-2"
          >
            <Link to={category.path} className="flex items-center space-x-2 text-black">
              {category.icon} {/* display the icon */}
              <span>{category.name}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;

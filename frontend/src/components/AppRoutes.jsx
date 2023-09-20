import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import CreerArticles from "../pages/CreerPosts";
import MonProfil from "../pages/MonProfil";
import MesPosts from "../pages/MesPosts";
import DeveloppementWeb from "../pages/DeveloppementWeb";
import IntelligenceArtificielle from "../pages/IntelligenceArtificielle";
import Hardware from "../pages/Hardware";
import Login from "../pages/Login";
import Logiciels from "../pages/Logiciels";
import CyberSecurite from "../pages/CyberSecurite";
import CarrieresTechnos from "../pages/CarrieresTechnos";

function AppRoutes() {
  const [cookies, setCookie] = useCookies(["token"]);
  console.log({ cookies });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleAuthSuccess = async () => {
    setShowSpinner(true);
  };

  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 3000);
    }
  }, [showSpinner]);

  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );

  // Vous pouvez utiliser isAuthenticated et onAuthSuccess ici si nécessaire
  return !isAuthenticated ? (
    <Routes>
      <Route path="/" element={<Login onAuthSuccess={handleAuthSuccess} />} />
      <Route path="/*" element={<>404</>} />
    </Routes>
  ) : (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mon-profil" element={<MonProfil />} />
        <Route path="/creer-post" element={<CreerArticles />} />
        <Route path="/mes-posts" element={<MesPosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/categorie/developpement-web"
          element={<DeveloppementWeb />}
        />
        <Route
          path="/categorie/intelligence-artificielle"
          element={<IntelligenceArtificielle />}
        />
        <Route path="/categorie/hardware" element={<Hardware />} />
        <Route path="/categorie/logiciels" element={<Logiciels />} />
        <Route path="/categorie/cybersecurite" element={<CyberSecurite />} />
        <Route
          path="/categorie/carrieres-technos"
          element={<CarrieresTechnos />}
        />
        <Route path="/*" element={<>404</>} />
      </Routes>
      <Footer />
    </>
  );
}

AppRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onAuthSuccess: PropTypes.func.isRequired,
};

export default AppRoutes;

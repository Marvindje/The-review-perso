import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import CreerArticles from "../pages/CreerPosts";
import MonProfil from "../pages/MonProfil";
import MesPosts from "../pages/MesPosts";
import DeveloppementWeb from "../pages/DeveloppementWeb";
import IntelligenceArtificielle from "../pages/IntelligenceArtificielle";
import Hardware from "../pages/Hardware";
import Logiciels from "../pages/Logiciels";
import CyberSecurite from "../pages/CyberSecurite";
import CarrieresTechnos from "../pages/CarrieresTechnos";
import Auth from "../components/Auth";  // Import du composant Auth depuis le dossier components

const AppRoutes = ({ isAuthenticated, onAuthSuccess }) => {
  return (
    <Routes>
      <Route path="/auth" element={isAuthenticated ? <Navigate to="/" /> : <Auth onAuthSuccess={onAuthSuccess} />} />
      <Route path="/" element={isAuthenticated ? <Homepage /> : <Navigate to="/auth" />} />
      <Route path="/creer-article" element={isAuthenticated ? <CreerArticles /> : <Navigate to="/auth" />} />
      <Route path="/mon-profil" element={isAuthenticated ? <MonProfil /> : <Navigate to="/auth" />} />
      <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/auth" />} />
      <Route path="/mes-posts" element={isAuthenticated ? <MesPosts /> : <Navigate to="/auth" />} />
      <Route path="/categorie/developpement-web" element={isAuthenticated ? <DeveloppementWeb /> : <Navigate to="/auth" />} />
      <Route path="/categorie/intelligence-artificielle" element={isAuthenticated ? <IntelligenceArtificielle /> : <Navigate to="/auth" />} />
      <Route path="/categorie/hardware" element={isAuthenticated ? <Hardware /> : <Navigate to="/auth" />} />
      <Route path="/categorie/logiciels" element={isAuthenticated ? <Logiciels /> : <Navigate to="/auth" />} />
      <Route path="/categorie/cybersecurite" element={isAuthenticated ? <CyberSecurite /> : <Navigate to="/auth" />} />
      <Route path="/categorie/carrieres-technos" element={isAuthenticated ? <CarrieresTechnos /> : <Navigate to="/auth" />} />
    </Routes>
  );
};

export default AppRoutes;

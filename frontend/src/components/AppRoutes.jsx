import React from "react";
import { Routes, Route } from "react-router-dom";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/creer-article" element={<CreerArticles />} />
      <Route path="/mon-profil" element={<MonProfil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profil" element={<MonProfil />} />
      <Route path="/mes-posts" element={<MesPosts />} />
      <Route path="/creer-post" element={<CreerArticles />} />
      <Route path="/categorie/developpement-web" element={<DeveloppementWeb />} />
      <Route path="/categorie/intelligence-artificielle" element={<IntelligenceArtificielle />} />
      <Route path="/categorie/hardware" element={<Hardware />} />
      <Route path="/categorie/logiciels" element={<Logiciels />} />
      <Route path="/categorie/cybersecurite" element={<CyberSecurite />} />
      <Route path="/categorie/carrieres-technos" element={<CarrieresTechnos />} />
    </Routes>
  )
};


export default AppRoutes;

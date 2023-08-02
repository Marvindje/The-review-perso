import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Accueil from "./pages/Accueil";
import Categories from "./pages/Categories";
import CreerArticles from "./pages/CreerArticles";
import MonProfil from "./pages/MonProfil";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/creer-un-article" element={<CreerArticles />} />
      <Route path="/mon-profil" element={<MonProfil />} />
    </Routes>
  )
};

export default AppRoutes;

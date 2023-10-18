import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import CreerArticles from "../pages/CreerPosts";
import MonProfil from "../pages/MonProfil";
import MesPosts from "../pages/MesPosts";
import Login from "../pages/Login";
import PostPage from "../pages/Post";
import ArticleSection from "../components/ArticleSection"

// Composant principal pour gérer les routes de l'application
function AppRoutes() {
  // Utilise le contexte utilisateur pour vérifier si l'utilisateur est connecté
  const { isLoged } = useUserContext();

  // État pour afficher ou masquer le spinner de chargement
  const [showSpinner, setShowSpinner] = useState(false);
  // État pour vérifier si un délai spécifique est terminé
  const [delayCompleted, setDelayCompleted] = useState(false)

  // Fonction appelée lorsque l'authentification réussit
  const handleAuthSuccess = async () => {
    // Affiche le spinner
    setShowSpinner(true);
  };

  // Effet pour masquer le spinner après 3 secondes
  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 3000);
    }
  }, [showSpinner]);

  // Effet pour gérer un délai initial
  useEffect(() => {
    ;(async () => {
        // Affiche le spinner
        setShowSpinner(true)
        // Attend 200 ms
        await new Promise(resolve => setTimeout(resolve, 200));
        // Met à jour l'état pour indiquer que le délai est terminé
        setDelayCompleted(true)
        // Masque le spinner
        setShowSpinner(false)
    })();
  }, [])

  // Rendu conditionnel du spinner
  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );

  // Si le délai n'est pas terminé, affiche le spinner
  if(!delayCompleted) {
    return <>{renderSpinner}</>
  }

  // Rendu des routes en fonction de l'état de connexion de l'utilisateur
  return !isLoged ? (
    <Routes>
     
      <Route path="/" element={<Login onAuthSuccess={handleAuthSuccess} />} />
     
      <Route path="/*" element={<>404</>} />
    </Routes>
  ) : (
    <>
      {renderSpinner}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mon-profil" element={<MonProfil />} />
        <Route path="/creer-post" element={<CreerArticles />} />
        <Route path="/mes-posts" element={<MesPosts />} />
        <Route path="/mes-posts/:postId" element={<PostPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories/:categoryId" element={<ArticleSection />} />
        <Route path="/*" element={<>404</>} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;

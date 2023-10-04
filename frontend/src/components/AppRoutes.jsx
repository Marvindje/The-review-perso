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

function AppRoutes() {
  const { isLoged } = useUserContext();

  const [showSpinner, setShowSpinner] = useState(false);
  const [delayCompleted, setDelayCompleted] = useState(false)

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

  useEffect(() => {
    ;(async () => {
        setShowSpinner(true)
        await new Promise(resolve => setTimeout(resolve, 200));
        setDelayCompleted(true)
        setShowSpinner(false)
    })();
}, [])

  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );

  if(!delayCompleted) {
    return <>{renderSpinner}</>
  }

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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleAuthSuccess = () => {
    setShowSpinner(true);
  };

  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
        setIsAuthenticated(true);
      }, 3000);
    }
  }, [showSpinner]);

  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />} {/* Affiché seulement si l'utilisateur est authentifié */}
        {renderSpinner}
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isAuthenticated ? <Login onAuthSuccess={handleAuthSuccess} /> : <Navigate to="/" />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        {isAuthenticated && <Footer />} {/* Affiché seulement si l'utilisateur est authentifié */}
      </div>
    </Router>
  );
};

export default App;

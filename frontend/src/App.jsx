import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import AppRoutes from "./components/AppRoutes"; 
import Footer from "./components/Footer";
import Navbar from "./components/NavBar"; 
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleAuthSuccess = () => {
    setShowSpinner(true);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 3000); // Affiche le spinner pendant 3 secondes
    }
  }, [showSpinner]);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            {showSpinner ? (
              <div className="spinner">
                <div className="spinner1"></div>
              </div>
            ) : (
              <>
                <Navbar /> 
                <AppRoutes />
                <Footer />
              </>
            )}
          </>
        ) : (
          <Login onAuthSuccess={handleAuthSuccess} />
        )}
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
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
      }, 3000);
    }
  }, [showSpinner]);

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
     
          <Route path="/login" element={!isAuthenticated ? <Login onAuthSuccess={handleAuthSuccess} /> : <Navigate to="/" />} />
        </Routes>
        {isAuthenticated && <AppRoutes />}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;

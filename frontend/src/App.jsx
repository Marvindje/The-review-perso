import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import "./App.css";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  // State variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  // Handle successful authentication
  const handleAuthSuccess = () => {
    setShowSpinner(true);
  };

  // Effect to manage spinner and authentication state
  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
        setIsAuthenticated(true);
      }, 3000);
    }
  }, [showSpinner]);

  // Render spinner if needed
  const renderSpinner = showSpinner && (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  );

  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <AppRoutes />
          {renderSpinner}
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;

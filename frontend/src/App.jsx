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
    <Router>
      <div className="App">
        {/* Render Navbar if authenticated */}
        {isAuthenticated && <Navbar />}

        {/* Render spinner */}
        {renderSpinner}

        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route
            path="/homepage"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onAuthSuccess={handleAuthSuccess} />
              ) : (
                <Navigate to="/homepage" />
              )
            }
          />
         <Route path="/*" element={<AppRoutes isAuthenticated={isAuthenticated} onAuthSuccess={handleAuthSuccess} />} />

        </Routes>

        {/* Render Footer if authenticated */}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;

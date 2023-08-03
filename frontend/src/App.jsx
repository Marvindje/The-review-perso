import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

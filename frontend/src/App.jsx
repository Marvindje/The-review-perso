import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes"; 
import Footer from "./components/Footer";
import Navbar from "./components/NavBar"; 
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

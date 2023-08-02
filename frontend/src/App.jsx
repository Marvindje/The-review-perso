import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Navbar from "./components/NavBar";
import Accueil from "./pages/Accueil";
import Categories from "./pages/Categories";
import CreerArticles from "./pages/CreerArticles";
import MonProfil from "./pages/MonProfil";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/creer-un-article" element={<CreerArticles />} />
          <Route path="/mon-profil" element={<MonProfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/NavBar";
import Accueil from "./pages/Accueil";
import Categories from "./pages/Categories";
import CreerArticles from "./pages/CreerArticles";
import MonProfil from "./pages/MonProfil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/creer-un-article" element={<CreerArticles />} />
        <Route path="/mon-profil" element={<MonProfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

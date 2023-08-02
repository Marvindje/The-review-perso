import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Routes from "./components/Routes"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

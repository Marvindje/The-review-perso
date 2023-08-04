import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes"; 
import Sidebar from "./components/Sidebar"; 
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar onLogoClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </Router>
  );
}

export default App;

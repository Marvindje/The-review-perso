import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;

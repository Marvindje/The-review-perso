import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRoutes from "./components/AppRoutes"; 
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

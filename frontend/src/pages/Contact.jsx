import React from "react";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar"; // Import du composant Navbar
import Footer from "../components/Footer"; // Import du composant Footer

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Utilisation du composant Navbar */}
      <div className="flex-grow">
        <InputField />
      </div>
      <Footer /> {/* Utilisation du composant Footer */}
    </div>
  );
}

export default Contact;

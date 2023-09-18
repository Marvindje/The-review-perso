import React from "react";
import PropTypes from "prop-types";
import Auth from "../components/Auth";

function Login({ onAuthSuccess }) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-transparent shadow-md transition-all duration-500 ease-in-out hover:shadow-lg max-w-full h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-4">Connexion</h1>
        <Auth onAuthSuccess={onAuthSuccess} isLogin />
      </div>
    </div>
  );
}

Login.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
};

export default Login;

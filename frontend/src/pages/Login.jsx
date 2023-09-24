import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Auth from "../components/Auth";
import "../App.css"; // Importez vos styles depuis App.css

function Login({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthType = () => {
    setIsLogin(!isLogin);
  };

  const springProps = useSpring({
    opacity: isLogin ? 1 : 1,
    transform: isLogin ? "scale(1)" : "scale(0.95)",
  });

  return (
    <div className="login-container">
      <animated.div style={springProps} className="login-box">
        {isLogin ? (
          <h1 className="login-title">Connexion</h1>
        ) : (
          <h1 className="login-title">Create Account</h1>
        )}
        <Auth onAuthSuccess={onAuthSuccess} isLogin={isLogin} toggleAuthType={toggleAuthType} />
      </animated.div>
    </div>
  );
}

export default Login;

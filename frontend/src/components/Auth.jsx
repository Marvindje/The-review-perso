import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { baseUrl } from "../config/url";
import { useUserContext } from "../context/userContext";


function Auth({ onAuthSuccess, isLogin, toggleAuthType }) { // Ajouté toggleAuthType
  const { onChangeUser } = useUserContext();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [authType, setAuthType] = useState(!!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Les identifiants sont incomplets.");
      return;
    }

    const endpoint = authType ? "/auth/login" : "/auth/register";
    const payload = {
      email,
      password,
    };

    if (!authType) {
      payload.birthdate = birthDate;
      payload.username = username;
    }

    try {
      const response = await axios.post(
        `${baseUrl}${endpoint}`,
        payload,
        {
          withCredentials: true,
        }
      );

      onChangeUser(response.data);

      if (response.status === 200) {
        localStorage.setItem("loggedInUsername", username);
        onAuthSuccess();
      }
    } catch (error) {
      setErrorMessage("Les identifiants sont incorrects.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {!authType && (
        <div className="wave-group">
          <label htmlFor="username" className="label">
            <span className="label-char">UserName</span>
          </label>
          <input
            id="username"
            name="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span className="bar"></span>
        </div>
      )}
      <div className="wave-group">
        <label htmlFor="email" className="label">
          <span className="label-char">Email</span>
        </label>
        <input
          id="email"
          name="email"
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="bar"></span>
      </div>
      <div className="wave-group">
        <label htmlFor="password" className="label">
          <span className="label-char">Password</span>
        </label>
        <input
          id="password"
          name="password"
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="bar"></span>
      </div>
      {!authType && (
        <div className="wave-group">
          <label htmlFor="birthDate" className="label">
            <span className="label-char">Date de naissance</span>
          </label>
          <input
            id="birthDate"
            name="birthDate"
            className="input"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <span className="bar"></span>
        </div>
      )}
      <button
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        type="submit"
      >
        {authType ? "Login" : "Create Account"}
      </button>
      <button type="button" onClick={() => {
        setAuthType(!authType);
        toggleAuthType();
      }}>
        {authType ? "Create Account" : "Login"}
      </button>
    </form>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  toggleAuthType: PropTypes.func.isRequired,
};

export default Auth;
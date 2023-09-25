import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
        `http://localhost:5000${endpoint}`,
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
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600"
        >
          UserName
          <input
            id="username"
            name="username"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      )}
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-600"
      >
        Email
        <input
          id="email"
          name="email"
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-600"
      >
        Password
        <input
          id="password"
          name="password"
          className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!authType && (
        <label
          htmlFor="Date de naissance"
          className="block text-sm font-medium text-gray-600"
        >
          Date de naissance
          <input
            id="birthDate"
            name="Date de naissance"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </label>
      )}
      <button
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        type="submit"
      >
        {authType ? "Login" : "Create Account"}
      </button>
      <button type="button" onClick={() => {
        setAuthType(!authType);
        toggleAuthType(); // Ajouté cette ligne
      }}>
        {authType ? "Create Account" : "Login"}
      </button>
    </form>
  );
}

Auth.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  toggleAuthType: PropTypes.func.isRequired, // Ajouté cette ligne
};

export default Auth;

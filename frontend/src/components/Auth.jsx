import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth', { username, password });
      if (response.status === 200) {
        onAuthSuccess();
      }
    } catch (error) {
      console.error('Erreur d\'authentification:', error);
      setErrorMessage('Les identifiants sont incorrects.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Nom d'utilisateur</label>
        <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
        <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200" type="submit">Se connecter</button>
    </form>
  );
};

export default Auth;

import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);  // Nouvelle variable d'état

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage('Les identifiants sont incomplets.');
      return;
    }

    const endpoint = isLogin ? '/auth/login' : '/auth/register';  // Choix de l'endpoint

    try {
      console.log("Données envoyées:", { username, email, password });
      const response = await axios.post(`http://localhost:5000${endpoint}`, { username, email, password });
      console.log("Statut de la réponse:", response.status);

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
        <textarea className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50" value={username} onChange={(e) => setUsername(e.target.value)}></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
        <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-opacity-50" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200" type="submit">
        {isLogin ? 'Se connecter' : 'S\'inscrire'}
      </button>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Passer à l\'inscription' : 'Passer à la connexion'}
      </button>
    </form>
  );
};

export default Auth;

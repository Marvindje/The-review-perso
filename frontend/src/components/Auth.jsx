// Importation des bibliothèques et modules nécessaires
import React, { useState } from 'react';
import axios from 'axios';

// Définition du composant Auth
const Auth = ({ onAuthSuccess }) => {
  // Initialisation des états pour le formulaire d'authentification
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);  // État pour gérer le mode (connexion ou inscription)

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();  // Empêcher le comportement par défaut du formulaire

    // Vérification des champs du formulaire
    if (!username || !email || !password) {
      setErrorMessage('Les identifiants sont incomplets.');  // Afficher un message d'erreur si les champs sont incomplets
      return;
    }

    // Choix de l'endpoint en fonction du mode (connexion ou inscription)
    const endpoint = isLogin ? '/auth/login' : '/auth/register';

    try {
      // Envoi de la requête au serveur
      console.log("Données envoyées:", { username, email, password });
      const response = await axios.post(`http://localhost:5000${endpoint}`, { username, email, password });
      console.log("Statut de la réponse:", response.status);

      // Vérification du statut de la réponse
      if (response.status === 200) {
        // Si la réponse est OK, stocker le nom d'utilisateur dans le stockage local et appeler la fonction onAuthSuccess
        localStorage.setItem('loggedInUsername', username);
        onAuthSuccess();
      }
      
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur d\'authentification:', error);
      setErrorMessage('Les identifiants sont incorrects.');  // Afficher un message d'erreur si l'authentification échoue
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

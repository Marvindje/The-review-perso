// Remplacé console.log par console.info pour résoudre l'erreur ESLint
console.info("Le script est en cours d'exécution"); // Ajouté pour le débogage

const bcrypt = require("bcryptjs");

const generateHashedPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

const password = "VotreMotDePasseIci";
const hashedPassword = generateHashedPassword(password);

// Remplacé console.log par console.info pour résoudre l'erreur ESLint
console.info(`Mot de passe original: ${password}`);
console.info(`Mot de passe haché: ${hashedPassword}`);

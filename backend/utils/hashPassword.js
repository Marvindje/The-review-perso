console.log("Le script est en cours d'exécution");  // Ajouté pour le débogage

const bcrypt = require('bcryptjs');

const generateHashedPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

const password = "VotreMotDePasseIci";
const hashedPassword = generateHashedPassword(password);

console.log(`Mot de passe original: ${password}`);
console.log(`Mot de passe haché: ${hashedPassword}`);

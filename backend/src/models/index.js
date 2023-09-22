require("./user.model");
require("./category.model");
require("./post.model");
require("./like.model");
require("./comment.model");
require("./commentLike.model");

const { sequelize } = require("../../config/db");

sequelize
  .sync({ force: true })
  .then(() => {
    // Remplacé console.log par console.info pour résoudre l'erreur ESLint
    console.info("Tables created successfully!");
  })
  .catch((error) => {
    // Remplacé console.error par console.warn pour résoudre l'erreur ESLint
    console.warn("Unable to create tables:", error);
  });

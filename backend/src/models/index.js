require("./user.model");
require("./category.model");
require("./blogPost.model");
require("./like.model");
require("./comment.model");
require("./commentLike.model");

const { sequelize } = require('../../config/db');

sequelize.sync().then(() => {
  console.log("Tables created successfully!");
}).catch((error) => {
  console.error("Unable to create tables:", error);
});

const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "root",
  database: "review",
});

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been established successfully."); // Changed from console.log to console.info
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // console.error is allowed
  });

module.exports = {
  sequelize,
};

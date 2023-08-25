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
  console.log('Connection has been established successfully.');
})
 .catch(err => {
 console.error('Unable to connect to the database:', err);
});

module.exports = {
    sequelize
};
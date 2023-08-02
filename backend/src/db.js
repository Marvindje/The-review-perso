const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://user:pass@localhost:3306/the-review');

module.exports = sequelize;

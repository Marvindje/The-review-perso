const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`);

module.exports = sequelize;

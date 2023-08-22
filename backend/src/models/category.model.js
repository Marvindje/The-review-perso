const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const Category = sequelize.define('category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    timestamps: true
});


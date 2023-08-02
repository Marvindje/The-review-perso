const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  tableName: 'Categories',
  timestamps: false
});

module.exports = Category;

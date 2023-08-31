const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories', 
      key: 'id'
    }
  }
}, {
  timestamps: true
});

module.exports = { Post }


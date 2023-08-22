const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const BlogPost = sequelize.define('blogPost', {
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
      model: 'users', // Notez le nom de la table au pluriel
      key: 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories', // Notez le nom de la table au pluriel
      key: 'id'
    }
  }
}, {
  timestamps: true
});



const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const Like = sequelize.define('like', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Notez le nom de la table au pluriel
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'blogPosts', // Notez le nom de la table au pluriel
      key: 'id'
    }
  }
}, {
  timestamps: true
});



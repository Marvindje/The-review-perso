const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const CommentLike = sequelize.define('commentLike', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Notez le nom de la table au pluriel
      key: 'id'
    }
  },
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'comments', // Notez le nom de la table au pluriel
      key: 'id'
    }
  }
}, {
  timestamps: true
});

module.exports = CommentLike;

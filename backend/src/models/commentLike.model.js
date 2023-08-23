const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const CommentLike = sequelize.define('commentLike', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'comments', 
      key: 'id'
    }
  }
}, {
  timestamps: true
});

module.exports = CommentLike;

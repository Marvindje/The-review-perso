const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const CommentModel = sequelize.define('comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'blogPosts', 
      key: 'id',
    },
  }
}, {
  timestamps: true
});

module.exports = { CommentModel };


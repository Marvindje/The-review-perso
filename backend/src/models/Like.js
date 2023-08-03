// models/Like.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:3306/the-review');

const Like = sequelize.define('Like', {
  // Model attributes
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPosts',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {

  tableName: 'Likes',
  timestamps: false
});

module.exports = Like;

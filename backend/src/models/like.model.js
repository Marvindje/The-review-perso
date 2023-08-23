const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const Like = sequelize.define('like', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'blogPosts', 
      key: 'id'
    }
  }
}, {
  timestamps: true
});



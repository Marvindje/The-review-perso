const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:3306/the-review');

const Post = sequelize.define('Post', {
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
      model: 'user',
      key: 'id',
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
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
  tableName: 'BlogPosts',
  timestamps: false
});

module.exports = Post;

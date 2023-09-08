const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');
const { CategoryModel } = require('./category.model')
const { UserModel } = require('./user.model')


const PostModel  = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  timestamps: true
});

CategoryModel.hasMany(PostModel, { onDelete: 'cascade', hooks: true });
UserModel.hasMany(PostModel, { onDelete: 'cascade', hooks: true })

module.exports = { PostModel }


const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');
const { CommentModel } = require('./comment.model')
const { UserModel } = require('./user.model')

const CommentLikeModel = sequelize.define('commentLike', {}, {
  timestamps: true
});

CommentModel.hasMany(CommentLikeModel, { onDelete: 'cascade', hooks: true })
UserModel.hasMany(CommentLikeModel, { onDelete: 'cascade', hooks: true })

module.exports = { CommentLikeModel };

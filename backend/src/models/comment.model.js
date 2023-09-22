const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const { PostModel } = require("./post.model");
const { UserModel } = require("./user.model");

const CommentModel = sequelize.define(
  "comment",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

PostModel.hasMany(CommentModel, { onDelete: "cascade", hooks: true });
UserModel.hasMany(CommentModel, { onDelete: "cascade", hooks: true });

module.exports = { CommentModel };

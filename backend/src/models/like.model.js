const { sequelize } = require("../../config/db");
const { PostModel } = require("./post.model");
const { UserModel } = require("./user.model");

const LikeModel = sequelize.define(
  "like",
  {},
  {
    timestamps: true,
  }
);

PostModel.hasMany(LikeModel, { onDelete: "cascade", hooks: true });
UserModel.hasMany(LikeModel, { onDelete: "cascade", hooks: true });

module.exports = { LikeModel };

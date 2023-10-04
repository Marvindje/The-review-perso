const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const CategoryModel = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = { CategoryModel };

const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');
// TODO : rendre le mail unique
const UserModel = sequelize.define('user', {
  // définition des attributs des modèles
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile_image: {
    type: DataTypes.STRING
  }
}, {

  timestamps: true
});

module.exports = { UserModel }

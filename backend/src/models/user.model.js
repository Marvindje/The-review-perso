const { DataTypes } = require("sequelize");
const { sequelize } = require('../../config/db');

const User = sequelize.define('user', {
  // définition des attributs des modèles
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profile_image: {
    type: DataTypes.STRING
  }
}, {
  //  d'autres options de modèles
  timestamps: true
});



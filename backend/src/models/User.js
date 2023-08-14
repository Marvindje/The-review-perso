import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../database/initDb';

const User = sequelize.define('User', {
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
  //  d'autres options de modèles
  tableName: 'Users',
  timestamps: false
});

export default User;

import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../database/initDb';
import AbstractManager from './AbstractManager';

const Like = sequelize.define('Like', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPosts',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  tableName: 'Likes',
  timestamps: false
});

class LikeManager extends AbstractManager {
    
    // Compter le nombre de "likes" pour un post spécifique
    async countLikesForPost(postId) {
        return await Like.count({
            where: {
                post_id: postId
            }
        });
    }

    // Vérifier si un utilisateur a déjà "liké" un post
    async userHasLikedPost(userId, postId) {
        const like = await Like.findOne({
            where: {
                user_id: userId,
                post_id: postId
            }
        });
        return like !== null;
    }

    // Récupérer tous les "likes" d'un utilisateur
    async getLikesByUser(userId) {
        return await Like.findAll({
            where: {
                user_id: userId
            }
        });
    }
}

export default new LikeManager(Like);

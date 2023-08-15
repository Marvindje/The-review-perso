// models/Comment.js
import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../database/initDb';
import AbstractManager from './AbstractManager';

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'BlogPosts',
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
    tableName: 'Comments',
    timestamps: false
});

class CommentManager extends AbstractManager {
    
    // Récupérer tous les commentaires d'un utilisateur spécifique
    async getCommentsByUser(userId) {
        return await Comment.findAll({
            where: {
                user_id: userId
            }
        });
    }

    // Récupérer tous les commentaires pour un post spécifique
    async getCommentsForPost(postId) {
        return await Comment.findAll({
            where: {
                post_id: postId
            }
        });
    }

    // Ajouter d'autres méthodes spécifiques pour le CommentManager si nécessaire

}

export default new CommentManager(Comment);

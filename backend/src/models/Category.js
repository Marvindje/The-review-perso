const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const AbstractManager = require('./AbstractManager');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'Categories',
  timestamps: false
});

class CategoryManager extends AbstractManager {
    
    // Récupérer une catégorie par son nom
    async getCategoryByName(name) {
        return await Category.findOne({
            where: {
                name: name
            }
        });
    }

    // Compter le nombre d'articles dans une catégorie (nécessite une relation avec un modèle Article)
    async countArticlesInCategory(categoryId) {
        // Remarque : Cette méthode nécessite que vous ayez défini une relation entre les catégories et les articles.
        const category = await Category.findByPk(categoryId);
        return await category.countArticles();  // Supposant que "Articles" est le nom de la relation.
    }

    // Mettre à jour la date de modification d'une catégorie
    async updateCategoryUpdatedAt(categoryId) {
        await Category.update({ updated_at: Sequelize.NOW }, {
            where: {
                id: categoryId
            }
        });
    }
}

module.exports = new CategoryManager(Category);

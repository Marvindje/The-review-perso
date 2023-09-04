const express = require('express');
const CommentController = require('../controllers/comment.controller');  // Assurez-vous que votre contrôleur exporte un objet avec des méthodes statiques

const commentRoutes = express.Router();

commentRoutes
  .post('/', CommentController.create)  // Créer un nouveau commentaire
  .get('/', CommentController.findAll)  // Récupérer tous les commentaires
  .get('/:commentId', CommentController.findOneById)  // Récupérer un commentaire par son ID
  .delete('/:commentId', CommentController.deleteById);  // Supprimer un commentaire par son ID

module.exports = { commentRoutes };

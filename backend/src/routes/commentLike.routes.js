// J'importe le package express pour créer mon routeur.
const express = require('express');

// J'importe mon contrôleur CommentLike pour utiliser ses méthodes.
const CommentLikeController = require('../controllers/commentLike.controller');

// J'importe le middleware pour vérifier si l'utilisateur est connecté.
const IsConnectedMiddleware = require('../middlewares/isConnected.middleware');

// Je crée un nouveau routeur express.
const commentLikeRoutes = express.Router();

// Route POST pour créer un nouveau CommentLike.
// La méthode 'create' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.post('/', IsConnectedMiddleware.execute, CommentLikeController.create);

// Route DELETE pour supprimer un CommentLike par son ID.
// La méthode 'deleteById' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.delete('/:commentLikeId', IsConnectedMiddleware.execute, CommentLikeController.deleteById);

// Route GET pour récupérer tous les CommentLikes d'un utilisateur spécifique.
// La méthode 'findByUserId' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.get('/user/:userId', CommentLikeController.findByUserId);

// Route GET pour récupérer tous les CommentLikes pour un commentaire spécifique.
// La méthode 'findByCommentId' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.get('/comment/:commentId', CommentLikeController.findByCommentId);

// Route GET pour récupérer tous les CommentLikes.
// La méthode 'findAll' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.get('/', CommentLikeController.findAll);

// Route GET pour récupérer un CommentLike spécifique par son ID.
// La méthode 'findById' du contrôleur CommentLike sera appelée lorsque cette route sera atteinte.
commentLikeRoutes.get('/:commentLikeId', CommentLikeController.findById);

// J'exporte mon routeur pour l'utiliser dans mon application principale.
module.exports = { commentLikeRoutes };

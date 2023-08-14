import express from "express"
import commentController from '../controllers/commentController';
import { createCommentValidator } from'../validators/commentValidator';
import handleValidationErrors from '../middlewares/handleValidationErrors';  // Importez le middleware

const commentRoutes = express.Router();

// Utilisez le middleware après le validateur et avant le contrôleur
commentRoutes.get('/', commentController.getAllComments);
commentRoutes.get('/:id', commentController.getCommentById);
commentRoutes.post('/', createCommentValidator, handleValidationErrors, commentController.createComment);
commentRoutes.put('/:id', createCommentValidator, handleValidationErrors, commentController.updateComment);
commentRoutes.delete('/:id', commentController.deleteComment);

export { commentRoutes };

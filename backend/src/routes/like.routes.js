import express from "express"
import likeController from '../controllers/likeControllers';

const likeRoutes = express.Router();

likeRoutes.get('/', likeController.getAllLikes);
likeRoutes.get('/:id', likeController.getLikeById);
likeRoutes.post('/', likeController.createLike);
likeRoutes.delete('/:id', likeController.deleteLike);

export { likeRoutes }
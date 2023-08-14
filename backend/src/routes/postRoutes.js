import express from "express"
import { createPostValidator } from '../validators/postValidator';
import postController from '../controllers/postControllers';

const postRoutes = express.Router();

postRoutes.get('/', postController.getAllPosts);
postRoutes.get('/:id', postController.getPostById);
postRoutes.post('/', createPostValidator, postController.createPost);
postRoutes.put('/:id', createPostValidator, postController.updatePost);
postRoutes.delete('/:id', postController.deletePost);

export {
    postRoutes
}

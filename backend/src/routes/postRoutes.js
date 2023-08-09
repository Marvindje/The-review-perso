const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController');
const { createPostValidator } = require('../validators/postValidator');
const { validationResult } = require('express-validator');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', createPostValidator, postController.createPost);
router.put('/:id', createPostValidator, postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;

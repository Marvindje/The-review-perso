const express = require('express');
const router = express.Router();
const commentController = require('./controllers/commentController');
const { createCommentValidator } = require('../validators/commentValidator');
const { validationResult } = require('express-validator');

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.post('/', createCommentValidator, commentController.createComment);
router.put('/:id', createCommentValidator, commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;

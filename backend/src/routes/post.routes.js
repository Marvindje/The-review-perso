const express = require('express');
const postController = require('../controllers/post.controller');
const { isConnectedMiddleware } = require('../middlewares/isConnected.middleware');

const postRoutes = express.Router();

postRoutes
  .get('/', isConnectedMiddleware, postController.findAllPosts)
  .post('/', postController.createPost);
  
module.exports = { postRoutes };

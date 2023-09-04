const express = require('express');
const PostController = require('../controllers/post.controller');
const { isConnectedMiddleware } = require('../middlewares/isConnected.middleware');

const postRoutes = express.Router();

postRoutes
  .get('/', isConnectedMiddleware, PostController.findAll)
  .post('/', PostController.create);
  
module.exports = { postRoutes };

const express = require("express")
const LikeController = require("../controllers/like.controller")
const IsConnectedMiddleware = require('../middlewares/isConnected.middleware');

const likeRoutes = express.Router();

likeRoutes
    .post('/', IsConnectedMiddleware.execute, LikeController.create)
    .delete('/:likeId', IsConnectedMiddleware.execute, LikeController.deleteById)

module.exports = {likeRoutes}
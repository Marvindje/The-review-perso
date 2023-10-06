const express = require("express");
const LikeController = require("../controllers/like.controller");
const IsConnectedMiddleware = require("../middlewares/isConnected.middleware");

const likeRoutes = express.Router();

likeRoutes
  .get("/:likeId", IsConnectedMiddleware, LikeController.findById)
  .get("/", IsConnectedMiddleware.execute, LikeController.findAll)
  .post("/", IsConnectedMiddleware.execute, LikeController.create)
  .delete("/:likeId", IsConnectedMiddleware.execute, LikeController.deleteById)
  .delete("/posts/:postId", IsConnectedMiddleware.execute, LikeController.deleteByPostId);

module.exports = { likeRoutes };

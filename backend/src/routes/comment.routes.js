const express = require("express");
const CommentController = require("../controllers/comment.controller");
const IsConnectedMiddleware = require("../middlewares/isConnected.middleware");

const commentRoutes = express.Router();

commentRoutes
  .post("/", IsConnectedMiddleware.execute, CommentController.create)
  .get("/", IsConnectedMiddleware.execute, CommentController.findAll)
  .get(
    "/:commentId",
    IsConnectedMiddleware.execute,
    CommentController.findOneById
  )
  .patch("/:commentId", IsConnectedMiddleware, CommentController.update)
  .delete(
    "/:commentId",
    IsConnectedMiddleware.execute,
    CommentController.deleteById
  );

module.exports = { commentRoutes };

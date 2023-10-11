const express = require("express");
const PostController = require("../controllers/post.controller");
const IsConnectedMiddleware = require("../middlewares/isConnected.middleware");

const postRoutes = express.Router();

postRoutes
  .get("/user", IsConnectedMiddleware.execute, PostController.findAllByUser)
  .get("/", IsConnectedMiddleware.execute, PostController.findAll)
  .get("/:postId", IsConnectedMiddleware.execute, PostController.findOneById)
  .get(
    "/categories/:categoryId",
    IsConnectedMiddleware.execute,
    PostController.findAllByCategory
  )
  .post("/", IsConnectedMiddleware.execute, PostController.create);

module.exports = { postRoutes };

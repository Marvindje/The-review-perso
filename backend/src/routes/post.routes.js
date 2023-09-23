const express = require("express");
const PostController = require("../controllers/post.controller");
const IsConnectedMiddleware = require("../middlewares/isConnected.middleware");

const postRoutes = express.Router();

postRoutes
  .get("/", IsConnectedMiddleware.execute, PostController.findAll)
  .get(
    "/category/:categoryId",
    IsConnectedMiddleware.execute,
    PostController.findAllByCategory
  )
  .post("/", IsConnectedMiddleware.execute, PostController.create);

module.exports = { postRoutes };

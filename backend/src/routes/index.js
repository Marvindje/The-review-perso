// J'importe toutes mes routes
const { authRoutes } = require("./auth.routes");
const { postRoutes } = require("./post.routes");
const { categoryRoutes } = require("./category.routes");
const { commentRoutes } = require("./comment.routes");
const { likeRoutes } = require("./like.routes");
const { commentLikeRoutes } = require("./commentLike.routes"); 

const router = (app) => {
  // J'ajoute mes routes à mon application
  app.use("/auth", authRoutes);
  app.use("/posts", postRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/comments", commentRoutes);
  app.use("/likes", likeRoutes);
  app.use("/commentLikes", commentLikeRoutes); 
};

// J'exporte mon routeur pour l'utiliser dans mon application principale.
module.exports = router;

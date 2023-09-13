// J'importe toutes mes routes
const { authRoutes } = require("./auth.routes");
const { postRoutes } = require('./post.routes');
const { categoryRoutes } = require('./category.routes');
const { commentRoutes } = require('./comment.routes');
const { likeRoutes } = require("./like.routes");
const { commentLikeRoutes } = require('./commentLike.routes');  // Nouvelle ligne pour importer les routes de CommentLike

const router = (app) => {
   

    // J'ajoute mes routes à mon application
    app.use('/auth', authRoutes);
    app.use('/posts', postRoutes);
    app.use('/categories', categoryRoutes);
    app.use('/comments', commentRoutes);
    app.use('/likes', likeRoutes);
    app.use('/commentLikes', commentLikeRoutes);  // Nouvelle ligne pour ajouter les routes de CommentLike
}

// J'exporte mon routeur pour l'utiliser dans mon application principale.
module.exports = router;

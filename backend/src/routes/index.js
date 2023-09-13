const { authRoutes } = require("./auth.routes")
const { postRoutes } = require('./post.routes');
const { categoryRoutes } = require('./category.routes')
const { commentRoutes } = require('./comment.routes');
const { likeRoutes } = require("./like.routes");

const router = (app) => {
    app.use('/auth', authRoutes);
    app.use('/posts', postRoutes)
    app.use('/categories', categoryRoutes)
    app.use('/comments', commentRoutes)
    app.use('/likes', likeRoutes)
}

module.exports = router;

const { authRoutes } = require("./auth.routes")
const { postRoutes } = require('./post.routes');
const { categoryRoutes } = require('./category.routes')
const { commentRoutes } = require('./comment.routes')

const router = (app) => {
    app.use('/auth', authRoutes);
    app.use('/posts', postRoutes)
    // app.use('/category', categoryRoutes)
    // app.use('/comment', commentRoutes)
}

module.exports = router;
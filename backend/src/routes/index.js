import { articleRoutes } from "./articleRoutes"
import { commentRoutes } from "./commentRoutes"
import { likeRoutes } from "./likeRoutes"
import { postRoutes } from "./postRoutes"
import { userRoutes } from "./userRoutes"
import { categoryRouter } from "./categoryRouter"

export const router = (app) => {
    app.use('/categories', categoryRouter);
    app.use('/comments', commentRoutes);
    app.use('/likes', likeRoutes);
    app.use('/posts', postRoutes);
    app.use('/users', userRoutes);
    app.use('/articles', articleRoutes);
}

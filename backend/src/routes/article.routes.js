import express from "express"
import { articlesController } from "../controllers/articlesController"

const articleRoutes = express.Router();

articleRoutes.get('/:category', articlesController.getArticlesByCategory);

export { articleRoutes };

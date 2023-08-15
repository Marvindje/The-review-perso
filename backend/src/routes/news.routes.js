import express from "express"
import newsController from '../controllers/newsControllers';

const newsRoutes = express.Router();

newsRoutes.get('/fetch-news', newsController.fetchNews);

export { newsRoutes };

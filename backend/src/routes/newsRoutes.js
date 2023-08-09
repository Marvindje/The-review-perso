const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/fetch-news', newsController.fetchNews);

module.exports = router;
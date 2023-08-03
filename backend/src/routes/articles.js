const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

router.get('/:category', articlesController.getArticlesByCategory);

module.exports = router;

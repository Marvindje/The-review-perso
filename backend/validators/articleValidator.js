const { body } = require('express-validator');

exports.createArticleValidator = [
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    body('content').notEmpty().withMessage('Content is required').isString().withMessage('Content must be a string'),
    // Ajoutez d'autres validations selon vos besoins
];

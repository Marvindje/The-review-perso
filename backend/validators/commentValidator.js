const { body } = require('express-validator');

exports.createCommentValidator = [
    body('content').notEmpty().withMessage('Content is required').isString().withMessage('Content must be a string'),
    // Vous pouvez ajouter d'autres validations selon vos besoins
];

import { body } from 'express-validator'

export const createArticleValidator = [
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    body('content').notEmpty().withMessage('Content is required').isString().withMessage('Content must be a string'),
    // Ajouter d'autres validations si besoin
];

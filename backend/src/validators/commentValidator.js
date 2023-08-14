import { body } from 'express-validator'

export const createCommentValidator = [
    body('content').notEmpty().withMessage('Content is required').isString().withMessage('Content must be a string'),
    //  ajouter d'autres validations si besoin
];

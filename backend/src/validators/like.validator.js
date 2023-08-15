import { body } from 'express-validator'

export const createLikeValidator = [
    body('user_id').notEmpty().withMessage('User ID is required').isInt().withMessage('User ID must be an integer'),
    body('post_id').notEmpty().withMessage('Post ID is required').isInt().withMessage('Post ID must be an integer'),
];

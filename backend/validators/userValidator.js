const { body } = require('express-validator');

exports.createUserValidator = [
    body('username').notEmpty().withMessage('Username is required').isString().withMessage('Username must be a string'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Ajoutez d'autres validations selon vos besoins
];

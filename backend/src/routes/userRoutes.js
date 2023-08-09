const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { createUserValidator } = require('../validators/userValidator');
const { validationResult } = require('express-validator');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', createUserValidator, usersController.createUser);
router.put('/:id', createUserValidator, usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;

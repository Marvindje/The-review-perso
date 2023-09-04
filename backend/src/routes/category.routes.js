// category.routes.js

const express = require('express');
const CategoryController = require('../controllers/category.controller'); // Assurez-vous que le chemin est correct

const categoryRoutes = express.Router();

categoryRoutes
.get('/:categoryId', CategoryController.findOneById)
.get('/', CategoryController.findAll)
.post('/', CategoryController.create)
.patch('/:categoryId', CategoryController.updateById)
.delete('/:categoryId', CategoryController.deleteById);

module.exports = { categoryRoutes };

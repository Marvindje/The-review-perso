// category.routes.js

const express = require('express');
const CategoryController = require('../controllers/category.controller'); // Assurez-vous que le chemin est correct
const IsConnectedMiddleware = require('../middlewares/isConnected.middleware');

const categoryRoutes = express.Router();

categoryRoutes
.get('/:categoryId', IsConnectedMiddleware.execute, CategoryController.findOneById)
.get('/', IsConnectedMiddleware.execute, CategoryController.findAll)
.post('/', IsConnectedMiddleware.execute, CategoryController.create)
.patch('/:categoryId', IsConnectedMiddleware.execute, CategoryController.updateById)
.delete('/:categoryId', IsConnectedMiddleware.execute, CategoryController.deleteById);

module.exports = { categoryRoutes };

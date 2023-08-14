import express from "express"
import categoriesController from '../controllers/categoriesControllers';

const categoryRouter = express.Router();

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategoryById);
router.post('/', categoriesController.createCategory);
router.put('/:id', categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);

export {
    categoryRouter
}

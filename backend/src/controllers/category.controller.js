const { CategoryModel } = require('../models/category.model');

class CategoryController {
  static async findOneById(req, res) {
    try{
      const { categoryId } = req.params;

      const category = await CategoryModel.findByPk(categoryId);

      if(!category?.id){
        return res.status(404).send(`Category (${categoryId}) not found !`);
      };

      res.status(200).send(category);
    } catch(err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findAll(req, res) {
    try {
      const categories = await CategoryModel.findAll();

      if(!categories){
        return res.status(404).send('Categories not found !');
      };

      res.status(200).send(categories)
    } catch(err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const { name } = req.body;

      const category = await CategoryModel.create({ name });

      res.status(200).send(category);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async updateById(req, res){
    try{
      const { categoryId } = req.params;
      const { name } = req.body;

      const isUpdated = await CategoryModel.update({
        ...(name ? { name }: {}),
      }, {
        where: {
          id: categoryId
        },
      })

      if(!isUpdated?.[0]) {
        return res.status(404).send(`Category (${categoryId}) not found !`);
      };

      return CategoryController.findOneById(req, res);
    } catch(err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res){
    try{
      const { categoryId } = req.params;

      const isDestroy = await CategoryModel.destroy({
        where: {
          id: categoryId
        }
      })

      if(!isDestroy) {
        return res.status(404).send(`Category (${categoryId}) not found !`);
      }

      return res.status(204).send()
    } catch(err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = CategoryController;

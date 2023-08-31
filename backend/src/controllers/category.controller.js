const { Category } = require('../models/category.model');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(200).send(category);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};



module.exports = {
  createCategory,
 
};

const Like = require('../models/Like');

exports.getAllLikes = async (req, res) => {
  const likes = await Like.findAll();
  res.json(likes);
};

exports.getLikeById = async (req, res) => {
  const like = await Like.findByPk(req.params.id);
  res.json(like);
};

exports.createLike = async (req, res) => {
  const newLike = await Like.create(req.body);
  res.json(newLike);
};

exports.deleteLike = async (req, res) => {
  await Like.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Like deleted' });
};

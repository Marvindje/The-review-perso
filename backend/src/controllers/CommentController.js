const Comment = require('../models/Comment');

exports.getAllComments = async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
};

exports.getCommentById = async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  res.json(comment);
};

exports.createComment = async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
};

exports.updateComment = async (req, res) => {
  await Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Comment updated' });
};

exports.deleteComment = async (req, res) => {
  await Comment.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Comment deleted' });
};

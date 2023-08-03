const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.json(post);
};

exports.createPost = async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json(newPost);
};

exports.updatePost = async (req, res) => {
  await Post.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Post updated' });
};

exports.deletePost = async (req, res) => {
  await Post.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({ message: 'Post deleted' });
};

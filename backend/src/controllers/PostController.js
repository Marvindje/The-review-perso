const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const result = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (result[0] === 0) { // No rows updated
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const result = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result === 0) { // No rows deleted
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

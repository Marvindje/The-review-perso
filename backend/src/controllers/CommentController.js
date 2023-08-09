const Comment = require('../models/Comment');

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createComment = async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const result = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (result[0] === 0) { // No rows updated
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({ message: 'Comment updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const result = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result === 0) { // No rows deleted
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({ message: 'Comment deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

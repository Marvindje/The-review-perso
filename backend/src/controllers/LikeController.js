const Like = require('../models/Like');

exports.getAllLikes = async (req, res) => {
    try {
        const likes = await Like.findAll();
        res.json(likes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getLikeById = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        res.json(like);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createLike = async (req, res) => {
    try {
        const newLike = await Like.create(req.body);
        res.status(201).json(newLike);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteLike = async (req, res) => {
    try {
        const result = await Like.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result === 0) { // No rows deleted
            return res.status(404).json({ message: 'Like not found' });
        }
        res.json({ message: 'Like deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllLikes,
    getLikeById,
    createLike,
    deleteLike,
};

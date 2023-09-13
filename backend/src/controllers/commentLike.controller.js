const { CommentLikeModel } = require('../models/commentLike.model');

class CommentLikeController {
  static async create(req, res) {
    try {
      const { commentId } = req.body;
      const { userId } = req.user;

      // Validation des données
      if (!commentId) {
        return res.status(400).send({ error: "commentId is missing" });
      }

      const commentLike = await CommentLikeModel.create({ userId, commentId });

      res.status(200).send(commentLike);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res) {
    try {
      const { commentLikeId } = req.params;

      const isDestroyed = await CommentLikeModel.destroy({
        where: {
          id: commentLikeId,
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`CommentLike (${commentLikeId}) not found!`);
      }

      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = CommentLikeController;

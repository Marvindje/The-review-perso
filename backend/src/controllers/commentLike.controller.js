const { CommentLikeModel } = require("../models/commentLike.model");

class CommentLikeController {
  static async create(req, res) {
    try {
      const { commentId } = req.body;
      const { userId } = req.user;

      if (!commentId) {
        return res.status(400).send({ error: "commentId is missing" });
      }

      const commentLike = await CommentLikeModel.create({ userId, commentId });
      return res.status(200).send(commentLike);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
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
        return res
          .status(404)
          .send(`CommentLike (${commentLikeId}) not found!`);
      }

      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findAll(req, res) {
    try {
      const commentLikes = await CommentLikeModel.findAll();
      return res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findById(req, res) {
    try {
      const { commentLikeId } = req.params;
      const commentLike = await CommentLikeModel.findByPk(commentLikeId);
      if (!commentLike) {
        return res
          .status(404)
          .send(`CommentLike (${commentLikeId}) not found!`);
      }
      return res.status(200).send(commentLike);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findByUserId(req, res) {
    try {
      const { userId } = req.params;
      const commentLikes = await CommentLikeModel.findAll({
        where: { userId },
      });
      return res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findByCommentId(req, res) {
    try {
      const { commentId } = req.params;
      const commentLikes = await CommentLikeModel.findAll({
        where: { commentId },
      });
      return res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = CommentLikeController;

const { CommentModel } = require('../models/comment.model');
const { CommentLikeModel } = require('../models/commentLike.model');
class CommentController {
  static async create(req, res) {
    try {
      const { content, userId, postId } = req.body;

      // Validation des données
      if (!content || !userId || !postId) {
        return res.status(400).send({ error: "content, userId, or postId is missing" });
      }

      const comment = await CommentModel.create({ content, userId, postId });

      res.status(200).send(comment);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findAll(req, res) {
    try {
      const comments = await CommentModel.findAll();
      res.status(200).send(comments);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findOneById(req, res) {
    try {
      const { commentId } = req.params;

      const comment = await CommentModel.findByPk(commentId);

      if (!comment) {
        return res.status(404).send(`Comment (${commentId}) not found!`);
      }

      res.status(200).send(comment);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res) {
    try {
      const { commentId } = req.params;

      await CommentLikeModel.destroy({
        where: {
          comment_id: commentId,
        }
      })

      const isDestroyed = await CommentModel.destroy({
        where: {
          id: commentId,
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`Comment (${commentId}) not found!`);
      }

      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = CommentController;

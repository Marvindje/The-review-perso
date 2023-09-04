const { CommentModel } = require('../models/comment.model');


class CommentController {
  static async create(req, res) {
    console.log("Inside create method");
    try {
      const { content, user_id, post_id } = req.body;
      const comment = await CommentModel.create({ content, user_id, post_id });
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

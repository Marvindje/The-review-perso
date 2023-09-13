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

   // Ici, je récupère tous les commentLikes de la base de données.
   static async findAll(req, res) {
    try {
      const commentLikes = await CommentLikeModel.findAll();
      res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  // Ici, je récupère un commentLike spécifique en utilisant son ID.
  static async findById(req, res) {
    try {
      const { commentLikeId } = req.params;
      const commentLike = await CommentLikeModel.findByPk(commentLikeId);
      if (!commentLike) {
        return res.status(404).send(`CommentLike (${commentLikeId}) not found!`);
      }
      res.status(200).send(commentLike);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  // Ici, je récupère tous les commentLikes pour un utilisateur spécifique.
  static async findByUserId(req, res) {
    try {
      const { userId } = req.params;
      const commentLikes = await CommentLikeModel.findAll({ where: { userId } });
      res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  // Ici, je récupère tous les commentLikes pour un commentaire spécifique.
  static async findByCommentId(req, res) {
    try {
      const { commentId } = req.params;
      const commentLikes = await CommentLikeModel.findAll({ where: { commentId } });
      res.status(200).send(commentLikes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = CommentLikeController;
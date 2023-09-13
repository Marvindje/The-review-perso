const { LikeModel } = require('../models/like.model');

class LikeController {
  static async create(req, res) {
    try {
      const { postId } = req.body;
      const { userId } = req.user;

      // Validation des données
      if (!postId) {
        return res.status(400).send({ error: "postId is missing" });
      }

      const like = await LikeModel.create({ userId, postId });

      res.status(200).send(like);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res) {
    try {
      const { likeId } = req.params;

      const isDestroyed = await LikeModel.destroy({
        where: {
          id: likeId,
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`Like (${likeId}) not found!`);
      }

      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = LikeController;

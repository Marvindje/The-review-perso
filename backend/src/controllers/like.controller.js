const { LikeModel } = require('../models/like.model');

class LikeController {
  static async create(req, res) {
    try {
      const { postId } = req.body;
      const { userId } = req.user;

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

  static async findAll(req, res) {
    try {
      const likes = await LikeModel.findAll();
      res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findById(req, res) {
    try {
      const { likeId } = req.params;
      const like = await LikeModel.findByPk(likeId);
      if (!like) {
        return res.status(404).send(`Like (${likeId}) not found!`);
      }
      res.status(200).send(like);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findByUserId(req, res) {
    try {
      const { userId } = req.params;
      const likes = await LikeModel.findAll({ where: { userId } });
      res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }

  static async findByPostId(req, res) {
    try {
      const { postId } = req.params;
      const likes = await LikeModel.findAll({ where: { postId } });
      res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
}

module.exports = LikeController;

const { LikeModel } = require("../models/like.model");

class LikeController {
  static async create(req, res) {
    try {
      const { postId } = req.body;
      const { userId } = req.user;

      if (!postId) {
        return res.status(400).send({ error: "postId is missing" });
      }

      const like = await LikeModel.create({ userId, postId });
      return res.status(200).send(like);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
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

      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async deleteByPostId(req, res) {
    try {
      const { postId } = req.params;
      const { userId } = req.user;

      const isDestroyed = await LikeModel.destroy({
        where: {
          postId,
          userId
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`Like (${likeId}) not found!`);
      }

      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findAll(req, res) {
    try {
      const { userId } = req.user;

      const likes = await LikeModel.findAll({
        where: {
          userId
        }
      });

      return res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findById(req, res) {
    try {
      const { likeId } = req.params;
      const like = await LikeModel.findByPk(likeId);
      if (!like) {
        return res.status(404).send(`Like (${likeId}) not found!`);
      }
      return res.status(200).send(like);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findByUserId(req, res) {
    try {
      const { userId } = req.params;
      const likes = await LikeModel.findAll({ where: { userId } });
      return res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findByPostId(req, res) {
    try {
      const { postId } = req.params;
      const likes = await LikeModel.findAll({ where: { postId } });
      return res.status(200).send(likes);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = LikeController;

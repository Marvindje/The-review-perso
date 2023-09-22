const { PostModel } = require("../models/post.model");

class PostController {
  static async findAll(req, res) {
    try {
      const posts = await PostModel.findAll();
      return res.status(200).send(posts);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findOneById(req, res) {
    try {
      const { postId } = req.params;
      const post = await PostModel.findByPk(postId);

      if (!post?.id) {
        return res.status(404).send(`Post (${postId}) not found!`);
      }

      return res.status(200).send(post);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const { title, content, categoryId } = req.body;
      const { userId } = req.user;

      const post = await PostModel.create({
        title,
        content,
        userId,
        categoryId,
      });
      return res.status(200).send(post);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async updateById(req, res) {
    try {
      const { postId } = req.params;
      const { title, content, categoryId } = req.body;

      const isUpdated = await PostModel.update(
        {
          ...(title ? { title } : {}),
          ...(content ? { content } : {}),
          ...(categoryId ? { categoryId } : {}),
        },
        {
          where: {
            id: postId,
          },
        }
      );

      if (!isUpdated?.[0]) {
        return res.status(404).send(`Post (${postId}) not found!`);
      }

      return PostController.findOneById(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res) {
    try {
      const { postId } = req.params;

      const isDestroyed = await PostModel.destroy({
        where: {
          id: postId,
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`Post (${postId}) not found!`);
      }

      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = PostController;

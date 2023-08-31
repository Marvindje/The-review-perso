const { Comment } = require('../models/comment.model');

const createComment = async (req, res) => {
  try {
    const { content, user_id, post_id } = req.body;
    const comment = await Comment.create({ content, user_id, post_id });
    res.status(200).send(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};



module.exports = {
  createComment,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import '../App.css';

function ArticleSection({ title, image }) {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/posts', {
      withCredentials: true,
    })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      });
  }, []);

  const handleLike = (postId) => {
    axios.post(`http://localhost:5000/likes`, {
      postId
    }, {
      withCredentials: true,
    })
      .then((response) => {
        setLikedPosts({
          ...likedPosts,
          [postId]: !likedPosts[postId],
        });
      })
      .catch((error) => {
        console.error('Erreur lors du like:', error);
      });
  };

  const handleComment = (postId) => {
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newComment],
    });
    setNewComment("");
  };

  const handleDeleteComment = (postId, commentIndex) => {
    // Supposons que commentId est l'ID réel du commentaire dans la base de données
    const commentId = comments[postId][commentIndex].id;

    axios.delete(`http://localhost:5000/comments/${commentId}`, {
      withCredentials: true,
    })
    .then((response) => {
      if (Array.isArray(comments[postId])) {
        const updatedComments = [...comments[postId]];
        updatedComments.splice(commentIndex, 1);
        setComments({
          ...comments,
          [postId]: updatedComments,
        });
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression du commentaire:', error);
    });
  };

  return (
    <div className="font-body custom-background" style={{ background: '#e0e0e0' }}>
      <motion.div
        className="relative h-auto md:h-96 flex items-center justify-center bg-no-repeat bg-center bg-cover shadow-2xl"
        style={{ backgroundImage: `url(${image})` }}
        initial="rest"
        whileHover="hover"
      >
        <h1 className="text-4xl text-white font-mono text-center py-2 px-4 rounded hover:text-blue-500 transition-colors duration-200"
          style={{
            textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de",
          }}
        >
          {title}
        </h1>
      </motion.div>
      <div className="flex justify-center items-center py-4 px-8">
        <div className="grid grid-cols-4 gap-8 mt-2">
          {posts.map((post, i) => (
            <motion.div
              key={`article-${i}`}
              className="neomorph-card"
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-header mb-2">{post.title}</h3>
              <p className="text-black text-sm">{post.content}</p>
              <div onClick={() => handleLike(post.id)} className="text-4xl">
                {likedPosts[post.id] ? <FaHeart color="red" /> : <FaRegHeart />}
              </div>
              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Add comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="comment-button" onClick={() => handleComment(post.id)}>Submit</button>
                <div>
                  {comments[post.id]?.map((comment, index) => (
                    <div className="comment-box" key={index}>
                      <p>{comment}</p>
                      <button onClick={() => handleDeleteComment(post.id, index)}>Supprimer</button>
                    </div>
                  ))}
                </div>
              </div>
              <Link to={`/mes-posts/${post.id}`} className="text-black text-sm mt-4 block hover:text-black">
                Read article
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

ArticleSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleSection;

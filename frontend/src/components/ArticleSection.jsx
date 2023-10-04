import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { baseUrl } from '../config/url';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import '../App.css';

// Main Article Section
function ArticleSection() {
  const { categoryId } = useParams();
  
  const [category, setCategory] = useState({});
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");


  useEffect(() => {
    ;(async () => {
      try {
          const result = await axios.get(`${baseUrl}/categories/${categoryId}`, {
              withCredentials: true
          });
          console.log(result?.data)
          
          setCategory(result?.data || [])
      } catch(err) {
        console.error(err)
      }
  })();
  }, []);

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
    const commentId = comments[postId][commentIndex].id;

    axios.delete(`http://localhost:5000/comments/${commentId}`, {
      withCredentials: true,
    })
    .then((response) => {
      const updatedComments = [...comments[postId]];
      updatedComments.splice(commentIndex, 1);
      setComments({
        ...comments,
        [postId]: updatedComments,
      });
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression du commentaire:', error);
    });
  };

  return (
    <div className="font-body custom-background" style={{ background: '#e0e0e0' }}>
      <motion.div
        className="relative h-auto md:h-96 flex items-center justify-center bg-no-repeat bg-center bg-cover shadow-2xl"
        style={{ backgroundImage: `url(${category?.image})` }}
        initial="rest"
        whileHover="hover"
      >
        <h1 className="text-4xl text-white font-mono text-center py-2 px-4 rounded custom-title">
          {category?.name}
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
              <div className="comment-section flex flex-col items-start space-y-2">
                <input
                  type="text"
                  placeholder="Add comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
                <button 
                  className="button2"
                  onClick={() => handleComment(post.id)}
                >
                  Submit
                </button>
                <div className="w-full">
                  {comments[post.id]?.map((comment, index) => (
                    <div className="comment-box flex justify-between items-center border-b py-1" key={index}>
                      <p className="text-sm">{comment}</p>
                      <button 
                        className="text-xs text-red-500"
                        onClick={() => handleDeleteComment(post.id, index)}
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <Link to={`/mes-posts/${post.id}`} className="button2">
                Read article
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;

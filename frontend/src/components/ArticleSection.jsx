import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { usePostContext } from '../context/PostContext';
import { baseUrl } from '../config/url';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import '../App.css';

// Main Article Section
function ArticleSection() {
  const { categoryId } = useParams();
  const { handleLike, onIsLiked } = usePostContext();

  const [category, setCategory] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ;(async () => {
      try{
        const postsResult = await axios.get(`${baseUrl}/posts/categories/${categoryId}`, {
          withCredentials: true
        })

        setPosts(postsResult.data);
      } catch (err) {
        console.error(err)
      }
    })();
  }, []);



  useEffect(() => {
    ;(async () => {
      try {
          const result = await axios.get(`${baseUrl}/categories/${categoryId}`, {
              withCredentials: true
          });
          
          setCategory(result?.data || [])
      } catch(err) {
        console.error(err)
      }
  })();
  }, []);

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
                {onIsLiked(post.id) ? <FaHeart color="red" /> : <FaRegHeart />}
              </div>
              {/* <div className="comment-section flex flex-col items-start space-y-2">
                <input
                  type="text"
                  placeholder="Add comment..."
                  value={commentsValue[post.id] || ''}
                  onChange={(e) => onChangeComment(post.id, e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
                <button 
                  className="button2"
                  onClick={async () => onSaveComment(post.id)}
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
              </div> */}
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

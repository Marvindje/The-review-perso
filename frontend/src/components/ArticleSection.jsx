import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { baseUrl } from '../config/url';
import { CardPost } from './CardPost';
import '../styles/App.css';

// Main Article Section
function ArticleSection() {
  const { categoryId } = useParams();

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
            <CardPost post={post} key={`post-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config/url';

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        ;(async () => {
            try{
              const postsResult = await axios.get(`${baseUrl}/posts/${postId}`, {
                withCredentials: true
              })
      
              setPost(postsResult.data);
            } catch (err) {
              console.error(err)
            }
          })();
    }, []);
    

    console.log(post)
    return (
      <div className="neomorph-page">
        <h1>{post.title}</h1>
        <img src={post.imageUrl} alt={post.title} /> 
        {post.content}
      </div>
    );
  };
  export default PostPage;
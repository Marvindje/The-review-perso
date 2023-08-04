import React, { useState, useEffect } from 'react';

function MesPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-xl">
          <h2>{post.post}</h2>
          <p>{post.likes} likes</p>
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MesPosts;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaTrash, FaSync } from 'react-icons/fa';

function MesPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].liked = !newPosts[index].liked;
    newPosts[index].likes += newPosts[index].liked ? 1 : -1;
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  const deletePost = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  const resetPost = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes = 0;
    newPosts[index].liked = false;
    newPosts[index].comments = [];
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  const handleComment = (index, comment) => {
    const newPosts = [...posts];
    newPosts[index].comments.push(comment);
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
    document.getElementById(`comment-${index}`).value = '';
  };

  return (
    <motion.div
        className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6 flex flex-col justify-center sm:py-12"
        initial={{ x: "-100vw" }} 
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
    >
        <motion.h1
            className="w-3/4 mx-auto text-4xl font-semibold text-gray-700 mb-6 p-5 rounded-lg shadow-md bg-gray-100 border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            initial={{ x: "-100vw" }} 
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
        >
            Mes Posts
        </motion.h1>

        {posts.length === 0 ? (
            <motion.div
                className="text-2xl font-bold text-gray-700 mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Aucun post à afficher
            </motion.div>
        ) : (
            posts.map((post, index) => (
                <motion.div 
                    key={index} 
                    className="w-3/4 mx-auto bg-white shadow-lg rounded-3xl p-10 m-4 relative border border-gray-300 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button onClick={() => deletePost(index)} className="absolute top-2 right-2 focus:outline-none">
                        <FaTrash className="text-red-500" /> {/* Trash icon */}
                    </button>
                    <button onClick={() => resetPost(index)} className="absolute top-2 left-2 focus:outline-none">
                        <FaSync className="text-gray-500" /> {/* Sync icon */}
                    </button>
                    <h2 className="text-2xl font-bold mb-2">{post.post}</h2>
                    {post.files && post.files.map((file, fileIndex) => (
                        <img key={fileIndex} src={file.dataUrl} alt={file.name} className="mt-2 h-32 w-auto object-cover rounded-md shadow-md" />
                    ))}
                    <div className="flex items-center mb-4">
                        <button onClick={() => handleLike(index)} className="focus:outline-none">
                            <FaThumbsUp className={`mr-2 ${post.liked ? 'text-blue-500' : ''}`} /> {/* Thumbs up icon */}
                        </button>
                        <p className="text-gray-500">{post.likes} likes</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Last comments:</h3>
                        {post.comments.map((comment, commentIndex) => (
                            <div key={commentIndex} className="bg-gray-100 p-2 rounded-md mb-2">
                                <p className="text-gray-700">{comment}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-2">Add a comment:</h3>
                        <textarea id={`comment-${index}`} className="w-full p-2 border rounded-md mb-2" placeholder="Write a comment..."></textarea>
                        <button onClick={() => handleComment(index, document.getElementById(`comment-${index}`).value)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
                    </div>
                </motion.div>
            ))
        )}
    </motion.div>
);







}

export default MesPosts;

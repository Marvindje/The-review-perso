import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import Post from '../components/Posts';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';

function CreerPosts() {
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const newPost = { post, comments, likes, youtubeLink, files };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    setPost('');
    setComments([]);
    setLikes(0);
    setYoutubeLink('');
    setFiles([]);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    setComments((prevComments) => [...prevComments, comment]);
    event.target.reset();
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="space-y-8 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-transparent min-h-screen p-10"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.h1
        className="text-4xl font-semibold text-white glow-text mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Créer un post
      </motion.h1>
      <motion.div
        className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div {...getRootProps({className: 'dropzone w-full py-2 px-3 text-gray-700 bg-white rounded-lg border-dashed border-2 border-gray-600 cursor-pointer'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <input
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="Paste your YouTube link here"
        />
        <Post onSubmit={handlePostSubmit} value={post} onChange={(event) => setPost(event.target.value)} />
        <LikeButton likes={likes} onLike={() => setLikes((prevLikes) => prevLikes + 1)} />
        <CommentSection comments={comments} onSubmit={handleCommentSubmit} />
      </motion.div>
    </motion.div>
  );
}

export default CreerPosts;

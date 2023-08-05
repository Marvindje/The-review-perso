import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { FaThumbsUp, FaTrash, FaSync } from 'react-icons/fa'; // Import thumbs up, trash, and sync icons

function CreerPosts() {
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'});

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const newPost = { post, comments, likes, liked, youtubeLink, files };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    setPost('');
    setComments([]);
    setLikes(0);
    setLiked(false);
    setYoutubeLink('');
    setFiles([]);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    setComments((prevComments) => [...prevComments, comment]);
    event.target.reset();
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Clean up object URLs
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-semibold text-gray-700 mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Créer un post
      </motion.h1>
      <motion.div
        className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-xl m-4 relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div {...getRootProps({className: 'dropzone w-full py-2 px-3 text-gray-700 bg-white rounded-lg border-dashed border-2 border-gray-600 cursor-pointer'})}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
        <aside>
          <h4>Files</h4>
          <ul>
            {files.map(file => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
                <img src={file.preview} alt={file.path} className="mt-2 h-32 w-auto object-cover" />
              </li>
            ))}
          </ul>
        </aside>
        <input
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="Paste your YouTube link here"
        />
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          value={post}
          onChange={(event) => setPost(event.target.value)}
          placeholder="Write your post..."
        />
        <div className="flex items-center mb-4">
          <button onClick={handleLike} className="focus:outline-none">
            <FaThumbsUp className={`mr-2 ${liked ? 'text-blue-500' : ''}`} /> {/* Thumbs up icon */}
          </button>
          <p className="text-gray-500">{likes} likes</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Comments:</h3>
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-md mb-2">
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="mt-4 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Add a comment:</h3>
          <textarea className="w-full p-2 border rounded-md mb-2" placeholder="Write a comment..."></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
        <button onClick={handlePostSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4">Post</button>
      </motion.div>
    </motion.div>
  );
}

export default CreerPosts;

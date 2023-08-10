import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { FaThumbsUp } from 'react-icons/fa'; // Import thumbs up icon
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreerPosts() {
    const [post, setPost] = useState('');
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

    const handlePostSubmit = () => {
        const newPost = { post, likes, liked, youtubeLink, files };
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        setPost('');
        setLikes(0);
        setLiked(false);
        setYoutubeLink('');
        setFiles([]);
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };
  
    const handlePostClick = () => {
        if (post.trim() !== '') {
            handlePostSubmit();
            toast.success('Votre post a été soumis !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Veuillez écrire quelque chose avant de soumettre.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    // Clean up object URLs
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-transparent py-6 flex flex-col justify-center sm:py-12"
            initial={{ x: "-100vw" }} 
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
        >
            <ToastContainer />
            <motion.h1
                className="w-3/4 mx-auto text-4xl font-semibold text-gray-700 mb-6 p-5 rounded-lg shadow-md bg-gray-100 border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                initial={{ x: "-100vw" }} 
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                Créer un post
            </motion.h1>

            <motion.div
                className="w-full max-w-6xl mx-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border border-gray-300 p-12 mt-4 flex flex-col items-start justify-center transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div {...getRootProps({className: 'dropzone w-full py-2 px-3 text-gray-700 bg-white rounded-lg border-dashed border-2 border-gray-600 cursor-pointer mb-4'})}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                <aside className="mb-4">
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
                    className="w-full p-2 border rounded-md mb-4"
                />
                <textarea
                    className="w-full p-2 border rounded-md mb-4"
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
                <button onClick={handlePostClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">Post</button>
            </motion.div>
        </motion.div>
    );
}

export default CreerPosts;

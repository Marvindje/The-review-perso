import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { FaThumbsUp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import galaxyBackground from '../assets/thepage.jpeg';


function CreerPosts() {
    const [post, setPost] = useState('');
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [youtubeLink, setYoutubeLink] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [mention, setMention] = useState('');
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'});

    const handlePostSubmit = () => {
        const newPost = { post, likes, liked, youtubeLink, hashtags, mention, files };
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        setPost('');
        setLikes(0);
        setLiked(false);
        setYoutubeLink('');
        setHashtags('');
        setMention('');
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

    const renderYoutubePreview = () => {
        const youtubeId = youtubeLink.split('v=')[1];
        const ampersandPosition = youtubeId && youtubeId.indexOf('&');
        if (ampersandPosition !== -1) {
            return youtubeId.substring(0, ampersandPosition);
        }
        return youtubeId;
    };

    useEffect(() => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    return (
        <motion.div
            className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
            style={{ backgroundImage: `url(${galaxyBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ x: "-100vw" }} 
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
        >
            <ToastContainer />
            <motion.h1
                className="custom-h1 w-3/4 mx-auto text-5xl font-bold mb-6 p-5 rounded-lg shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-transparent text-white border border-indigo-400 hover:shadow-lg transform hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out cursor-pointer relative"
                initial={{ x: "-100vw" }} 
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                Partagez vos pensées avec le monde !
            </motion.h1>

            <motion.div
                className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-12 mt-4 flex flex-col items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur" // Ajout de l'effet de flou et suppression du gradient de fond
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
                {youtubeLink && (
                    <div className="mb-4">
                        <iframe 
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${renderYoutubePreview()}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </div>
                )}
                <textarea
                    className="w-full p-2 border rounded-md mb-4"
                    value={post}
                    onChange={(event) => setPost(event.target.value)}
                    placeholder="Write your post..."
                />
                <input
                    type="text"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    placeholder="Add hashtags (e.g. #React #JavaScript)"
                    className="w-full p-2 border rounded-md mb-4"
                />
                <input
                    type="text"
                    value={mention}
                    onChange={(e) => setMention(e.target.value)}
                    placeholder="Mention someone (e.g. @JohnDoe)"
                    className="w-full p-2 border rounded-md mb-4"
                />
                <div className="flex items-center mb-4">
                    <button onClick={handleLike} className="focus:outline-none">
                        <FaThumbsUp className={`mr-2 ${liked ? 'text-blue-500' : ''}`} />
                    </button>
                    <p className="text-gray-500">{likes} likes</p>
                </div>
                <button onClick={handlePostClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">Post</button>
            </motion.div>
        </motion.div>
    );
}

export default CreerPosts;

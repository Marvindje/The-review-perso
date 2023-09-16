import React, { useEffect, useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaTrash, FaSync, FaCommentDots } from 'react-icons/fa';
import noResultsImage from '../assets/noresults.png';
import galaxyBackground from '../assets/thepage.jpeg';

// Définition de l'état initial pour le réducteur. Il contient deux propriétés : 'posts' et 'currentComments'.
const initialState = {
  posts: [],
  currentComments: {},
};

// Fonction réducteur qui prend en charge la mise à jour de l'état en fonction des actions reçues.
const reducer = (state, action) => {
  switch (action.type) {
        // Si l'action est de type 'SET_POSTS', mettre à jour la propriété 'posts' de l'état avec la nouvelle valeur.
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

const MesPosts = () => {
   // Utilisation du Hook useReducer pour gérer l'état complexe des posts et des commentaires.
  const [state, dispatch] = useReducer(reducer, initialState);
  // Utilisation du Hook useState pour gérer l'état des commentaires en cours de rédaction.
  const [currentComments, setCurrentComments] = useState({});


// Utilisation du Hook useEffect pour charger les posts depuis le localStorage lorsque le composant est monté.
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      dispatch({ type: 'SET_POSTS', payload: savedPosts });
    }
  }, []);

// Fonction pour gérer les likes. Elle inverse l'état du like et met à jour le nombre de likes.
  const handleLike = (index) => {
    const newPosts = [...state.posts];
    newPosts[index].liked = !newPosts[index].liked;
    newPosts[index].likes += newPosts[index].liked ? 1 : -1;
    dispatch({ type: 'SET_POSTS', payload: newPosts });
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

// Fonction pour supprimer un post. Elle retire le post de l'array et met à jour l'état et le localStorage.
  const deletePost = (index) => {
    const newPosts = [...state.posts];
    newPosts.splice(index, 1);
    dispatch({ type: 'SET_POSTS', payload: newPosts });
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };


  // Fonction pour réinitialiser les likes d'un post. Elle remet le compteur de likes à zéro et met à jour l'état et le localStorage.
  const resetPost = (index) => {
    const newPosts = [...state.posts];
    newPosts[index].likes = 0;
    newPosts[index].liked = false;
    dispatch({ type: 'SET_POSTS', payload: newPosts });
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  // Fonction pour ajouter un commentaire à un post. Elle ajoute le commentaire à l'array de commentaires du post concerné.
  const handleComment = (index) => {
    const comment = currentComments[index];
    if (comment && comment.trim() !== '') {
      const newPosts = [...state.posts];
      if (!newPosts[index].comments) {
        newPosts[index].comments = [];
      }
      newPosts[index].comments.push(comment);
      dispatch({ type: 'SET_POSTS', payload: newPosts });
      localStorage.setItem('posts', JSON.stringify(newPosts));
      setCurrentComments({ ...currentComments, [index]: '' });
    }
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${galaxyBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='min-h-screen py-6 flex flex-col justify-center sm:py-12'
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='w-3/4 mx-auto text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md'
        style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF' }}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        My Posts
      </motion.h1>
      {state.posts.length === 0 ? (
        <motion.div
          className='text-2xl font-bold text-gray-700 mb-10 m-4'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={noResultsImage} alt='No Results' className='mt-4 w-1/2 mx-auto' />
        </motion.div>
      ) : (
        state.posts.map((post, index) => (
          <motion.div
          key={`post-${index}`}
          className='neomorph-card--large w-3/4 mx-auto bg-white shadow-lg rounded-3xl p-10 m-4 relative border border-gray-300 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-2xl font-bold' style={{ fontFamily: 'Georgia, serif', color: '#4a5568' }}>
                {post.post}
              </h2>
              <div className='flex space-x-2'>
                <button type='button' onClick={() => resetPost(index)}>
                  <FaSync className='text-xl' />
                </button>
                <button type='button' onClick={() => deletePost(index)}>
                  <FaTrash className='text-xl' />
                </button>
              </div>
            </div>
            <div className='rounded-md bg-gray-100 p-4 mb-4'>
              <p className='text-gray-700'>{post.postContent}</p>
            </div>
            {post.youtubeId && (
              <div className='mb-4'>
                <iframe
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            )}
            {post.files &&
              post.files.map((file, fileIndex) => (
                <img
                  key={`file-${fileIndex}`}
                  src={file.dataUrl}
                  alt={file.name}
                  className='mt-2 h-32 w-auto object-cover rounded-md shadow-md'
                />
              ))}
            <div className='flex items-center mb-4'>
              <button type='button' onClick={() => handleLike(index)}>
                <FaThumbsUp className={`mr-2 ${post.liked ? 'text-blue-500' : ''}`} />
              </button>
              <p className='text-gray-500'>{post.likes} likes</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold mb-2'>Last comments:</h3>
              {post.comments && Array.isArray(post.comments)
                ? post.comments.map((comment, commentIndex) => (
                    <div key={`comment-${commentIndex}`} className='bg-gray-100 p-2 rounded-md mb-2'>
                      <p className='text-gray-700'>{comment}</p>
                    </div>
                  ))
                : null}
            </div>
            <div className='mt-4 bg-gray-50 p-4 rounded-md'>
              <h3 className='text-lg font-semibold mb-2'>Add a comment:</h3>
              <textarea
                id={`comment-${index}`}
                className='w-full p-2 border rounded-md mb-2'
                placeholder='Write a comment...'
                value={currentComments[index] || ''}
                onChange={e => setCurrentComments({ ...currentComments, [index]: e.target.value })}
              />
              <motion.button type='button' onClick={() => handleComment(index)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                <FaCommentDots className='inline-block mr-2' /> Submit
              </motion.button>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
};

export default MesPosts;

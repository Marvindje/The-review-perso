import React, { useEffect, useReducer } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaThumbsUp, FaTrash, FaSync } from "react-icons/fa";
import noResultsImage from "../assets/noresults.png";
import galaxyBackground from "../assets/thepage.jpeg";

const initialState = {
  posts: [],
  currentComments: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "SET_CURRENT_COMMENTS":
      return { ...state, currentComments: action.payload };
    default:
      return state;
  }
};

function MesPosts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controls = useAnimation();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      dispatch({ type: "SET_POSTS", payload: savedPosts });
    }
  }, []);

  const handleLike = (index) => {
    const newPosts = [...state.posts];
    newPosts[index].liked = !newPosts[index].liked;
    newPosts[index].likes += newPosts[index].liked ? 1 : -1;
    dispatch({ type: "SET_POSTS", payload: newPosts });
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  const deletePost = (index) => {
    const newPosts = [...state.posts];
    newPosts.splice(index, 1);
    dispatch({ type: "SET_POSTS", payload: newPosts });
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  const resetPost = (index) => {
    const newPosts = [...state.posts];
    newPosts[index].likes = 0;
    newPosts[index].liked = false;
    newPosts[index].comments = [];
    dispatch({ type: "SET_POSTS", payload: newPosts });
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  const handleComment = async (index) => {
    const comment = state.currentComments[index];
    if (comment && comment.trim() !== "") {
      const newPosts = [...state.posts];
      if (!newPosts[index].comments) {
        newPosts[index].comments = [];
      }
      newPosts[index].comments.push(comment);
      dispatch({ type: "SET_POSTS", payload: newPosts });
      localStorage.setItem("posts", JSON.stringify(newPosts));
      dispatch({
        type: "SET_CURRENT_COMMENTS",
        payload: { ...state.currentComments, [index]: "" },
      });
      await controls.start({ scale: 1.1 });
      controls.start({ scale: 1 });
    }
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${galaxyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="w-3/4 mx-auto text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md"
        style={{ fontFamily: "Georgia, serif", color: "#FFFFFF" }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        My Posts
      </motion.h1>

      {state.posts.length === 0 ? (
        <motion.div
          className="text-2xl font-bold text-gray-700 mb-10 m-4" // Ajout de m-4 ici
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={noResultsImage}
            alt="No Results"
            className="mt-4 w-1/2 mx-auto"
          />{" "}
          {/* Ajout de l'image */}
        </motion.div>
      ) : (
        state.posts.map((post, index) => (
          <motion.div
            key={index}
            className="w-3/4 mx-auto bg-white shadow-lg rounded-3xl p-10 m-4 relative border border-gray-300 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif", color: "#4a5568" }}
              >
                {post.post}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => resetPost(index)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaSync className="text-xl" />
                </button>
                <button
                  onClick={() => deletePost(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
            <div className="rounded-md bg-gray-100 p-4 mb-4">
              <p className="text-gray-700">{post.postContent}</p>
            </div>
            {post.youtubeLink && (
              <div className="mb-4">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${renderYoutubeEmbed(
                    post.youtubeLink
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            )}
            {post.files &&
              post.files.map((file, fileIndex) => (
                <img
                  key={fileIndex}
                  src={file.dataUrl}
                  alt={file.name}
                  className="mt-2 h-32 w-auto object-cover rounded-md shadow-md"
                />
              ))}
            <div className="flex items-center mb-4">
              <button
                onClick={() => handleLike(index)}
                className="focus:outline-none"
              >
                <FaThumbsUp
                  className={`mr-2 ${post.liked ? "text-blue-500" : ""}`}
                />
              </button>
              <p className="text-gray-500">{post.likes} likes</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Last comments:</h3>
              {post.comments && Array.isArray(post.comments)
                ? post.comments.map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="bg-gray-100 p-2 rounded-md mb-2"
                    >
                      <p className="text-gray-700">{comment}</p>
                    </div>
                  ))
                : null}
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Add a comment:</h3>
              <textarea
                id={`comment-${index}`}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Write a comment..."
                value={state.currentComments[index] || ""}
                onChange={(e) =>
                  setCurrentComments({
                    ...currentComments,
                    [index]: e.target.value,
                  })
                }
              />
              <motion.button
                onClick={() => handleComment(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                whileHover={{ backgroundColor: "#2563EB" }}
                whileTap={{ backgroundColor: "#1E40AF" }}
                animate={controls}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}

export default MesPosts;

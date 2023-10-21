import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import noResultsImage from "../assets/no-results-found-illustration-nothing-in-the-box-concept-free-vector.jpeg";
import galaxyBackground from "../assets/thepage.jpeg";
import { baseUrl } from "../config/url";

function MesPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(`${baseUrl}/posts/user`, {
          withCredentials: true,
        });
        console.log(response);
        setPosts(response?.data || []);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    })();
  }, []);

  const deletePost = async (postId, index) => {
    try {
      await axios.delete(`${baseUrl}/posts/${postId}`, {
        withCredentials: true,
      });
      const newPosts = [...posts];
      newPosts.splice(index, 1);
      setPosts(newPosts);
    } catch (error) {
      console.error("An error occurred while deleting the post: ", error);
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
        className="w-3/4 mx-auto text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md text-center"
        style={{ fontFamily: "Georgia, serif", color: "#FFFFFF" }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        My Posts
      </motion.h1>
      {posts.length === 0 ? (
        <motion.div
          className="text-2xl font-bold text-gray-700 mb-10 m-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={noResultsImage}
            alt="No Results"
            className="mt-4 w-1/2 mx-auto"
          />
        </motion.div>
      ) : (
        posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="neomorph-card--large w-3/4 mx-auto shadow-lg rounded-3xl p-10 m-4 relative border border-gray-300 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-between items-center mb-4">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif", color: "#4a5568" }}
              >
                {post.title}
              </h2>
              <img
                src={post.imageUrl}
                id="imagePreview"
                alt="Image Preview"
                className="max-w-full max-h-40 rounded-md"
              />
              <div className="flex space-x-2">
                <button type="button" onClick={() => deletePost(post.id, index)}>
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
            <div className="rounded-md bg-gray-100 p-4 mb-4">
              <p className="text-gray-700">{post.content}</p>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}

export default MesPosts;

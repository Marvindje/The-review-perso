import React, { useState, useCallback, useEffect } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../config/url";
import galaxyBackground from "../assets/thepage.jpeg";

const TITLE_STRING = 'title';
const CONTENT_STRING = 'content';
const CATEGORY_ID_STRING = 'categoryId';

const fieldFormCSS = "flex flex-col w-full"

const defaultPostData = {
  [TITLE_STRING]: '',
  [CONTENT_STRING]: '',
  [CATEGORY_ID_STRING]: ''
}

function CreerPosts() {
  const [post, setPost] = useState("");
  const [postData, setPostData] = useState(defaultPostData)

  const [categories, setCategories] = useState([]);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const onChangePostData = (key, value) => {
    setPostData((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handlePostSubmit = async () => {
    try {
      const title = postData[TITLE_STRING];
      const content = postData[CONTENT_STRING];
      const categoryId = postData[CATEGORY_ID_STRING];

      if(!title || !content){
        return console.log("valeurs manquantes")
      }

      await axios.post(`${baseUrl}/posts`, {
        title,
        content,
        categoryId
      }, {
        withCredentials: true,
      })

      setPostData(defaultPostData)

      console.log('OK')
    } catch(err) {
      console.error(err)
    }
  };

  const handlePostClick = () => {
    if (post.trim() !== "") {
      handlePostSubmit();
      toast.success("Votre post a été soumis !");
    } else {
      toast.error("Veuillez écrire quelque chose avant de soumettre.");
    }
  };

  useEffect(() => {
    ;(async () => {
      try{
        const result = await axios.get(`${baseUrl}/categories`, {
          withCredentials: true,
        })
  
        setCategories(result?.data || [])
  
        const firstCategory = result?.data?.[0]?.id
  
        onChangePostData(CATEGORY_ID_STRING, firstCategory)
      } catch (err) {
        console.error(err)
      }
    })();
  }, [])

  return (
    <motion.div
      className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${galaxyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer />
      <motion.h1
        className="w-3/4 mx-auto text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md bg-transparent border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md"
        style={{
          fontFamily: "Georgia, serif",
          color: "#FFFFFF",
          textAlign: "center",
        }} // Ajout de textAlign: "center"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Share your thoughts with the world !
      </motion.h1>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '50px',
        }}
        className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-12 mt-4 flex flex-col gap-10 items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={fieldFormCSS}>
          <label for="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an category</label>
          <select 
          id="categories" 
          value={postData[CATEGORY_ID_STRING]}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => onChangePostData(CATEGORY_ID_STRING, e.target.value)}
          >
            {
              categories.map((category, index) => {
                return <option key={`${category.id}-${index}`} value={category.id}>{category.name}</option>
              })
            }
          </select>
        </div>
        <div className={fieldFormCSS}>
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a title</label>
          <input
            type="text"
            id="title" 
            value={postData[TITLE_STRING]}
            onChange={(e) => onChangePostData(TITLE_STRING, e.target.value)}
            placeholder="Enter title ..."
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className={fieldFormCSS}>
          <label for="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a content</label>
          <textarea
            id='content'
            className="w-full p-2 border rounded-md mb-4"
            value={postData[CONTENT_STRING]}
            onChange={(e) => onChangePostData(CONTENT_STRING, e.target.value)}
            placeholder="Write something ..."
          />
        </div>
        <button
          onClick={handlePostSubmit}
          className="submit-button"
        >
          <div className="button-top">Post</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default CreerPosts;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import galaxyBackground from "../assets/thepage.jpeg";
import { baseUrl } from "../config/url";

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
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    categoryId: ''
  });
  const [categories, setCategories] = useState([]);

  
  const onChangePostData = (key, value) => {
    setPostData((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  
  const handlePostSubmit = async () => {
    try {
      const { title, content, categoryId } = postData;
      if (!title || !content) {
        return console.log("Missing values");
      }

      await axios.post(`${baseUrl}/posts`, {
        title,
        content,
        categoryId
      }, {
        withCredentials: true,
      });

      setPostData({ title: '', content: '', categoryId: '' });
      toast.success("Your post has been submitted!");

    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting your post.");
    }
  };

  useEffect(() => {
    ;(async () => {
      try {
        const result = await axios.get(`${baseUrl}/categories`, {
          withCredentials: true,
        });
  
        setCategories(result?.data || [])
  
        const firstCategory = result?.data?.[0]?.id
  console.log(result)
        onChangePostData(CATEGORY_ID_STRING, firstCategory)
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
          <label for="categories" className="block mb-4 text-base font-semibold text-gray-800 dark:text-gray-100"
>Select an category</label>
          <select 
  id="categories" 
  value={postData[CATEGORY_ID_STRING]}
  className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-300"

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

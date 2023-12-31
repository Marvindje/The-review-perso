import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import galaxyBackground from "../assets/thepage.jpeg";
import { baseUrl } from "../config/url";
import "../styles/App.css";

const TITLE_STRING = 'title';
const CONTENT_STRING = 'content';
const CATEGORY_ID_STRING = 'categoryId';

const fieldFormCSS = "flex flex-col w-full"



function CreerPosts() {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    categoryId: '',
    imageUrl: ''
  });
  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);


  
  const onChangePostData = (key, value) => {
    setPostData((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  
  const handleImageChange = (e) => { 
    const file = e.target.files[0];
    setImageFile(file);

    const previewURL = URL.createObjectURL(file);
    document.getElementById('imagePreview').src = previewURL;
  }
  const handlePostSubmit = async () => {
    try {
      console.log("Submitting post with data:", postData); // Log pour le débogage
      const { title, content, categoryId, imageUrl } = postData;
      if (!title || !content) {
        return console.log("Missing values");
      }
  
      const response = await axios.post(`${baseUrl}/posts`, {
        title,
        content,
        categoryId,
        imageUrl 
      }, {
        withCredentials: true,
      });
  
      console.log("Post submitted, server response:", response);
  
      setPostData({ title: '', content: '', categoryId: '', imageUrl: ''});
      toast.success("Your post has been submitted!");
  
    } catch (err) {
      console.error("Error submitting post:", err); 
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
    
        const firstCategory = result?.data?.[0]?.id;
        console.log(result);
        onChangePostData(CATEGORY_ID_STRING, firstCategory);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  
  // Nouveau useEffect pour gérer l'aperçu de l'image
  useEffect(() => {
    if (postData.imageUrl) {
      document.getElementById('imagePreview').src = postData.imageUrl;
    }
  }, [postData.imageUrl]);

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center bg-cover bg-center py-6 sm:py-12"
      style={{ backgroundImage: `url(${galaxyBackground})` }}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer />
      <motion.h1
        className="mx-auto w-3/4 text-4xl font-semibold text-white mb-6 p-5 rounded-lg shadow-md border border-blue-500 hover:shadow-lg transition-shadow duration-300 ease-in-out backdrop-blur-md"
        style={{ fontFamily: "Georgia, serif", textAlign: "center" }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Share your thoughts!
      </motion.h1>

      <motion.div
        className="mx-auto w-full max-w-6xl p-12 mt-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col gap-10 items-start justify-center border-2 border-blue-500 backdrop-blur-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col w-full space-y-4">
          <label className="text-sm font-medium text-gray-900">Enter an Image URL</label>
          <input
            type="text"
            value={postData.imageUrl}
            onChange={(e) => onChangePostData('imageUrl', e.target.value)}
            placeholder="Enter image URL ..."
            className="p-2 rounded-md border-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          />
          <label className="text-sm font-medium text-gray-900">Or Upload an Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="p-2 rounded-md border-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          />
          <div className="flex justify-center items-center p-4 bg-gray-100 rounded-md">
            <img id="imagePreview" alt="Image Preview" className="max-w-full max-h-40 rounded-md" />
          </div>
        </div>

        <div className="flex flex-col w-full space-y-4">
          <label htmlFor="categories" className="mb-4 text-base font-semibold text-gray-800">Select categories</label>
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
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a title</label>
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
          <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a content</label>
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

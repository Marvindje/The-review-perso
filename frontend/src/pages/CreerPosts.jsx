import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { FaThumbsUp, FaFile, FaYoutube } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import galaxyBackground from "../assets/thepage.jpeg";

function CreerPosts() {
  const [post, setPost] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [mention, setMention] = useState("");
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        const base64data = reader.result;
        setFiles((prevFiles) => [
          ...prevFiles,
          { name: file.name, dataUrl: base64data },
        ]);
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handlePostSubmit = () => {
    const newPost = {
      post,
      likes,
      liked,
      youtubeId: renderYoutubePreview(),
      hashtags,
      mention,
      files,
      comments: [],
    };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    setPost("");
    setLikes(0);
    setLiked(false);
    setYoutubeLink("");
    setHashtags("");
    setMention("");
    setFiles([]);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handlePostClick = () => {
    if (post.trim() !== "") {
      handlePostSubmit();
      toast.success("Votre post a été soumis !");
    } else {
      toast.error("Veuillez écrire quelque chose avant de soumettre.");
    }
  };

  const renderYoutubePreview = () => {
    const youtubeId = youtubeLink.split("v=")[1];
    const ampersandPosition = youtubeId && youtubeId.indexOf("&");
    if (ampersandPosition !== -1) {
      return youtubeId.substring(0, ampersandPosition);
    }
    return youtubeId;
  };

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

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
        style={{ fontFamily: "Georgia, serif", color: "#FFFFFF" }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Share your thoughts with the world !
      </motion.h1>
      <motion.div
        className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-12 mt-4 flex flex-col items-start justify-center border-2 border-blue-500 rounded-md bg-opacity-50 backdrop-blur"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          {...getRootProps({
            className:
              "dropzone w-full py-2 px-3 text-gray-700 bg-white rounded-lg border-dashed border-2 border-gray-600 cursor-pointer mb-4",
          })}
        >
          <input {...getInputProps()} />
          <FaFile className="inline-block mr-2" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <aside className="mb-4">
          <h4>Files</h4>
          <ul>
            {files.map((file) => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
                <img
                  src={file.preview}
                  alt={file.path}
                  className="mt-2 h-32 w-auto object-cover"
                />
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
        <FaYoutube className="inline-block mr-2" />
        {youtubeLink && (
          <div className="mb-4">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${renderYoutubePreview()}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write something ..."
        />
      
     
    
      <button
  type="button"
  onClick={handlePostClick}
  className="px-4 py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded focus:outline-none focus:shadow-outline hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out opacity-90 hover:opacity-100"
>
  Post
</button>

      </motion.div>
    </motion.div>
  );
}

export default CreerPosts;

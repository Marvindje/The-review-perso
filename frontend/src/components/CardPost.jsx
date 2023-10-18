import React from "react";
import { usePostContext } from "../context/PostContext";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const CardPost = ({post}) => {
    const { handleLike, onIsLiked } = usePostContext();

    return (
        <motion.div
            key={`article-${post.id}`}
            className="neomorph-card"
            initial="hidden"
            animate="visible"
        >
            <h3 className="text-2xl font-header mb-2">{post.title}</h3>
            <img src={post.imageUrl} id="imagePreview" alt="Image Preview" className="max-w-full max-h-40 rounded-md" />
            <p className="text-black text-sm">{post.content}</p>
            <div onClick={() => handleLike(post.id)} className="text-4xl">
                {onIsLiked(post.id) ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
            <Link to={`/mes-posts/${post.id}`} className="button2">
                Read article
            </Link>
        </motion.div>
    )
}
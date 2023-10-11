/* eslint react/prop-types: 0 */
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import axios from 'axios';
import { useUserContext } from "./userContext";
import { baseUrl } from "../config/url";

export const PostContext = createContext();

export function PostContextProvider({ children }) {
  const { user } = useUserContext();

  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [comments, setComments] = useState([])

  useEffect(() => {
    ;(async () => {
      try{
        const postsResult = await axios.get(`${baseUrl}/posts`, {
          withCredentials: true
        })
console.log(postsResult.data);
        const likesResult = await axios.get(`${baseUrl}/likes`, {
          withCredentials: true
        })

        const commentsResult = await axios.get(`${baseUrl}/comments`, {
          withCredentials: true
        })

        setLikedPosts(likesResult.data)
        setComments(commentsResult);
        setPosts(postsResult.data);
      } catch (err) {
        console.error(err)
      }
    })();
  }, []);

  const onIsLiked = (postId) => {
    return likedPosts.some((likePost) => 
      likePost.postId === postId && likePost.userId === user?.userId
    )
  }

  const handleLike = async (postId) => {
    try{
      let result;
      const isDeleteLike = onIsLiked(postId)
      
      if(isDeleteLike) {
        await axios.delete(`${baseUrl}/likes/posts/${postId}`, {
          withCredentials: true
        })
      } else {
        result = await axios.post(`${baseUrl}/likes`, {
          postId
        }, {
          withCredentials: true
        })
      }

      setLikedPosts((prev) => {
        const likesPostsCopy = [...prev];
        
        if(isDeleteLike){
          return likesPostsCopy.filter((likePost) => likePost.postId !== postId);
        }

        return [
          ...prev,
          result?.data,
        ]
      });
    } catch (err) {
      console.error('Erreur lors du like:', err);
    }
  };

  const onSaveComment = async (postId, value) => {
    try {
      const result = await axios.post(`${baseUrl}/comments`, {
        content: value,
        postId
      }, {
        withCredentials: true
      })

      setComments((prev) => [
        ...prev,
        result.data
      ])
    } catch (err) {
      console.error(err)
    }
  };

  const value = useMemo(
    () => ({
      posts,
      likedPosts,
      onIsLiked,
      handleLike,
      onSaveComment,
    }),
    [posts, likedPosts]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const usePostContext = () => {
  return useContext(PostContext);
};

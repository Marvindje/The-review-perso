import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { postId } = useParams();
    return (
        <>
            POST_ID: {postId} 
        </>
    )
}

export default PostPage;
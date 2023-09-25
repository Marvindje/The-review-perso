import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { postId } = useParams();
    return (
        <div className="neomorph-page">
            <h1>POST_ID: {postId}</h1>
            {/* contenu ici */}
        </div>
    )
}

export default PostPage;

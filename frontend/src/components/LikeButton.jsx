import React from "react";
import PropTypes from "prop-types";

function LikeButton({ likes, onLike }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onLike}
        className="px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors rounded shadow-md"
      >
        Like Post
      </button>
      <p className="text-lg">
        {likes} {likes === 1 ? "like" : "likes"}
      </p>
    </div>
  );
}

LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default LikeButton;

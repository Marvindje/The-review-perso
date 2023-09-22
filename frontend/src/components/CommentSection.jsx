import React from "react";
import PropTypes from "prop-types";

function CommentSection({ comments, onSubmit }) {
  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="flex flex-col">
        <label className="text-lg">
          New Comment:
          <input
            name="comment"
            type="text"
            className="block w-full p-2 mt-1 border rounded"
          />
        </label>
        <button
          type="submit"
          className="self-end px-4 py-2 mt-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors rounded shadow-md"
        >
          Submit
        </button>
      </form>

      <ul className="space-y-2">
        {comments.map((comment) => (
          <li
            key={`comment id : ${comment?.id}`}
            className="p-2 border rounded "
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired, // Si onSubmit est également une prop
};

export default CommentSection;

import React from "react";
import PropTypes from "prop-types";

function Post({ onSubmit, value, onChange }) {
  return (
    <div className="mx-auto max-w-xl p-4 ">
      <form onSubmit={onSubmit} className="flex flex-col rounded shadow-md">
        <textarea
          value={value}
          onChange={onChange}
          className="resize-y min-h-[100px] p-4 text-lg mb-4"
          placeholder="What's on your mind?"
        />
        <button
          type="submit"
          className="self-end px-4 py-2 text-lg bg-blue-500 text-white rounded shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Post.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Post;

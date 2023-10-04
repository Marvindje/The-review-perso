import React, { createContext, useReducer, useContext } from 'react';

const PostStateContext = createContext();
const PostDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { posts: [] });

  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
};

export const usePostState = () => {
  const context = useContext(PostStateContext);
  if (!context) {
    throw new Error('usePostState must be used within a PostProvider');
  }
  return context;
};

export const usePostDispatch = () => {
  const context = useContext(PostDispatchContext);
  if (!context) {
    throw new Error('usePostDispatch must be used within a PostProvider');
  }
  return context;
};

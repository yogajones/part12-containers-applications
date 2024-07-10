import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    appendBlog(state, action) {
      state.push(action.payload);
      return state;
    },
    deleteBlog(state, action) {
      const id = action.payload;
      return state.filter((blog) => blog.id !== id);
    },
    likeAction(state, action) {
      const id = action.payload;
      const blog = state.find((blog) => blog.id === id);
      if (blog) {
        blog.likes++;
      }
      return state.sort((a, b) => b.likes - a.likes);
    },
    commentAction(state, action) {
      const updatedBlog = action.payload;
      const blogIndex = state.findIndex((blog) => blog.id === updatedBlog.id);
      if (blogIndex !== -1) {
        state[blogIndex] = updatedBlog;
      }
    },
  },
});

export const { likeAction, appendBlog, setBlogs, deleteBlog, commentAction } =
  blogSlice.actions;

export const updateBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (blog) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(blog);
    dispatch(appendBlog(newBlog));
  };
};

export const likeBlog = (blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.update({
      ...blog,
      likes: blog.likes + 1,
    });
    dispatch(likeAction(updatedBlog.id));
  };
};

export const commentBlog = (id, comment) => {
  return async (dispatch) => {
    const commentedBlog = await blogService.comment(id, comment);
    dispatch(commentAction(commentedBlog));
  };
};

export const removeBlog = (id) => {
  return async (dispatch) => {
    await blogService.remove(id);
    dispatch(deleteBlog(id));
  };
};

export default blogSlice.reducer;

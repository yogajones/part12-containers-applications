import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";
import { notify } from "../reducers/notificationReducer";
import { createBlog } from "../reducers/blogReducer";

const BlogForm = ({ blogFormRef }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const addBlog = (event) => {
    event.preventDefault();
    try {
      blogFormRef.current.toggleVisibility();
      dispatch(createBlog({ title, author, url }));
      dispatch(notify(`Added ${title} by ${author}`));
      setTitle("");
      setAuthor("");
      setUrl("");
    } catch (exception) {
      dispatch(notify("Failed to create blog", "error"));
    }
  };

  return (
    <Box mt={2}>
      <Typography variant="h6">Create new</Typography>
      <form onSubmit={addBlog}>
        <Box mt={1}>
          <TextField
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            label="Title"
            fullWidth
          />
        </Box>
        <Box mt={1}>
          <TextField
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            label="Author"
            fullWidth
          />
        </Box>
        <Box mt={1}>
          <TextField
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            label="URL"
            fullWidth
          />
        </Box>
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BlogForm;

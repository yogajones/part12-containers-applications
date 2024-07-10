import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { notify } from "../reducers/notificationReducer";
import { likeBlog, removeBlog, commentBlog } from "../reducers/blogReducer";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  Box,
  CardActions,
} from "@mui/material";

const Blog = ({ blog }) => {
  const user = useSelector((state) => state.user.current);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  if (!blog) {
    return null;
  }

  const like = (event) => {
    event.preventDefault();
    try {
      dispatch(likeBlog(blog));
      dispatch(notify(`You liked: ${blog.title}`));
    } catch (error) {
      dispatch(notify("Failed to like blog."));
    }
  };

  const remove = (event) => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${blog.title}?`)) {
      try {
        dispatch(removeBlog(blog.id));
        dispatch(notify("Blog deleted!"));
      } catch (error) {
        dispatch(notify("Failed to delete blog."));
      }
    }
  };

  const addComment = (event) => {
    event.preventDefault();
    try {
      dispatch(commentBlog(blog.id, comment));
      dispatch(notify(`Comment added!`));
      setComment("");
    } catch (error) {
      dispatch(notify("Failed to add comment."));
    }
  };

  return (
    <Card sx={{ p: 5, marginTop: "86px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          <b>{blog.title}</b> ({blog.author})
        </Typography>
        <Typography variant="body2">
          Likes: {blog.likes}
          <Button size="small" onClick={like} sx={{ ml: 1 }}>
            like
          </Button>
        </Typography>
        <Typography variant="body2">{blog.url}</Typography>
        {blog.user && blog.user.username && (
          <Typography>Added by {blog.user.username}</Typography>
        )}
        {blog.user &&
          blog.user.username &&
          blog.user.username === user.username && (
            <Button color="error" onClick={remove}>
              remove
            </Button>
          )}
      </CardContent>
      <CardActions>
        <Typography variant="h6">Comments</Typography>
        <Box
          component="form"
          onSubmit={addComment}
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Add a comment"
            sx={{ mr: 1 }}
          />
          <Button type="submit" variant="contained" color="primary">
            add
          </Button>
        </Box>
      </CardActions>
      <List>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <ListItem key={index}>&quot;{comment}&quot;</ListItem>
          ))
        ) : (
          <ListItem>No comments yet.</ListItem>
        )}
      </List>
    </Card>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;

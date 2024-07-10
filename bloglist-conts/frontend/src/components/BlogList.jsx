import { useSelector } from "react-redux";
import { useRef } from "react";
import BlogForm from "./BlogForm";
import BlogLink from "./BlogLink";
import Togglable from "./Togglable";
import { Typography, List, ListItem, Container, Box } from "@mui/material";

const BlogList = () => {
  const blogs = useSelector(({ blogs }) => blogs);
  const blogFormRef = useRef();

  return (
    <Container sx={{ p: 5, marginTop: "86px" }}>
      <Typography variant="h3" gutterBottom>
        All blogs
      </Typography>
      <Togglable buttonLabel="create new" ref={blogFormRef}>
        <BlogForm blogFormRef={blogFormRef} />
      </Togglable>
      <List sx={{ marginTop: "50px" }}>
        {blogs.map((blog) => (
          <ListItem key={blog.id} divider>
            <Box sx={{ width: "100%" }}>
              <BlogLink blog={blog} />
            </Box>{" "}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BlogList;

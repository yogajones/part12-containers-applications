import { Link as RouterLink } from "react-router-dom";
import { Card, CardActionArea, Typography } from "@mui/material";

const BlogLink = ({ blog }) => {
  return (
    <Card>
      <CardActionArea component={RouterLink} to={`/blogs/${blog.id}`}>
        <Typography variant="body1" sx={{ p: 1 }}>
          <b>{blog.title}</b> by {blog.author}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default BlogLink;

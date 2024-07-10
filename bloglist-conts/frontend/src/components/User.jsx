import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
} from "@mui/material";

const User = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <Container sx={{ p: 5, marginTop: "64px" }}>
      <Typography variant="h5" gutterBottom>
        Blogs added by {user.name}
      </Typography>
      <List>
        {user.blogs.map((blog) => (
          <ListItem key={blog.id} divider>
            <Box sx={{ width: "100%" }}>
              <ListItemText primary={blog.title} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default User;

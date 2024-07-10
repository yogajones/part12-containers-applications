import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NavigationBar = () => {
  const user = useSelector((state) => state.user.current);
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Button color="inherit" component={RouterLink} to="/blogs">
            Blogs
          </Button>
          <Button color="inherit" component={RouterLink} to="/users">
            Users
          </Button>
        </Box>
        <Typography variant="body1" sx={{ marginRight: 2 }}>
          Hi, {user.username}!
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

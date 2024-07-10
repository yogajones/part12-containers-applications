import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
  Container,
  Box,
} from "@mui/material";

const Users = () => {
  const allUsers = useSelector((state) => state.user.all);

  return (
    <Container sx={{ p: 5, marginTop: "64px" }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User</TableCell>
              <TableCell align="right">Blogs added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers &&
              allUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row" align="center">
                    <Box>
                      <Link component={RouterLink} to={`/users/${user.id}`}>
                        {user.name}
                      </Link>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{user.blogs.length}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;

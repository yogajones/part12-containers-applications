import { useSelector } from "react-redux";
import { Container, Alert } from "@mui/material";

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);
  const { message, type } = notification;

  if (!message) {
    return null;
  }

  return (
    <Container
      style={{ position: "fixed", top: "80px", width: "100%", zIndex: 9999 }}
    >
      <Alert severity={type}>{message}</Alert>
    </Container>
  );
};

export default Notification;

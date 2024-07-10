import { useState, useImperativeHandle, forwardRef } from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  return (
    <div>
      <Box display={visible ? "none" : "block"}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </Button>
      </Box>
      <Box display={visible ? "block" : "none"}>
        {props.children}
        <Button onClick={toggleVisibility}>cancel</Button>
      </Box>
    </div>
  );
});

Togglable.displayName = "Togglable";

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;

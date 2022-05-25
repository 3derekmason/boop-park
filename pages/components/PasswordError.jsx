import { Typography } from "@mui/material";

const PasswordError = () => {
  return (
    <Typography style={{ color: "#d50000" }} component="p" variant="caption">
      Passwords must match...
    </Typography>
  );
};

export default PasswordError;

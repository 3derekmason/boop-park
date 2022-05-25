import { Typography } from "@mui/material";

const PasswordError = () => {
  return (
    <Typography
      style={{
        width: "100%",
        color: "#d50000",
        textAlign: "center",
        marginTop: "4px",
      }}
      component="p"
      variant="caption"
    >
      Passwords must match...
    </Typography>
  );
};

export default PasswordError;

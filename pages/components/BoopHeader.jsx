import { Typography } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const BoopHeader = () => {
  return (
    <Typography
      component="h1"
      variant="caption"
      color="secondary"
      style={{
        fontSize: "40px",
        marginBottom: "40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      Boop <SportsBasketballIcon style={{ fontSize: "40px" }} /> Park
    </Typography>
  );
};

export default BoopHeader;

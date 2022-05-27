import { Typography } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import styles from "./boopHeader.module.css";

const BoopHeader = () => {
  return (
    <Typography className={styles.header} component="h1" color="secondary">
      Boop <SportsBasketballIcon className={styles.icon} /> Park
    </Typography>
  );
};

export default BoopHeader;

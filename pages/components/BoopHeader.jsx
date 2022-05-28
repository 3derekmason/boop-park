import { Typography } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import styles from "./boopHeader.module.scss";

const BoopHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <Typography className={styles.header} component="h1" color="secondary">
        Boop <SportsBasketballIcon className={styles.icon} /> Park
      </Typography>
    </div>
  );
};

export default BoopHeader;

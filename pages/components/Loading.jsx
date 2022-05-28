import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <Box className={styles.loadingBox}>
        <LinearProgress color="secondary" />
      </Box>
      <Box className={styles.loadingBox}>
        <LinearProgress color="secondary" />
      </Box>
      <Box className={styles.loadingBox}>
        <LinearProgress color="primary" />
      </Box>
      <Box className={styles.loadingBox}>
        <LinearProgress color="secondary" />
      </Box>
      <Box className={styles.loadingBox}>
        <LinearProgress color="secondary" />
      </Box>
    </div>
  );
};

export default Loading;

import { Paper, Typography } from "@mui/material";

import styles from "./login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <Paper elevation={4} className={styles.loginSideBar}>
        <Typography component={"p"} variant="caption">
          Not a user? Sign in here.
        </Typography>
      </Paper>
    </div>
  );
};
export default LoginPage;

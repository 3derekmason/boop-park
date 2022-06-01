import {
  Container,
  CardMedia,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  Modal,
} from "@mui/material";
import { useAppContext } from "../../context/state";
import styles from "./welcome.module.scss";

const Welcome = ({ open, close }) => {
  const { router, currentUser, setCurrentUser } = useAppContext();
  return (
    <Modal className={styles.welcomeModal} open={open} onClose={close}>
      <div className={styles.welcomeMessage}>
        <Typography color="secondary" component="h2" variant="h4">
          Welcome to Boop Park, {currentUser?.username}!
        </Typography>
        <Typography variant="h6" className={styles.notice}>
          Please note:
        </Typography>
        <Typography style={{ color: "#eeefff" }} component="p" variant="body1">
          All workouts are intended to improve your body, but also to be fun!
          Please listen to your body and never push yourself too hard while
          training.
        </Typography>
        <Typography color="secondary" component="p" variant="caption">
          Features are still in production and being added every day, so keep an
          eye out for changes
        </Typography>
        <div className={styles.btnRow}>
          <Button
            variant="outlined"
            style={{ color: "#d50000" }}
            onClick={() => {
              close();
              setCurrentUser("");
              router.push("/");
            }}
          >
            Nevermind
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              router.push("/");
            }}
          >
            I Understand
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Welcome;

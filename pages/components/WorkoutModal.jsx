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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import styles from "./workoutModal.module.css";

const WorkoutModal = ({ workout, open, handleClose }) => {
  const levels = [1, 2, 3];
  const [chosenLevel, setChosenLevel] = useState(levels[0]);
  const levelUp = () => {
    setChosenLevel(chosenLevel + 1);
  };
  const levelDown = () => {
    setChosenLevel(chosenLevel - 1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container className={styles.modalContainer} maxWidth={"sm"}>
        <Paper className={styles.workoutModal} elevation={3}>
          <CardMedia
            component="img"
            image={workout?.img}
            alt={`${workout?.title} image`}
            height="160"
          />
          <div className={styles.modalBody}>
            <Typography component="h2" variant="h3">
              {workout?.title}
            </Typography>
            <Typography component="p" variant="body1">
              {workout?.desc}
            </Typography>
            {/* Equipment */}
            <div className={styles.equipment}>
              <Typography component="h3" variant="subtitle1">
                Equipment needed:
              </Typography>
              <Typography component="p" variant="body2">
                {JSON.stringify(workout?.equipment)}
              </Typography>
            </div>
          </div>
          <div className={styles.levelRow}>
            <Typography component="p" variant="body1">
              Choose Level:
            </Typography>
            <IconButton
              disabled={chosenLevel === levels[0]}
              aria-label="previous"
              onClick={levelDown}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography component="h4" variant="h5" color="primary">
              {chosenLevel}
            </Typography>
            <IconButton
              disabled={chosenLevel === levels[levels.length - 1]}
              aria-label="previous"
              onClick={levelUp}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <div className={styles.timeAndSubmit}>
            <Typography component="p" variant="caption">
              Estimated time: {workout?.level?.estTime || "n/a"}
            </Typography>

            <Button fullWidth variant="contained" color="secondary">
              Begin
            </Button>
            <Button onClick={handleClose} style={{ color: "#B71C1C" }}>
              Back
            </Button>
          </div>
        </Paper>
      </Container>
    </Modal>
  );
};

export default WorkoutModal;

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
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/state";
import styles from "./workoutModal.module.css";

const WorkoutModal = ({ workout, open, handleClose }) => {
  const availableLevels = workout?.levels;
  const { currentWorkout, setCurrentWorkout, router } = useAppContext(
    workout?.levels?.[0]
  );
  const [chosenLevelIndex, setChosenLevelIndex] = useState(0);

  const handleWorkoutChange = (index) => {
    setCurrentWorkout({ title: workout?.title, rx: workout?.levels[index] });
  };
  const levelUp = () => {
    setChosenLevelIndex(chosenLevelIndex + 1);
  };
  const levelDown = () => {
    setChosenLevelIndex(chosenLevelIndex - 1);
  };

  return (
    <Modal
      className={styles.modalPage}
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
              <Typography component="h3" variant="subtitle1" color="secondary">
                Equipment needed:
              </Typography>
              {workout?.equipment.map((item, i) => {
                return (
                  <Typography key={i} component="p" variant="caption">
                    {item}
                  </Typography>
                );
              })}
            </div>
          </div>
          <div className={styles.levelRow}>
            <Typography component="p" variant="body1">
              Choose Level:
            </Typography>
            <IconButton
              disabled={chosenLevelIndex === 0}
              aria-label="previous"
              onClick={() => {
                levelDown();
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography component="h4" variant="h5" color="primary">
              {chosenLevelIndex + 1}
            </Typography>
            <IconButton
              disabled={
                chosenLevelIndex ===
                availableLevels?.[availableLevels.length - 1].level - 1
              }
              aria-label="previous"
              onClick={() => {
                levelUp();
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <div className={styles.timeAndSubmit}>
            <Typography component="p" variant="caption">
              Estimated time: {workout?.estTime || "n/a"}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {
                handleWorkoutChange(chosenLevelIndex);
                router.push("/workout");
              }}
            >
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

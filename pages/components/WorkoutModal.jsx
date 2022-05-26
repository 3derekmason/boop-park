import {
  Container,
  CardMedia,
  Button,
  Paper,
  Typography,
  Modal,
} from "@mui/material";
import { useState } from "react";
import styles from "./workoutModal.module.css";

const WorkoutModal = ({ workout, open, handleClose }) => {
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
          <Typography component="p" variant="caption">
            Estimated time: {workout?.estTime}
          </Typography>
          <Button variant="contained" color="secondary">
            Begin
          </Button>
        </Paper>
      </Container>
    </Modal>
  );
};

export default WorkoutModal;

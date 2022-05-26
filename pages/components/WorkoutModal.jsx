import { Container, Button, Paper, Typography, Modal } from "@mui/material";
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
          <Typography component="h2" variant="h3">
            {workout?.title}
          </Typography>
          <Typography component="p" variant="body1">
            {workout?.desc}
          </Typography>
          {/* Equipment */}
          <div>
            <Typography component="h3" variant="subtitle1">
              Equipment needed:
            </Typography>
            <Typography component="p" variant="body2">
              {JSON.stringify(workout?.equipment)}
            </Typography>
          </div>
          <div>
            <Button variant="contained">Begin</Button>
          </div>
        </Paper>
      </Container>
    </Modal>
  );
};

export default WorkoutModal;

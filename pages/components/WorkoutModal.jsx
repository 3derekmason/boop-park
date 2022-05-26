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
        <Paper className={styles.workoutModal} elevation={3}></Paper>
      </Container>
    </Modal>
  );
};

export default WorkoutModal;

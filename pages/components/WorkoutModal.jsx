import { Container, Button, Paper, Typography, Modal } from "@mui/material";
import { useState } from "react";

const WorkoutModal = ({ workout, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth={"sm"}>
        <Paper elevation={3} style={{ width: "100%", height: "50%" }}></Paper>
      </Container>
    </Modal>
  );
};

export default WorkoutModal;

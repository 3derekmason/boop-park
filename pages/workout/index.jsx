import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useAppContext } from "../../context/state";
import styles from "./workout.module.css";
import HomeAppBar from "../components/HomeAppbar";

const WorkoutPage = () => {
  const { currentWorkout, setCurrentWorkout } = useAppContext();
  return (
    <div className={styles.workoutPage}>
      <HomeAppBar />
      <Box className={styles.workoutContainer}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          {currentWorkout?.title}
        </Typography>
        <Typography variant="h5" align="center" color="secondary" paragraph>
          Level {currentWorkout?.rx?.level}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Back to Home</Button>
          <Button variant="outlined">Next</Button>
        </Stack>
      </Box>
    </div>
  );
};
export default WorkoutPage;

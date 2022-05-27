import {
  Box,
  Button,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../context/state";
import { useState } from "react";
import styles from "./workout.module.css";
import HomeAppBar from "../components/HomeAppbar";
import LoginPage from "../login";

const WorkoutPage = () => {
  const { currentWorkout, setCurrentWorkout, router, currentUser } =
    useAppContext();
  const [currentExercise, setCurrentExercise] = useState(
    currentWorkout?.rx?.exercises?.[0]
  );
  return !currentUser.username ? (
    <LoginPage />
  ) : (
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

        {JSON.stringify(currentExercise?.name) || ""}
        <CardMedia
          component="img"
          image={currentExercise?.pics?.[0] || ""}
          alt={`${currentExercise?.name} image`}
          height="240"
        />
        {JSON.stringify(currentExercise?.sets) || ""}

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant="contained"
          >
            Back to Home
          </Button>
          <Button variant="outlined">Next</Button>
        </Stack>
      </Box>
    </div>
  );
};
export default WorkoutPage;

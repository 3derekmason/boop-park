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
import styles from "./workout.module.scss";
import HomeAppBar from "../components/HomeAppbar";
import LoginPage from "../login";
import Exercise from "./components/Exercise";

const exIndex = 0;
const completed = false;

const WorkoutPage = () => {
  const { currentWorkout, setCurrentWorkout, router, currentUser } =
    useAppContext();

  const [currentExercise, setCurrentExercise] = useState(
    currentWorkout?.rx?.exercises?.[exIndex]
  );
  const max = currentWorkout?.rx?.exercises?.length - 1;
  const nextExercise = () => {
    exIndex++;
    if (exIndex === max + 1) {
      completed = true;
    }
    setCurrentExercise(currentWorkout?.rx?.exercises?.[exIndex]);
  };
  const prevExercise = () => {
    console.log(exIndex);
    exIndex--;
    console.log(exIndex, max);
    setCurrentExercise(currentWorkout?.rx?.exercises?.[exIndex]);
  };
  return !currentUser?.username ? (
    <LoginPage />
  ) : (
    <div className={styles.workoutPage}>
      <HomeAppBar />
      <Box className={styles.workoutContainer}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          {currentWorkout?.title}
        </Typography>
        <Typography variant="h5" align="center" color="secondary" paragraph>
          Level {currentWorkout?.rx?.level}
        </Typography>

        <Exercise exerciseData={currentExercise} />
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            onClick={prevExercise}
            variant="outlined"
            disabled={exIndex === 0}
          >
            Prev
          </Button>
          <Button
            onClick={nextExercise}
            variant="outlined"
            disabled={exIndex === max + 1}
          >
            Next
          </Button>
        </Stack>
        {!completed ? (
          <Button
            fullWidth
            size="small"
            onClick={() => {
              exIndex = 0;
              router.push("/");
            }}
            color="secondary"
            variant="contained"
            sx={{ my: 2 }}
          >
            Back to Home
          </Button>
        ) : (
          <Button
            fullWidth
            size="small"
            onClick={() => {
              exIndex = 0;
              completed = false;
              router.push("/");
            }}
            color="primary"
            variant="contained"
            sx={{ my: 2 }}
          >
            Great Job! Complete Workout
          </Button>
        )}
      </Box>
    </div>
  );
};
export default WorkoutPage;

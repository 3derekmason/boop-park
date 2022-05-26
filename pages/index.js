import { useAppContext } from "../context/state";
import { Button, Container, Typography, Stack, Grid } from "@mui/material";
import Loading from "./components/Loading";
import HomeAppBar from "./components/HomeAppbar";
import LoginPage from "./login";
import styles from "./landing.module.css";
import WorkoutCard from "./components/WorkoutCard";
import capetilize from "../util/capetilize";
import getDayOfWeek from "../util/getDayOfWeek";
import workouts from "./api/db/workouts.json";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();
  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>
      <HomeAppBar />
      <Container className={styles.landingContainer} maxWidth="m">
        <Typography
          className={styles.landingHeader}
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Happy {getDayOfWeek()},{" "}
          {capetilize(currentUser.first_name ? currentUser.first_name : "")}!
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          Choose a training program below to get started.
        </Typography>
      </Container>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={4}>
          {workouts.map((workout, i) => (
            <WorkoutCard key={i} data={{ workout }} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;

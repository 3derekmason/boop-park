import { useAppContext } from "../context/state";
import { Button, Container, Typography, Stack, Grid } from "@mui/material";
import Loading from "./components/Loading";
import HomeAppBar from "./components/HomeAppbar";
import LoginPage from "./login";
import styles from "./landing.module.scss";
import WorkoutCard from "./components/WorkoutCard";
import capatilize from "../util/capatilize";
import getDayOfWeek from "../util/getDayOfWeek";
import workouts from "./api/db/workouts.json";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();
  return !currentUser?.username ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>
      <HomeAppBar />
      <Container className={styles.headerContainer} maxWidth="m">
        <Typography
          className={styles.landingHeader}
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          Happy {getDayOfWeek()}, {capatilize(currentUser?.first_name)}!
        </Typography>
        <Typography
          component="p"
          variant="h5"
          align="center"
          style={{ width: "100%" }}
        >
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
      <Typography
        color="primary"
        style={{
          textAlign: "center",
          letterSpacing: "2px",
          fontWeight: 200,
          padding: "16px",
        }}
        component="p"
        variant="caption"
      >
        Boop Park is a part of Sadies Gym, est. 2022
      </Typography>
    </div>
  );
};

export default Landing;

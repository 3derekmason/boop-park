import { useAppContext } from "../context/state";
import { Button, Container, Typography, Stack, Grid } from "@mui/material";
import Loading from "./components/Loading";
import HomeAppBar from "./components/HomeAppbar";
import LoginPage from "./login";
import styles from "./landing.module.css";
import WorkoutCard from "./components/WorkoutCard";
import capetilize from "../util/capetilize";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();
  const cards = [1, 2, 3];
  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>
      <HomeAppBar />
      <Container className={styles.landingContainer} maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hello, {capetilize(currentUser.first_name)}!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Choose a training program below to get started.
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <WorkoutCard key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;

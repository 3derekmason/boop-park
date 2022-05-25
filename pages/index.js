import { useAppContext } from "../context/state";
import {
  Button,
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import Loading from "./components/Loading";
import HomeAppBar from "./components/HomeAppbar";
import LoginPage from "./login";
import styles from "./landing.module.css";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();
  const cards = [1, 2, 3, 4];
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
          Hello, {currentUser.first_name}
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
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;

import {
  Button,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
const WorkoutCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/PHIgYUGQPvU"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Workout Name
          </Typography>
          <Typography>Short workout description.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default WorkoutCard;

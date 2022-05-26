import {
  Button,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import styles from "./workoutCard.module.css";
const WorkoutCard = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Button style={{ textTransform: "none" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          className={styles.workoutCard}
        >
          <CardMedia
            component="img"
            image="https://source.unsplash.com/PHIgYUGQPvU"
            alt={`${data?.workout?.title} image`}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontSize: 40, fontWeight: 200 }}
            >
              {data?.workout?.title}
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              {data?.workout?.desc}
            </Typography>
          </CardContent>
          {/* <CardActions>
          <Button size="small">View</Button>
        </CardActions> */}
        </Card>
      </Button>
    </Grid>
  );
};
export default WorkoutCard;

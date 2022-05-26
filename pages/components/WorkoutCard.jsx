import {
  Button,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
const WorkoutCard = ({ data }) => {
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
          alt={`${data?.workout?.title} image`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {data?.workout?.title}
          </Typography>
          <Typography>{data?.workout?.desc}</Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">View</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};
export default WorkoutCard;

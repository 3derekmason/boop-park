import {
  Button,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Modal,
} from "@mui/material";
import { useState } from "react";
import styles from "./workoutCard.module.css";
import WorkoutModal from "./WorkoutModal";
const WorkoutCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          style={{ textTransform: "none", textAlign: "left" }}
          onClick={handleOpen}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "320px",
            }}
            className={styles.workoutCard}
          >
            <CardMedia
              component="img"
              image={data?.workout?.img}
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
              <Typography sx={{ fontWeight: 200, textAlign: "left" }}>
                {data?.workout?.desc}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
      <WorkoutModal
        workout={data?.workout}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default WorkoutCard;

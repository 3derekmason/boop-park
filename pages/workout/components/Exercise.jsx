import { Avatar, Box, Typography } from "@mui/material";
import styles from "./exercise.module.scss";
import Image from "material-ui-image";

const Exercise = ({ exerciseData }) => {
  return (
    <div className={styles.exercise}>
      <Typography color="primary" component="h2" variant="h5">
        {exerciseData?.name || ""}
      </Typography>
      <div className={styles.helperPics}>
        {exerciseData?.pics?.map((picture, i) => {
          return (
            <Image
              imageStyle={{
                width: 240,
                height: 160,
                position: "relative",
              }}
              style={{ position: "relative", padding: 0 }}
              key={i}
              src={picture || ""}
              alt={`${exerciseData?.name} image`}
            />
          );
        })}
      </div>
      <div className={styles.setContainer}>
        {exerciseData?.sets?.map((set, i) => {
          return <li key={i}>{set}</li>;
        })}
      </div>
    </div>
  );
};
export default Exercise;

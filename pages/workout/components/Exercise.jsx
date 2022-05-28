import { Avatar, Box, Typography } from "@mui/material";
import styles from "./exercise.module.scss";
import Image from "material-ui-image";

const Exercise = ({ exerciseData }) => {
  return (
    <div className={styles.exercise}>
      <Typography color="primary" component="h2" variant="h4">
        {exerciseData?.name || ""}
      </Typography>
      <div className={styles.helperImages}>
        {exerciseData?.pics?.map((picture, i) => {
          console.log(picture);
          return (
            <Image
              key={i}
              src={picture || ""}
              alt={`${exerciseData?.name} image`}
            />
          );
        })}
      </div>
      <div>
        {exerciseData?.sets?.map((set, i) => {
          return <li key={i}>{set}</li>;
        })}
      </div>
    </div>
  );
};
export default Exercise;

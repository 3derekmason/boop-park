import { CardMedia, Typography } from "@mui/material";

const Exercise = ({ exerciseData }) => {
  return (
    <div>
      <Typography color="primary" component="h2" variant="h4">
        {exerciseData?.name || ""}
      </Typography>
      <div>
        <CardMedia
          component="img"
          image={exerciseData?.pics?.[0] || ""}
          alt={`${exerciseData?.name} image`}
          height="240"
        />
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

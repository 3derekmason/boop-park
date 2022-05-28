import { CardMedia } from "@mui/material";

const Exercise = ({ exerciseData }) => {
  return (
    <div>
      {exerciseData?.name || ""}
      <CardMedia
        component="img"
        image={exerciseData?.pics?.[0] || ""}
        alt={`${exerciseData?.name} image`}
        height="240"
      />
      {JSON.stringify(exerciseData?.sets) || ""}
    </div>
  );
};
export default Exercise;

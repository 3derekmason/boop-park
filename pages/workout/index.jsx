import { Card } from "@mui/material";
import { useAppContext } from "../../context/state";

const WorkoutPage = () => {
  const { currentWorkout, setCurrentWorkout } = useAppContext();

  return <Card>{JSON.stringify(currentWorkout)}</Card>;
};
export default WorkoutPage;

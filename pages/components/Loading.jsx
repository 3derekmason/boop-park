import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <div className="loading">
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default Loading;

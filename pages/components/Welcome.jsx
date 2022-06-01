import {
  Container,
  CardMedia,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  Modal,
} from "@mui/material";

const Welcome = ({ welcome, close }) => {
  return <Modal open={welcome} onClose={close}></Modal>;
};

export default Welcome;

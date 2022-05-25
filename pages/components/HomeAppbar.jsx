import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useAppContext } from "../../context/state";

const HomeAppBar = () => {
  const { setCurrentUser } = useAppContext();
  const logout = () => {
    setCurrentUser("");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Boop Park
          </Typography>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomeAppBar;

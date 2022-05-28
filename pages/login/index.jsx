import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "./login.module.scss";
import BoopHeader from "../components/BoopHeader";
import Loading from "../components/Loading";
import { useAppContext } from "../../context/state";
import { useState } from "react";

const LoginPage = () => {
  const { currentUser, setCurrentUser, router } = useAppContext();
  const defaultValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => {
    setLoading(true);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleLoading();
    const user = {
      username: formValues.username,
      password: formValues.password,
    };
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setFormValues(defaultValues);
    router.push("/");
  };

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.loginPage}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={4} className={styles.loginSideBar}>
          <Box className={styles.loginForm}>
            <BoopHeader />
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon color="neutral" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formValues.username}
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleInputChange}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Link href="/signup" variant="body2">
              {"Not a user? Sign Up"}
            </Link>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default LoginPage;

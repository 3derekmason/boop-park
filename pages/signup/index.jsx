import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import PasswordError from "../components/PasswordError";
import styles from "./signup.module.scss";
import BoopHeader from "../components/BoopHeader";
import Welcome from "../components/Welcome";
import { useAppContext } from "../../context/state";

const SignUpPage = () => {
  const { currentUser, setCurrentUser, router } = useAppContext();
  const [welcome, setWelcome] = useState(false);
  const [errMessage, toggleErrMessage] = useState(false);
  const handleWelcomeOpen = () => {
    setWelcome(true);
  };

  const handleWelcomeClose = () => {
    setWelcome(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("verifyPassword")) {
      toggleErrMessage(true);
      return;
    } else {
      toggleErrMessage(false);
    }
    const newUser = {
      first: data.get("firstName"),
      last: data.get("lastName"),
      username: data.get("username"),
      password: data.get("password"),
    };
    if (!newUser.username || !newUser.password) {
      return;
    }
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        // router.push("/");
        handleWelcomeOpen();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.signUpPage}>
      <Container component="div" maxWidth="xs">
        <Box className={styles.signUpForm}>
          <BoopHeader />
          {/* <Avatar>
            <LockOutlinedIcon color="primary" />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="verifyPassword"
                  label="Confirm Password"
                  type="password"
                  id="verifyPassword"
                />
              </Grid>
              {errMessage ? <PasswordError /> : ""}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Welcome
        open={welcome}
        close={handleWelcomeClose}
        currentUser={currentUser}
      />
    </div>
  );
};

export default SignUpPage;

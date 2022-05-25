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
import { useEffect, useState } from "react";
import PasswordError from "../components/PasswordError";
import styles from "./signup.module.css";

const SignUpPage = () => {
  const [errMessage, toggleErrMessage] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("verifyPassword")) {
      toggleErrMessage(true);
      return;
    } else {
      toggleErrMessage(false);
    }
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      verify: data.get("verifyPassword"),
    });
  };

  useEffect(() => {});

  return (
    <div className={styles.signUpPage}>
      <Container component="div" maxWidth="xs">
        <Box className={styles.signUpForm}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
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
    </div>
  );
};

export default SignUpPage;

import { useAppContext } from "../context/state";
import { Button } from "@mui/material";
import Loading from "./components/Loading";
import LoginPage from "./login";
import styles from "./landing.module.css";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();

  const logout = () => {
    setCurrentUser("");
  };
  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>
      Welcome, {currentUser.username}!<Button onClick={logout}>Log out</Button>
    </div>
  );
};

export default Landing;

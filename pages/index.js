import { useAppContext } from "../context/state";
import { Button } from "@mui/material";
import Loading from "./components/Loading";
import HomeAppBar from "./components/HomeAppbar";
import LoginPage from "./login";
import styles from "./landing.module.css";

const Landing = () => {
  const { currentUser, setCurrentUser } = useAppContext();

  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>
      <HomeAppBar />
      Welcome, {currentUser.username}!
    </div>
  );
};

export default Landing;

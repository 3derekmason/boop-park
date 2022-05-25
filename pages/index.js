import { useAppContext } from "../context/state";

import Loading from "./components/Loading";
import LoginPage from "./login";
import styles from "./landing.module.css";

const Landing = () => {
  const { currentUser } = useAppContext();
  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className={styles.landingPage}>Welcome, {currentUser.username}!</div>
  );
};

export default Landing;

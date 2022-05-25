import { useAppContext } from "../context/state";
import Loading from "./components/Loading";
import LoginPage from "./login";

const Landing = () => {
  const { currentUser } = useAppContext();
  return !currentUser ? (
    <LoginPage />
  ) : (
    <div className="homepage">{JSON.stringify(currentUser)}</div>
  );
};

export default Landing;

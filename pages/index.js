import { useState, useEffect } from "react";
import { useAppContext } from "../context/state";
import Loading from "./components/Loading";

const HomePage = () => {
  const { currentUser, router } = useAppContext();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return !currentUser ? (
    <Loading />
  ) : (
    <div className="homepage">{JSON.stringify(currentUser)}</div>
  );
};

export default HomePage;

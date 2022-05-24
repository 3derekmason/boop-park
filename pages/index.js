import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/state";
import Loading from "./components/Loading";

const HomePage = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();

  useEffect(() => {
    function toLogin() {
      router.push("/login");
    }
    if (!currentUser) {
      toLogin();
    }
  }, [currentUser, router]);

  return !currentUser ? <Loading /> : <div className="homepage">Home Page</div>;
};

export default HomePage;

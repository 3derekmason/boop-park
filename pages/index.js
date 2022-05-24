import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    function toLogin() {
      router.push("/login");
    }
    if (!currentUser) {
      toLogin();
    }
  }, [currentUser]);

  return <div className="homepage">Home Page</div>;
};

export default HomePage;

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentWorkout, setCurrentWorkout] = useState();
  const router = useRouter();
  let sharedState = {
    currentUser,
    setCurrentUser,
    router,
    currentWorkout,
    setCurrentWorkout,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

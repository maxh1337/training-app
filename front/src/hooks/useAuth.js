import { useContext } from "react";
import { AuthContext } from "../conxexts/AuthContext";

export const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return {
    isAuth,
    setIsAuth,
  };
};


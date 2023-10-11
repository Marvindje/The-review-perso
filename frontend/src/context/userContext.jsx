/* eslint react/prop-types: 0 */
import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [user, setUser] = useState({});
  const [isLoged, setIsLoged] = useState(false);

  const onChangeUser = (userInput) => {
    if (!userInput) return;

    setUser(userInput);
  };

  const onLogout = () => {
    removeCookie("token");
    setUser({});
    setIsLoged(false);
    useNavigate('/')
  };

  useEffect(() => {
    if (cookies.token) {
      const cookieUser = jwtDecode(cookies.token);

      onChangeUser(cookieUser);
    }
  }, [cookies.token]);

  useEffect(() => {
    setIsLoged(!!user.userId);
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      onChangeUser,
      onLogout,
      isLoged,
    }),
    [user, isLoged]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
  return useContext(UserContext);
};

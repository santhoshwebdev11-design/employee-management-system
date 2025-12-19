import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext({
  employees: [],
  admin: null
});

const AuthContextProveder = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: null
  });

  useEffect(() => {
    // create localstorage default data if missing
    setLocalStorage();

    // get data from localstorage
    const { employees, admin } = getLocalStorage();

    // update state so UI refreshes
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProveder;

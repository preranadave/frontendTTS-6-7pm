import axios from "axios";
import { createContext, useState, useContext } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [UserData, setUserData] = useState();
  function getUSer(uid) {
    axios.get(`http://localhost:8000/Users`).then((response) => {
        console.log(response.data.filter((e) => e.UID == uid))
        setUserData(UserData)
       return response.data.filter((e) => e.UID == uid)

    });
  }

  return (
    <UserDataContext.Provider value={{ UserData, getUSer }}>
      {children}
    </UserDataContext.Provider>
  );
};
export function useUserData() {
  return useContext(UserDataContext);
}

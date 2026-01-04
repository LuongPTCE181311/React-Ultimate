/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  });

  const [isApploading, setIsApploading] = use

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {props.children}
    </AuthContext.Provider>
  )
};

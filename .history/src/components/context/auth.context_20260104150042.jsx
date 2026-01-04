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

  return (
    <AuthContext.Provider value={{user, setUser}}>
        // eslint-disable-next-line react/prop-types
        {props.children}
    </AuthContext.Provider>
  )
};

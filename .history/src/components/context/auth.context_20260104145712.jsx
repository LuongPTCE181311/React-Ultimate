import { createContext, useState } from "react";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

const AuthWrapper = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  });

  return (
    <AuthContext.Provider value>

    </AuthContext.Provider>
  )
};

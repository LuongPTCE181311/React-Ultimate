import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

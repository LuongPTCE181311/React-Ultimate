import { createContext } from "react";

const AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "ADMIN",
  avatar: "",
  id: "",
});

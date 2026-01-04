import { createContext } from "react";

const AuthContext = createContext({
  email: "admin@gmail.com",
  phone: "",
  fullName: "",
  role: "ADMIN",
  avatar: "",
  id: "",
});

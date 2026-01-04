import { createContext } from "react";

const AuthContext = createContext({
  email: "admin@gmail.com",
  phone: "123456789",
  fullName: "",
  role: "ADMIN",
  avatar: "",
  id: "",
});

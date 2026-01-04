import { createContext } from "react";

const AuthContext = createContext({
  email: "admin@gmail.com",
  phone: "123456789",
  fullName: "I'm Admin Update 123456",
  role: "ADMIN",
  avatar: "",

  id: "",
});

import { createContext } from "react";

exconst AuthContext = createContext({
  email: "",
  phone: "",
  fullName: "",
  role: "ADMIN",
  avatar: "",
  id: "",
});

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>
        {props.children}
    </>;
  }
  return 
};

export default PrivateRoute;

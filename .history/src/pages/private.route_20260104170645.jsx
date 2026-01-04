import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    return (  
        <></>
    );
}
 
export default PrivateRoute;
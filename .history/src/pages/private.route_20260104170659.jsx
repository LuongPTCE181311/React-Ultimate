import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    if(user && use)
    return (  
        <></>
    );
}
 
export default PrivateRoute;
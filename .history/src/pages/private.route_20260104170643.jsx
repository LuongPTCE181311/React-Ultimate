import { useContext } from "react";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    return (  
        <></>
    );
}
 
export default PrivateRoute;
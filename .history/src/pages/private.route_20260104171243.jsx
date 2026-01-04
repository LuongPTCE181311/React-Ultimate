/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>
        {props.children}
    </>;
  }
//   return <Navigate to="/login" replace/>
return (
    <Result
      status="404"
      title="Oops!"
      subTitle={error.statusText || error.message}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to home page</span>
          </Link>
        </Button>
      }
    />
)
};

export default PrivateRoute;

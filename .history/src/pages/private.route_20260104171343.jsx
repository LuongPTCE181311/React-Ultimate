/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>;
  }
  //   return <Navigate to="/login" replace/>
  return (
    <Result
      status="403"
      title="Unauthorize"
      subTitle={"ban can dang nhap nguon tai nguyen"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to home page</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;

import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <div>Login page</div>;
};

export default LoginPage;
